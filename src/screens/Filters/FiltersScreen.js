import React, { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { observer } from "mobx-react";
import s from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import Touchable from "../../components/Touchable/Touchable";
import { useStore } from "../../stores/createStore";
import PriceRangeInput from "../../components/Form/PriceRangeInput/PriceRangeInput";
import SearchInputField from "../../components/SearchInputField/SearchInputField";
import MySegmentedControlField from "../../components/Form/MySegmentedControlField/MySegmentedControlField";

const FiltersScreen = () => {
  const [filtersValues, setFiltersValues] = useState({
    price: "",
    search: "",
    sortBy: "",
  });
  const [index, setIndex] = useState(0);
  const [sortIndex, setSortIndex] = useState(0);
  const navigation = useNavigation();
  const route = useRoute();
  const store = useStore();

  console.log("filters", filtersValues);

  useEffect(() => {
    setFiltersValues({ ...filtersValues, ...route.params.filtersValues });
    if (filtersValues.sortBy) {
      setSortIndex(
        ["Lowest", "Highest", "Newest"].indexOf(filtersValues.sortBy)
      );
    }
  }, []);

  // console.log("filters ", route.params);
  // const filtersValues = route.params.filtersValues;
  // const setFiltersValues = route.params.filtersSubmit;

  function onSubmit() {
    // if (price[0] > price[1]) price[1] = price[0];
    route.params.filtersSubmit(filtersValues);

    navigation.goBack();
  }

  return (
    <View style={s.container}>
      <View style={s.contentContainer}>
        <View style={s.searchContainer}>
          <SearchInputField
            value={filtersValues.search}
            filtersValues={filtersValues}
            setFiltersValues={setFiltersValues}
            placeholder="Search"
          />
        </View>
        <View style={s.segmentContainer}>
          <PriceRangeInput
            filtersValues={filtersValues}
            priceRange={filtersValues.price}
            setFiltersValues={setFiltersValues}
          />
        </View>
        <View style={s.sortSegmentContainer}>
          <Text style={s.title}>Sort by</Text>
          <MySegmentedControlField
            values={["Lowest", "Highest", "Newest"]}
            index={sortIndex}
            setIndex={setSortIndex}
            value={"sortBy"}
            filtersValues={filtersValues}
            setFiltersValues={setFiltersValues}
          />
        </View>
      </View>
      <Touchable onPress={onSubmit}>
        <View style={s.submitButton}>
          <Text style={{ textTransform: "uppercase", color: "white" }}>
            Show results
          </Text>
        </View>
      </Touchable>
    </View>
  );
};

export default observer(FiltersScreen);
