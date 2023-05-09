import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useRef, useState } from "react";
import {
  Button,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import Touchable from "../Touchable/Touchable";
import s from "./styles";

const debounce = require("lodash.debounce");

const SearchInput = ({ sizes, style, ...props }) => {
  const [text, setText] = useState("");
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef();

  const changeTextDebouncer = useCallback(
    debounce((search) => {
      navigation.setParams({ search });
    }, 500),
    []
  );

  const onChangeHandler = (search) => {
    setText(search);
    // if (search) {
    changeTextDebouncer(search);
    console.log("inputRef", inputRef.current.value);

    // }
  };

  function onPress() {
    onChangeHandler("");
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
          onChangeText={onChangeHandler}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          value={text}
          {...props}
        />
        {text && (
          <Touchable isOpacity onPress={onPress}>
            <View
              style={{
                color: "green",
                paddingHorizontal: 10,
                paddingVertical: 8,
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
export default SearchInput;
