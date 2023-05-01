// import { types } from "mobx-state-tree";
// import { asyncModel } from "../utils";
// import { LatestProductsStore } from "./LatestProductsStore";
// import { OwnProductStore } from "./OwnProductsStore";
// import { ProductModel } from "./ProductModel";

// export const ProductsStore = types
//   .model("ProductsStore", {
//     ownStore: types.optional(OwnProductStore, {}),
//     latestProducts: types.optional(LatestProductsStore, {}),
//     // items: types.array(types.reference(ProductModel)),
//     // searchItems: types.array(types.reference(types.late(() => ProductModel))),
//     // hasNoMore: false,
//     // fetchLatest: asyncModel(fetchLatest),
//     // fetchMore: asyncModel(fetchMore, false),
//   })
//   .views((store) => ({
//     get savedList() {
//       return [
//         ...store.ownStore.filter((item) => item.saved),
//         ...store.latestProducts.filter((item) => item.saved),
//       ];
//     },
//   }))
//   .actions((store) => ({
//     addFavoriteProduct(id) {
//       store.savedProducts.push(id);
//     },
//   }));
