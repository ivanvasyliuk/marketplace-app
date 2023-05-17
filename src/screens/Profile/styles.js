import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { height } from "../../styles/dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boldText: { fontSize: 16, fontWeight: "500" },
  settingsButton: {
    position: "absolute",
    top: 19.5,
    right: 10,
  },
});
export default styles;
