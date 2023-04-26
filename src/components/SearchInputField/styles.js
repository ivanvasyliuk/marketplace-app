import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    backgroundColor: colors.backgroundColor,
    borderColor: colors.border,
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderRadius: 8,
  },
  containerOnFocus: {
    backgroundColor: colors.white,
    borderColor: colors.primary,
  },
  input: {
    flex: 12,
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
