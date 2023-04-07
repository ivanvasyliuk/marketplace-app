import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: { width: "100%", minHeight: 356 },
  titleAndPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 72,
    flex: 1,
    backgroundColor: "#00000043",
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    paddingTop: 8,
    paddingHorizontal: 16,
  },
  title: {
    lineHeight: 24,
    fontSize: 16,
    fontWeight: "700",
    color: "white",
  },
  timeAndLocation: {
    lineHeight: 24,
    fontSize: 16,
    fontWeight: "700",
    color: "gray",
  },
  price: {
    position: "absolute",
    right: 16,
    top: 8,
    lineHeight: 24,
    fontSize: 16,
    fontWeight: "700",
    color: "white",
  },
  descriptionContainer: {
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  descrioption: {
    lineHeight: 24,
    fontSize: 16,
    fontWeight: "400",
  },
  horizontalLine: {
    borderBottomColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 72,
    flex: 1,
    backgroundColor: "#00000043",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    paddingHorizontal: 18,
  },
  rigthButtonsInHeader: {
    flexDirection: "row",
    width: 120,
    justifyContent: "space-between",
  },
});
export default styles;
