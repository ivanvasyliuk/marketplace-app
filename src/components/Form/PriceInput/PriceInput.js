import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import MainInputField from "../MainInputField";
import colors from "../../../styles/colors";
import s from "./styles";

const PriceInput = () => {
  const [index, setIndex] = useState(0);

  return (
    <View style={s.container}>
      <SegmentedControl
        style={s.borderForSegment}
        values={["Price", "Free"]}
        selectedIndex={index}
        tintColor={colors.primary}
        backgroundColor={colors.white}
        fontStyle={{
          fontSize: 16,
          color: colors.primary,
        }}
        activeFontStyle={{ fontSize: 16, color: colors.white }}
        onChange={(event) => {
          setIndex(event.nativeEvent.selectedSegmentIndex);
        }}
      />
      {index == 0 && (
        <>
          <View style={s.horizontalLine} />
          <MainInputField
            keyboardType="numeric"
            name="price"
            placeholder="Enter price..."
          />
        </>
      )}
    </View>
  );
};
export default PriceInput;
