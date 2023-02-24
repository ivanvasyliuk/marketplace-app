import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import s from "./styles";

const Inputw = (props) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <>
      <TextInput
        style={[styles.textInput, hasError && styles.errorInput]}
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
      />
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </>
  );
};

const Input = ({ label, name, handleChange, errors, touched, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasError = errors[name] && touched[name];
  return (
    <View style={s.container}>
      <View
        style={[
          s.inputContainer,
          isFocused && s.focusedInput,
          hasError && s.errorInput,
        ]}
      >
        <Text style={[s.label, hasError && s.errorLabel]}>{label}</Text>
        <TextInput
          {...props}
          style={s.input}
          onChangeText={handleChange(name)}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
        />
      </View>
      {errors[name] && (
        <Text style={{ fontSize: 10, color: "red" }}>{errors[name]}</Text>
      )}
    </View>
  );
};

export default Input;