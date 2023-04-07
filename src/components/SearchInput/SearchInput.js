import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { Button, TextInput, View } from "react-native";
import s from "./styles";

const debounce = require("lodash.debounce");

const SearchInput = ({ sizes, style, ...props }) => {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);

  const changeTextDebouncer = useCallback(
    debounce((search) => {
      navigation.setParams({ search });
    }, 500),
    []
  );

  const onChangeHandler = (search) => {
    changeTextDebouncer(search);
  };

  return (
    <View style={[s.container, isFocused && s.containerOnFocus, style]}>
      <AntDesign
        style={[s.searchIcon, isFocused && s.focusedIcon]}
        name="search1"
        size={16}
      />
      <TextInput
        {...props}
        placeholder="Search"
        style={[s.input, style]}
        onChangeText={onChangeHandler}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
      />
    </View>
  );
};
export default SearchInput;
