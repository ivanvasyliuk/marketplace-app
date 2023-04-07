import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {},
  logo: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 103,
  },
  optionContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth * 2,
    borderTopWidth: StyleSheet.hairlineWidth * 2,
    borderColor: colors.border,
    height: 44,
  },
  logOutTitle: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 21,
    color: colors.primary,
    marginLeft: 8,
  },
  loginBotton: {
    alignItems: "center",
    justifyContent: "center",
    width: 72,
    height: 44,
    backgroundColor: colors.primary,
    color: colors.white,
    borderRadius: 44,
  },
  loginButtonText: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 21,
    color: colors.white,
  },
});
export default styles;
