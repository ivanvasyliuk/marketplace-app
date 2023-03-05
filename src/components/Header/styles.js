import { Dimensions, StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  headerContainer: {
    // height: dimensions.headerHeight
    paddingTop: 20,
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
