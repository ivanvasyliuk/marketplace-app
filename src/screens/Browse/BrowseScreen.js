import { useNavigation, useRoute } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import { observer } from "mobx-react";
import React, { Fragment, useEffect, useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import FiltersListItem from "../../components/FiltersListItem/FiltersListItem";
import ProductList from "../../components/Products/ProductList/ProductList";
import SearchList from "../../components/Products/SearchList/SearchList";
import screens from "../../navigation/screens";
import { useStore } from "../../stores/createStore";
import s from "./styles";

const BrowseScreen = () => {
  const [filtersValues, setFiltersValues] = useState({
    price: "",
    search: "",
    sortBy: "",
  });
  const navigation = useNavigation();
  const store = useStore();
  const { params } = useRoute();

  const list = store.products.latestProducts.list;

  function handlerFiltersSubmit(values) {
    setFiltersValues({ ...filtersValues, ...values });

    console.log("filters submit");
  }

  useEffect(() => {
    if (params?.search) {
      store.products.latestProducts.search(params.search);
    }
    store.products.latestProducts.fetchLatest.run();
    navigation.setParams({
      filtersSubmit: handlerFiltersSubmit,
      filtersValues: filtersValues,
    });
  }, [params?.search, filtersValues]);

  return (
    <Fragment>
      {!!params?.search && <SearchList list={store.latestProducts.searcList} />}
      <View style={{ height: 52, justifyContent: "center" }}>
        <FlashList
          data={Object.values(filtersValues).filter((item) => item)}
          renderItem={({ item }) => (
            <FiltersListItem
              setFiltersValues={setFiltersValues}
              filtersValues={filtersValues}
              filter={item}
            />
          )}
          horizontal
        />
      </View>
      <View style={s.container}>
        <ProductList list={list} />
      </View>
    </Fragment>
  );
};

export default observer(BrowseScreen);
