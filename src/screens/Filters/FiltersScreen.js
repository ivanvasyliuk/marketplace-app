import React, { useState } from "react";
import { View, Text } from "react-native";
import { observer } from "mobx-react";
import s from "./styles";
import { useNavigation } from "@react-navigation/native";
import Touchable from "../../components/Touchable/Touchable";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import colors from "../../styles/colors";
import screens from "../../navigation/screens";
import MySegmentedControl from "../../components/Form/MySegmentedControl/MySegmentedControl";
import SearchInput from "../../components/SearchInput/SearchInput";
import { useStore } from "../../stores/createStore";

const FiltersScreen = () => {
  const store = useStore();
  const [index, setIndex] = useState(0);
  const [sortIndex, setSortIndex] = useState(0);
  const navigation = useNavigation();

  function onPress() {
    navigation.navigate(screens.Browse);
  }

  return (
    <View style={s.container}>
      <View style={s.contentContainer}>
        <View style={s.searchContainer}>
          <SearchInput placeholder="Search" />
        </View>
        <View style={s.segmentContainer}>
          <MySegmentedControl
            values={["Price", "Free"]}
            index={index}
            setIndex={setIndex}
          />
        </View>
        <View style={s.sortSegmentContainer}>
          <Text style={s.title}>Sort by</Text>
          <MySegmentedControl
            values={["Lowest", "Highest", "Newest"]}
            index={sortIndex}
            setIndex={setSortIndex}
          />
        </View>
      </View>
      <Touchable onPress={onPress}>
        <View
          style={{
            width: "100%",
            height: 44,
            backgroundColor: colors.primary,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ textTransform: "uppercase", color: "white" }}>
            Show results
          </Text>
        </View>
      </Touchable>
    </View>
  );
};

export default observer(FiltersScreen);
