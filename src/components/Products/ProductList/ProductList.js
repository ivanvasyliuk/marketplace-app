import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react";
import { FlashList } from "@shopify/flash-list";
import ProductItem from "../ProductItem/ProductItem";
import s from "./styles";

const ProductList = ({
  list,
  onScroll,
  ListEmptyComponent,
  ListHeaderComponent,
}) => {
  return (
    <View style={s.container}>
      <FlashList
        data={list}
        renderItem={({ item, index }) => (
          <ProductItem index={index} product={item} />
        )}
        numColumns={2}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={s.listContainer}
        estimatedItemSize={200}
        onEndReachedThreshold={0.3}
        onScroll={onScroll}
        ListHeaderComponent={ListHeaderComponent}
      />
    </View>
  );
};
export default observer(ProductList);
