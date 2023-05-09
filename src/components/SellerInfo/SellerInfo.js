import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import colors from "../../styles/colors";
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
        <Text>
          {product.owner.fullName} is{" "}
          <Text style={s.onlineStatus}>{`${"online"}`}</Text>
        </Text>
        <Touchable onPress={onPress}>
          <Text
            style={{
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: 16,
              lineHeight: 24,
              color: colors.blue,
            }}
          >
            See all James’s posts
          </Text>
        </Touchable>
      </View>
    </View>
  );
};
export default SellerInfo;
