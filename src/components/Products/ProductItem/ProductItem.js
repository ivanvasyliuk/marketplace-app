import { AntDesign } from "@expo/vector-icons";
import { observer } from "mobx-react";
import React from "react";
import { Image, Text, View } from "react-native";
import s from "./styles";

const ProductItem = ({ product }) => {
  return (
    <View style={s.container}>
      <Image style={s.image} source={{ uri: product.photos[0] }} />
      <Text style={s.itemTitle}>{product.title}</Text>
      <Text style={s.itemPrice}>${product.price}</Text>
      <AntDesign style={s.saveButton} name="save" size={16} color="green" />
    </View>
  );
};
export default observer(ProductItem);
