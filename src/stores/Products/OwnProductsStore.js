import { getParent, types } from 'mobx-state-tree';
import Api from 'src/api';
import { Product, ProductCollection } from '../schemas';
import { asyncModel } from '../utils';
import { ProductModel } from './ProductModel';

export const OwnProductStore = types
  .model('OwnPrducts', {
    items: types.array(
      types.reference(types.late(() => ProductModel)),
    ),
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
  }));

function fetchOwnProducts(id) {
  return async function fetchOwnProductsFlow(flow, store) {
    const userStore = getParent(store);
    const userId = userStore.id;
    const res = await Api.Products.byUserId(id);
    const result = flow.merge(res.data.list, OwnPrductsSchema);

    store.setItems(result);
  };
}

function createProduct(values) {
  return async function createProductFlow(flow, store, rootStore) {
    const res = await Api.Products.createProduct(values);

    const result = flow.merge(res.data, Product);
    console.log(result);
    rootStore.ownStore.addItem(result);
  };
}
