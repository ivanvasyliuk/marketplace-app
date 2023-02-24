import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  inputContainer: {
    height: 44,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.gray,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 16,
  },
  errorInput: {
    borderColor: "red",
  },
  errorLabel: {
    color: "red",
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
    textTransform: "capitalize",
  },
});
export default styles;
