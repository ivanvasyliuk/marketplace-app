import React from "react";
import { SafeAreaView, Text } from "react-native";
import ProductItem from "../ProductItem/ProductItem";
import { FlashList } from "@shopify/flash-list";
import s from "./styles";
import { observer } from "mobx-react";
import ListFooter from "../../ListFooter/ListFooter";

const ProductList = ({ list }) => {
  console.log("list", list.length);
  return (
    <SafeAreaView style={s.container}>
      <FlashList
        data={list}
        renderItem={({ item }) => <ProductItem product={item} />}
        numColumns={2}
        keyExtractor={(item) => item.id}
        ListFooterComponent={() => <ListFooter />}
        contentContainerStyle={s.listContainer}
        estimatedItemSize={200}
        onEndReachedThreshold={0.3}
      />
    </SafeAreaView>
  );
};
export default observer(ProductList);
