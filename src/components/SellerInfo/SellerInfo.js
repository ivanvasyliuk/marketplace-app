import React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import screens from "../../navigation/screens";
import Touchable from "../Touchable/Touchable";
import UserImage from "../User/UserImage/UserImage";
import s from "./styles";

const SellerInfo = ({ product }) => {
  const navigation = useNavigation();

  function onPress() {
    navigation.navigate(screens.Profile, {
      owner: { owner: product.owner },
    });
  }

  return (
    <View style={{ flexDirection: "row" }}>
      <View style={s.avatarContainer}>
        <UserImage image={product.owner.avatar} size={48} />
      </View>
      <View>
        <Text>{product.owner.fullName}</Text>
        <Touchable onPress={onPress}>
          <Text style={s.seeAllPostText}>
            See all {product.owner.fullName} posts
          </Text>
        </Touchable>
      </View>
    </View>
  );
};
export default SellerInfo;
