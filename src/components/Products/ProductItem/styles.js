import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: 148,
    height: 209,
    borderColor: colors.border,
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: 148,
    height: 148,
  },
  saveButton: {
    position: "absolute",
    right: 10,
    bottom: 10,
    color: colors.border,
  },
  itemTitle: {
    fontSize: 14,
    lineHeight: 21,
    marginLeft: 12,
    marginTop: 8,
  },
  itemPrice: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 12,
    fontWeight: "bold",
  },
});
export default styles;
