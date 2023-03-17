import { types } from "mobx-state-tree";
import Api from "../api";
import { AuthStore } from "./Auth/AuthStore";
import { EntitiesStore } from "./EntitiesStore";
import { LatestProductsStore } from "./Products/LatestProductsStore";
import { OwnProductStore } from "./Products/OwnProductsStore";
import { ViewerStore } from "./ViewerStore";

export const RootStore = types
  .model("RootStore", {
    auth: types.optional(AuthStore, {}),
    viewer: types.optional(ViewerStore, {}),
    entities: types.optional(EntitiesStore, {}),
    ownStore: types.optional(OwnProductStore, {}),
    latestProducts: types.optional(LatestProductsStore, {}),
  })
  .actions((store) => ({
    async bootstrap() {
      try {
        const token = localStorage.getItem("__token");
        // TODO: check for undifined token

        Api.Auth.setToken(token);

        const res = await Api.Account.getUser();

        store.viewer.setViewer(res.data);
      } catch (err) {}
    },
  }));
