import { StyleSheet } from "react-native";
import { dimensions } from "../../styles";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
    paddingHorizontal: 8,
    elevation: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default styles;
