import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  sortSegmentContainer: {
    padding: 16,
  },

  segmentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 21,
    textTransform: "uppercase",
  },
  searchContainer: {
    height: 76,
    padding: 16,
  },
  contentContainer: { backgroundColor: colors.white },
});
export default styles;
