import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import s from "./styles";

const SearchInput = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[s.container, isFocused && s.containerOnFocus]}>
      <AntDesign
        style={[s.searchIcon, isFocused && s.focusedIcon]}
        name="search1"
        size={16}
      />
      <TextInput
        style={s.input}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
      />
    </View>
  );
};
export default SearchInput;
