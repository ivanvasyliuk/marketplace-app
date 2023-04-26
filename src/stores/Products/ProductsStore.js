import { types } from "mobx-state-tree";
import { asyncModel } from "../utils";
import { ProductModel } from "./ProductModel";

export const LatestProductsStore = types.model("LatestProductsStore", {
  // ownStore: types.optional(OwnProductStore, {}),
  // latestProducts: types.optional(LatestProductsStore, {}),
  // items: types.array(types.reference(ProductModel)),
  // searchItems: types.array(types.reference(types.late(() => ProductModel))),
  // hasNoMore: false,
  // fetchLatest: asyncModel(fetchLatest),
  // fetchMore: asyncModel(fetchMore, false),
});
