import React, { useRef, useState } from "react";
import { TextInput, TouchableWithoutFeedback, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Touchable from "../Touchable/Touchable";
import s from "./styles";

const SearchInputField = ({
  sizes,
  style,
  filtersValues,
  setFiltersValues,
  value,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef();

  function onChange(e) {
    setFiltersValues({ ...filtersValues, search: e });
  }

  return (
    <TouchableWithoutFeedback onPress={() => inputRef.current.focus()}>
      <View style={[s.container, isFocused && s.containerOnFocus, style]}>
        <AntDesign
          style={[s.searchIcon, isFocused && s.focusedIcon]}
          name="search1"
          size={16}
        />
        <TextInput
          ref={inputRef}
          style={[s.input, style]}
          onChangeText={onChange}
          d
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          value={value}
          {...props}
        />
        {filtersValues.search && (
          <Touchable
            isOpacity
            onPress={() => setFiltersValues({ ...filtersValues, search: "" })}
          >
            <View
              style={{
                color: "green",
                padding: 12,
                flex: 1,
              }}
            >
              <AntDesign
                style={{ color: "gray", alignSelf: "flex-end" }}
                name="closecircle"
                size={16}
              />
            </View>
          </Touchable>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
export default SearchInputField;
