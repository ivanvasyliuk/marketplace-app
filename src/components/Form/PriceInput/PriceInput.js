import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import MainInputField from "../MainInputField";
import colors from "../../../styles/colors";
import s from "./styles";
import MySegmentedControl from "../MySegmentedControl/MySegmentedControl";

const PriceInput = () => {
  const [index, setIndex] = useState(0);

  return (
    <View style={s.container}>
      <MySegmentedControl
        values={["Price", "Free"]}
        index={index}
        setIndex={setIndex}
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
