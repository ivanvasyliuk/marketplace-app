import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { observer } from "mobx-react";
import { Formik } from "formik";
import * as yup from "yup";
import Photos from "./components/Photos";
import MainInputField from "../../components/Form/MainInputField";
import Title from "../../components/Form/Title/Title";
import PriceInput from "../../components/Form/PriceInput/PriceInput";
import { useStore } from "../../stores/createStore";
import s from "./styles";

const initialValues = { title: "", description: "", images: [], price: "" };

const validationSchema = yup.object({
  title: yup.string().required("Title is required"),
  description: yup
    .string()
    .min(20, "Description must contain 20-100 characters.")
    .max(100, "Description must contain 20-100 characters."),
  price: yup.number().integer(),
  images: yup.array(),
});

const CreatePostScreen = ({ navigation }) => {
  const store = useStore();
  const formRef = useRef();

  function onSubmit(values) {
    store.ownStore.createProduct.run(values);
  }
  useEffect(() => {
    navigation.setParams({ onSubmit: () => formRef.current.handleSubmit() });
  }, []);

  return (
    <View style={s.container}>
      <Formik
        innerRef={formRef}
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
          </View>
        )}
      </Formik>
    </View>
  );
};

export default observer(CreatePostScreen);
