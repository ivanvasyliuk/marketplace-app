import { getParent, types } from "mobx-state-tree";
import Api from "../../api";
import Fuse from "fuse.js";
import { OwnProducts, Product } from "../schemas";
import { asyncModel } from "../utils";
import { ProductModel } from "./ProductModel";

export const OwnProductStore = types
  .model("OwnProducts", {
    items: types.array(types.reference(types.late(() => ProductModel))),
    searchItems: types.array(types.reference(types.late(() => ProductModel))),
    fetch: asyncModel(fetchOwnProducts),
    createProduct: asyncModel(createProduct),
  })
  .actions((store) => ({
    setItems(items) {
      store.items = items;
    },
    addItem(item) {
      store.items.push(item);
    },
  }))
  .views((store) => ({
    get list() {
      return store.items.slice();
    },
    get searcList() {
      return store.searchItems.slice();
    },
    get fuse() {
      const fuse = new Fuse(store.items, {
        keys: ["title", "description"],
        shouldSort: true,
        includeMatches: true,
        threshold: 0.3,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        findAllMatches: true,
      });
      return fuse;
    },
  }))
  .actions((store) => ({
    search(text) {
      const fuse = store.fuse;
      const result = fuse.search(text);
      store.searchItems = result.map((product) => product.item);
    },
  }));

function fetchOwnProducts(id) {
  return async function fetchOwnProductsFlow(flow, store) {
    const userStore = getParent(store);
    const userId = userStore.id;
    const res = await Api.Products.byUserId(id);
    const result = flow.merge(res.data.list, OwnProducts);
    store.setItems(result);
  };
}

function createProduct(values) {
  return async function createProductFlow(flow, store, rootStore) {
    const res = await Api.Products.createProduct(values);

    const result = flow.merge(res.data, Product);
    console.log("ProductSchema", result);
    console.log(result);
    rootStore.ownStore.addItem(result);
  };
}
