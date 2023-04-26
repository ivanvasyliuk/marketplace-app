import React from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { Formik } from "formik";
import { observer } from "mobx-react";
import * as yup from "yup";
import Input from "../../../components/Form/Input/Input";
import AuthFooter from "../../../components/Form/AuthFooter/AuthFooter";
import { useStore } from "../../../stores/createStore";
import s from "./styles";
import { useNavigation } from "@react-navigation/native";

const validationSchema = yup.object({
  //Add .email() for email
  email: yup.string().required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must contain 6-20 characters.")
    .max(20, "Password must contain 6-20 characters.")
    .required("Password is required"),
});

const LoginScreen = ({ navigation }) => {
  const store = useStore();

  async function onSubmit({ email, password }) {
    await store.auth.login.run({ email, password });
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView style={s.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
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
                label="email"
                name="email"
                errors={errors}
                touched={touched}
              />
              <Input
                value={values.password}
                handleChange={handleChange}
                label="password"
                name="password"
                secureTextEntry
                errors={errors}
                touched={touched}
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

export default observer(LoginScreen);
