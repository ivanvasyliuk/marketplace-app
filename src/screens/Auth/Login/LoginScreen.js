import React from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { Formik } from "formik";
import s from "./styles";
import Input from "../../../components/Form/Input/Input";
import AuthFooter from "../../../components/Form/AuthFooter/AuthFooter";

function onSubmit(values) {
  console.log(values);
}

const LoginScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={s.container}>
      <Formik initialValues={{ email: "", password: "" }} onSubmit={onSubmit}>
        {({ handleChange, handleBlur, handleSubmit, errors, values }) => (
          <>
            <View style={s.formContainer}>
              <Input
                value={values.email}
                handleChange={handleChange}
                label="email"
                name="email"
                errors={errors}
              />
              <Input
                value={values.password}
                handleChange={handleChange}
                label="password"
                name="password"
                secureTextEntry
                errors={errors}
              />
            </View>
            <AuthFooter
              onSubmit={handleSubmit}
              navigation={navigation}
              buttonLabel="Login"
            />
          </>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
