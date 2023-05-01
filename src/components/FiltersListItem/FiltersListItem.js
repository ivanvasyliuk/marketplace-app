import React from "react";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Touchable from "../Touchable/Touchable";

const FiltersListItem = ({ filter, setFiltersValues, filtersValues }) => {
  const filterValue = Array.isArray(filter)
    ? `${filter[0]} - ${filter[1]}`
    : filter;

  const filterKey = Object.keys(filtersValues).find(
    (key) => filtersValues[key] === filter
  );

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
        onPress={() => setFiltersValues({ ...filtersValues, [filterKey]: "" })}
      >
        <AntDesign name="close" color="gray" size={16} />
      </Touchable>
    </View>
  );
};
export default FiltersListItem;