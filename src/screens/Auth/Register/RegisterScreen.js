import { Field, Formik } from "formik";
import { observer } from "mobx-react";
import React from "react";
import { View, Text, TextInput } from "react-native";
import * as yup from "yup";
import AuthFooter from "../../../components/Form/AuthFooter/AuthFooter";
import Input from "../../../components/Form/Input/Input";
import s from "./styles";

const validationSchema = yup.object({
  //Add required for email
  email: yup.string().email(),
  password: yup
    .string()
    .min(6, "Password must contain 6-20 characters.")
    .max(20, "Password must contain 6-20 characters.")
    .required("Password is required"),
  repeatPassword: yup
    .string()
    .required("Passwords don’t match.")
    .oneOf([yup.ref("password"), null], "Passwords don’t match."),
});

const RegisterScreen = ({ navigation }) => {
  function onSubmit(values) {
    console.log("register submit", values);
  }

  return (
    <View style={s.container}>
      <Formik
        initialValues={{ email: "", password: "", repeatPassword: "" }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          touched,
          values,
        }) => (
          <>
            <View style={s.formContainer}>
              <Input
                value={values.email}
                handleChange={handleChange}
                name="email"
                label="email"
                errors={errors}
                touched={touched}
              />
              <Input
                value={values.password}
                handleChange={handleChange}
                name="password"
                label="password"
                secureTextEntry
                errors={errors}
                touched={touched}
              />
              <Input
                value={values.repeatPassword}
                handleChange={handleChange}
                name="repeatPassword"
                label="repeat password"
                secureTextEntry
                errors={errors}
                touched={touched}
              />
            </View>
            <AuthFooter
              onSubmit={handleSubmit}
              buttonLabel="Register"
              navigation={navigation}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

export default observer(RegisterScreen);
