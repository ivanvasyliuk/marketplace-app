import { Ionicons } from "@expo/vector-icons";
import { observer } from "mobx-react";
import React from "react";
import { View } from "react-native";
import Touchable from "../../Touchable/Touchable";
import s from "./styles";

const FavoriteButton = ({ product, style }) => {
  return (
    <View style={style}>
      <View style={s.container}>
        <Touchable onPress={() => product.toogleFavorite.run(product)}>
          <Ionicons
            style={[product.saved ? s.greenButton : s.grayButton]}
            name="md-bookmark"
            size={24}
          />
        </Touchable>
      </View>
    </View>
  );
};
export default observer(FavoriteButton);
