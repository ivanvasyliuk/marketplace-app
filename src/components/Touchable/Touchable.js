import React from "react";
import { TouchableNativeFeedback, TouchableOpacity, View } from "react-native";

const isAndroid = Platform.OS === "android";

const Touchable = (props) =>
  isAndroid && !props.isOpacity ? (
    <TouchableNativeFeedback {...props}>
      <View style={props.style}>{props.children}</View>
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity {...props}>{props.children}</TouchableOpacity>
  );

export default Touchable;
