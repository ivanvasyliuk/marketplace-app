import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import ProductItem from "../ProductItem/ProductItem";
import { FlashList } from "@shopify/flash-list";
import s from "./styles";
import { observer } from "mobx-react";
import ListFooter from "../../ListFooter/ListFooter";

const ProductList = ({ list, onScroll }) => {
  return (
    <View style={s.container}>
      <FlashList
        data={list}
        renderItem={({ item, index }) => (
          <ProductItem index={index} product={item} />
        )}
        numColumns={2}
        keyExtractor={(item) => item.id}
        // ListFooterComponent={() => <ListFooter />}
        // contentContainerStyle={s.listContainer}
        contentContainerStyle={s.listContainer}
        estimatedItemSize={200}
        onEndReachedThreshold={0.3}
        onScroll={onScroll}
      />
    </View>
  );
};
export default observer(ProductList);
