import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

const styles = StyleSheet.create({
  touchableContainer: {},
  container: {
    width: "100%",
    height: 82,
    padding: 8,
    backgroundColor: colors.white,
    // alignItems: "center",
    flexDirection: "row",
  },
  titlesContainer: { flex: 1 },
  productTitle: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
  },
  ownerTitle: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 21,
    color: colors.primary,
  },
  lastMessageLabel: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 21,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 8,
  },
  time: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 21,
    textAlign: "right",
    color: colors.border,
  },
});
export default styles;
