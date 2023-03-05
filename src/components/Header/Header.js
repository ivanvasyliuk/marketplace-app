import React from "react";
import { View } from "react-native";
import s from "./styles";

function Header({ children }) {
  return <View styles={s.container}>{children}</View>;
}
