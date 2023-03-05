import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import s from "./styles";

const MainInput = ({
  name,
  value,
  handleChange,
  errors,
  touched,
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasError = errors[name] && touched[name];

  return (
    <>
      <View
        style={[
          s.container,
          isFocused && s.focusedInput,
          hasError && s.errorInput,
        ]}
      >
        <TextInput
          {...props}
          style={s.input}
          onChangeText={handleChange(name)}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
        />
        <Text style={[s.inEnd, hasError ? s.redErrorText : s.grayErrorText]}>
          {errors[name] && errors[name]}
        </Text>
      </View>
    </>
  );
};
export default MainInput;
