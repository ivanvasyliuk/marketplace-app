import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopColor: colors.gray,
    borderTopWidth: 0.5,
    height: 60,
  },
  labelContainer: {
    flexDirection: "row",
  },
  touchable: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
  },
  navigateLabel: {
    color: colors.primary,
    textTransform: "uppercase",
  },
  buttonLabel: {
    textTransform: "uppercase",
    color: colors.white,
  },
  input: {},
  doYouHaveAcc: {
    color: colors.gray,
    fontSize: 14,
  },
});
export default styles;