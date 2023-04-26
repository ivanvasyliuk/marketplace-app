import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import Touchable from "../Touchable/Touchable";

const FiltersListItem = ({ filter }) => {
  const filterValue = Array.isArray(filter)
    ? `${filter[0]} - ${filter[1]}`
    : filter;

  return (
    <View
      style={{
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
        marginHorizontal: 5,
        flexDirection: "row",
      }}
    >
      <Text>{filterValue}</Text>
      <Touchable
        style={{ paddingLeft: 8 }}
        isOpacity
        // onPress={() => filter}
      >
        <AntDesign name="close" color="gray" size={16} />
      </Touchable>
    </View>
  );
};
export default FiltersListItem;
