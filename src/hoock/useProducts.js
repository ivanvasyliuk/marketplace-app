import { useMemo } from "react";

export const useSortedProducts = (products, sort) => {
  const sortedProducts = useMemo(() => {
    if (sort) {
      return [...products].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return products;
  }, [sort, products]);

  return sortedProducts;
};

export const useProducts = (products, sort, query) => {
  const sortedProducts = useSortedProducts(products, sort);
  const sortedAndSearchedProducts = useMemo(() => {
    return sortedProducts.filter((product) =>
      product.title.toLocaleLowerCase().includes(query)
    );
  }, [query, sortedProducts]);
  return sortedAndSearchedProducts;
};
