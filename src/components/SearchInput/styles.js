import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: 231,
    height: 36,
    // backgroundColor: colors.white,
    backgroundColor: "green",
    borderColor: colors.border,
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderRadius: 8,
  },
  containerOnFocus: {
    borderColor: colors.primary,
  },
  input: {
    width: 187,
    height: 24,
  },
  searchIcon: {
    margin: 10,
    color: colors.border,
  },
  focusedIcon: {
    color: colors.primary,
  },
});
export default styles;
