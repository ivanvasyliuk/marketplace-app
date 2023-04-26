import { getParent, getRoot, types } from "mobx-state-tree";
import Api from "../../api";
import { MessageCollectionSchema, MessageSchema } from "../schemas";
import { asyncModel } from "../utils";
import { MessageModel } from "./MessageModel";

export const MessageStore = types
  .model("MessageStore", {
    items: types.array(types.reference(MessageModel)),

    fetch: asyncModel(fetchMessages),
  })
  .views((store) => ({
    get asList() {
      return store.items.slice();
    },
    get chatId() {
      return getParent(store).id;
    },
  }))
  .actions((store) => ({
    addMessage(message) {
      const result = getRoot(store).entities.normalize(message, MessageSchema);

      store.items.unshift(result);
    },
    setItems(items) {
      store.items = items;
    },
  }));

function fetchMessages() {
  return async function fetchMessagesFlow(flow, store) {
    const res = await Api.Chats.getMessages(store.chatId);
    const result = flow.merge(res.data, MessageCollectionSchema);

    store.setItems(result);
  };
}
