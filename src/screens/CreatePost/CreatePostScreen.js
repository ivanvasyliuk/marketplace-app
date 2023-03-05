import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { Button, StyleSheet, Switch, Text, View } from "react-native";
import s from "./styles";
import Photos from "./components/Photos";
import * as yup from "yup";
import MainInputField from "../../components/Form/MainInputField";
import Title from "../../components/Form/Title/Title";
import colors from "../../styles/colors";
import PriceInput from "../../components/Form/PriceInput/PriceInput";
import { useStore } from "../../stores/createStore";
import { observer } from "mobx-react";
// import * as Permissions from "expo-permissions";

const initialValues = { title: "", description: "", images: [], price: "" };

const validationSchema = yup.object({
  title: yup.string().required("Title is required"),
  description: yup
    .string()
    .min(20, "Description must contain 20-100 characters.")
    .max(100, "Description must contain 20-100 characters."),
  price: yup.number().required().integer(),
  images: yup.array(),
});

const CreatePostScreen = ({ navigation }) => {
  const store = useStore();
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  function onSubmit(values) {
    console.log("post");
    store.ownStore.createProduct.run(values);
  }
  useEffect(() => {
    navigation.setParams({ onSubmit: onSubmit });
  }, []);

  return (
    <View style={s.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <Title title="Key information" />
            <View style={s.keyInpormationContaine}>
              <MainInputField placeholder="Title" name="title" />
              <MainInputField
                placeholder="Description"
                style={s.descriptionInput}
                multiline={true}
                name="description"
              />
            </View>
            <Title title="Photos" />
            <Photos />
            <Title title="Price" />
            <PriceInput />
            <Button onPress={() => handleSubmit} title="submit" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default observer(CreatePostScreen);
