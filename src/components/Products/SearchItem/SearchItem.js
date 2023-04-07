import { Text, View } from "react-native";
import s from "./styles";
const SearchItem = ({ product }) => {
  return (
    <View style={s.container}>
      <Text>{product.title}</Text>
    </View>
  );
};
export default SearchItem;
