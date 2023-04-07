import { useNavigation, useRoute } from "@react-navigation/native";
import { observer } from "mobx-react";
import React, { Fragment, useEffect } from "react";
import { Button, View } from "react-native";
import ProductList from "../../components/Products/ProductList/ProductList";
import SearchList from "../../components/Products/SearchList/SearchList";
import screens from "../../navigation/screens";
import { useStore } from "../../stores/createStore";
import s from "./styles";

const BrowseScreen = () => {
  const navigation = useNavigation();
  const store = useStore();
  const { params } = useRoute();

  const list = store.latestProducts.list;

  useEffect(() => {
    if (params?.search) {
      store.latestProducts.search(params.search);
    }
    store.latestProducts.fetchLatest.run();
  }, [params?.search]);

  return (
    <Fragment>
      {!!params?.search && <SearchList list={store.latestProducts.searcList} />}

      <View style={s.container}>
        <ProductList list={list} />
      </View>
    </Fragment>
  );
};

export default observer(BrowseScreen);
