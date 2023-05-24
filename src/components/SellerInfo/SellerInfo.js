import React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import screens from "../../navigation/screens";
import Touchable from "../Touchable/Touchable";
import UserImage from "../User/UserImage/UserImage";
import s from "./styles";
import { useStore } from "../../stores/createStore";

const SellerInfo = ({ product }) => {
  const navigation = useNavigation();
  const store = useStore();

  function onPress() {
    if (product.owner.id === store.viewer.userModel?.id) {
      navigation.navigate(screens.ProfileTab, {
        screen: screens.Profile,
        params: { owner: { owner: product.owner } },
      });
    } else {
      navigation.navigate(screens.Profile, {
        owner: { owner: product.owner },
      });
    }
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
