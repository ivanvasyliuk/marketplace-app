import { TouchableNativeFeedback, TouchableOpacity, View } from "react-native";

const isAndroid = Platform.OS === "android";

const Touchable = (props) =>
  isAndroid ? (
    <TouchableNativeFeedback {...props}>
      <View style={props.style}>{props.children}</View>
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity {...props}>{props.children}</TouchableOpacity>
  );

export default Touchable;
