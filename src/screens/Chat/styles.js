import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    // position: "absolute",
    // width: "100%",
    // minHeight: 52,
    // maxHeight: 150,
    // bottom: 0,
    padding: 8,
    backgroundColor: colors.white,
    borderTopColor: colors.border,
    borderTopWidth: StyleSheet.hairlineWidth * 2,
    backgroundColor: colors.white,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    borderColor: colors.border,
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderRadius: 8,
    // flexDirection: "row",
    // alignItems: "center",
    // minHeight: 36,
    // bottom: 0,
    // paddingVertical: 6,
    // paddingHorizontal: 16,
    // backgroundColor: "green",
  },
  containerOnFocus: {
    backgroundColor: colors.white,
    borderColor: colors.primary,
  },
  input: {
    fontSize: 16,
    //TODO: lineHeight doesn't work
    lineHeight: 24,
    backgroundColor: colors.backgroundColor,
    maxHeight: 200,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
    // flex: 1,
    // width: "100%",
  },
  icon: {
    alignSelf: "flex-end",
    // position: "absolute",
    // bottom: 0,
    // right: 0,
    marginLeft: 10,
    color: colors.primary,
  },
  focusedIcon: {
    color: colors.primary,
  },
});
export default styles;
