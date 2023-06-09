import React, { useState } from "react";
import { View } from "react-native";
import MainInputField from "../MainInputField";
import MySegmentedControl from "../MySegmentedControl.js/MySegmentedControl";
import s from "./styles";

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
