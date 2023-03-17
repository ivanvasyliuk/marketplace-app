import { observer } from "mobx-react";
import React, { Fragment, useEffect, useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import Header from "../../components/Header/Header";
import ProductList from "../../components/Products/ProductList/ProductList";
import SearchInput from "../../components/SearchInput/SearchInput";
import screens from "../../navigation/screens";
import { useStore } from "../../stores/createStore";
import colors from "../../styles/colors";
import styles from "./styles";

const BrowseScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const store = useStore();

  const list = store.ownStore.list;

  useEffect(() => {
    // store.latestProducts.fetchLatest.run();
    // navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <Fragment>
      {/* <Header>
        <SearchInput />
      </Header> */}
      {/* {search.length > 0 && (
        <View
          style={{ position: "absolute", flex: 1, backgroundColor: "green" }}
        ></View>
      )} */}

      <View style={styles.container}>
        <ProductList list={list} />
      </View>
    </Fragment>
  );
};

export default observer(BrowseScreen);
