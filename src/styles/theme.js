import colors from "./colors";
import { DefaultTheme } from "@react-navigation/native";

const theme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: colors.white },
};

export default theme;
