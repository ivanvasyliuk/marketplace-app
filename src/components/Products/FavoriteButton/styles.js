import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    padding: 12,
    borderRadius: 15,
  },
  grayButton: {
    color: colors.border,
  },
  greenButton: {
    color: colors.primary,
  },
});
export default styles;
