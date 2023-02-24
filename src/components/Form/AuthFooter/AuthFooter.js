import React from "react";
import {
  Platform,
  Text,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import screens from "../../../navigation/screens";
import s from "./styles";

const isAndroid = Platform.OS === "android";

const Touchable = (props) =>
  isAndroid ? (
    <TouchableNativeFeedback {...props}>
      <View style={props.style}>{props.children}</View>
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity {...props}>{props.children}</TouchableOpacity>
  );

const AuthFooter = ({ navigation, onSubmit, buttonLabel }) => {
  return (
    <View style={s.container}>
      <View style={s.labelContainer}>
        <Text style={s.doYouHaveAcc}>
          {buttonLabel.length == 5 ? "Don’t have" : "Have"} an account?
        </Text>
        <Text
          style={s.navigateLabel}
          onPress={() =>
            navigation.navigate(
              buttonLabel.length == 5 ? screens.Register : screens.Login
            )
          }
        >
          {buttonLabel.length == 5 ? "  Register" : "  Login"}
        </Text>
      </View>
      <Touchable onPress={onSubmit} style={s.touchable}>
        <Text style={s.buttonLabel}>{buttonLabel}</Text>
      </Touchable>
    </View>
  );
};

export default AuthFooter;
