import { SafeAreaView, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import s from "./styles";
import SearchItem from "../SearchItem/SearchItem";
const SearchList = ({ list }) => {
  return (
    <SafeAreaView style={s.container}>
      <FlashList
        data={list}
        contentContainerStyle={s.searchContainer}
        renderItem={({ item }) => <SearchItem product={item} />}
        ItemSeparatorComponent={() => (
          <View
            style={{
              backgroundColor: "gray",
              height: 1,
              marginHorizontal: 16,
            }}
          />
        )}
        estimatedItemSize={40}
      />
    </SafeAreaView>
  );
};
export default SearchList;
