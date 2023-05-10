import { getRoot, getSnapshot, types } from "mobx-state-tree";
import Api from "../../api";
import { ChatSchema } from "../schemas";
import { UserModel } from "../users/UserModel";
import { asyncModel } from "../utils";

export const ProductModel = types
  .model("ProductModel", {
    id: types.identifierNumber,
    ownerId: types.string,
    title: types.string,
    description: types.maybeNull(types.string),
    photos: types.maybeNull(types.array(types.string)),
    location: types.maybeNull(types.string),
    price: types.number,
    saved: false,
    createdAt: types.string,
    updatedAt: types.string,
    // owner: types.maybe(types.reference(UserModel)),
    owner: types.reference(UserModel),
    toogleFavorite: asyncModel(toogleFavorite),
    createChat: asyncModel(createChat, false),
  })

  .preProcessSnapshot((snapshot) => ({
    ...snapshot,
    owner: snapshot.ownerId,
  }))

  .actions((store) => ({
    fetchOwner() {
      getRoot(store).entities.users.getById.run(store.ownerId);

      store.owner = store.ownerId;
    },
    update(product) {
      Object.assign(store, product);
      if (store.saved) {
        getRoot(store).products.savedProducts.add(store);
      } else {
        getRoot(store).products.savedProducts.removeById(store.id);
      }
    },
    // toggleFavorite: flow(function* () {
    //   const oldValue = store.isFavorite;

    //   store.isTooglingFavorite = true;
    //   store.isTooglingFavoriteError = false;
    //   store.isFavorite = !store.isFavorite;

    //   try {
    //     yield Api.Todos.update({ id: store.id, isFavorite: store.isFavorite });
    //   } catch (error) {
    //     console.log(error);
    //     store.isTooglingFavoriteError = true;
    //     store.isFavorite = oldValue;
    //   } finally {
    //     store.isTooglingFavorite = false;
    //   }
    // }),
  }));

function createChat(message) {
  return async function createChatFlow(flow, store) {
    let chatId;
    try {
      flow.start();
      const res = await Api.Chats.createChat(store.id, message);
      chatId = res.data.id;
      res.data.participants = [getSnapshot(store.owner)];

      flow.marge(res.data, ChatSchema);
      flow.success();
    } catch (err) {
      console.log(err);
      flow.error(err);

      throw err;
    }
    return chatId;
  };
}

function toogleFavorite(product) {
  return async function toogleFavoriteFlow(flow, store, rootStore) {
    try {
      flow.start();
      store.update({ saved: !store.saved });
      await Api.Products.update(store);
      flow.success();
    } catch (error) {
      flow.error();
    }
  };
}
