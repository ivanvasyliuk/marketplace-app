import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    justifyContent: "space-between",
    flex: 1,
  },
  formContainer: {
    paddingTop: 20,
    paddingLeft: 16,
    paddingRight: 16,
  },
  header: {
    ...Platform.select({
      android: {
        elevation: 0,
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      ios: {},
    }),
  },
  inputContainer: {
    height: 44,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.gray,
    marginHorizontal: 16,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 16,
  },
  focusedInput: {
    borderColor: colors.primary,
  },
  label: {
    position: "absolute",
    left: 16,
    top: -12,
    backgroundColor: colors.white,
    paddingHorizontal: 8,
    color: colors.primary,
    fontWeight: "500",
  },
  touchable: {
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
  },
  input: {},
});
export default styles;
