import { types } from "mobx-state-tree";
import { normalize } from "normalizr";
import { ChatsCollection } from "./Chats/ChatsCollection";
import { MessagesCollection } from "./Chats/MessagesCollection";
import { ProductsCollection } from "./Products/ProductsCollection";
import { UsersCollection } from "./users/UsersCollection";

export const EntitiesStore = types
  .model("EntitiesStore", {
    products: ProductsCollection,
    users: UsersCollection,
    chats: ChatsCollection,
    messages: MessagesCollection,
  })
  .actions((store) => ({
    merge(entities) {
      Object.keys(entities).forEach((collectionName) => {
        const collectionEntities = entities[collectionName];

        Object.keys(collectionEntities).forEach((id) => {
          const value = collectionEntities[id];

          store[collectionName].add(id, value);
        });
      });
    },
    normalize(items, schema) {
      const { result, entities } = normalize(items, schema);

      store.merge(entities);

      return result;
    },
  }));

// const UserSettingsModel = ResolveUser.named("UserSettings").props({
//   height: types.number,
//   color: types.string,
// });
// const UserShopModel = ResolveUser.named("UserShop").props({
//   name: types.string,
// });

// UserModel = types
//   .model("User", {
//     id: types.identifier,
//     firstName: types.string,
//     lastName: types.string,
//     settings: types.reference(UserSettingsModel),
//     shop: types.reference(UserShopModel),
//   })
//   .preProcessSnapshot((snapshot) => ({
//     settings: snapshot.id,
//     shop: snapshot.id,
//   }));

// const UserStore = types.model("UserStore", {
//   users: types.map(UserModel),
//   shopUsers: types.map(UserShopModel),
//   settingsUsers: types.map(UserSettingsModel),
// });
