import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import screens from "../../navigation/screens";
import Touchable from "../Touchable/Touchable";
import s from "./styles";

const GoToLoginButton = () => {
  const navigation = useNavigation();

  function onPress() {
    navigation.navigate(screens.Auth, {
      screen: screens.Login,
    });
  }

  return (
    <Touchable isOpacity onPress={onPress}>
      <View style={s.container}>
        <Text style={s.text}>Login</Text>
      </View>
    </Touchable>
  );
};
export default GoToLoginButton;
