import React, { useRef } from "react";
import { Formik } from "formik";
import ActionSheet from "react-native-actionsheet";
import { Button, Text, TextInput, View } from "react-native";
import s from "./styles";
import Touchable from "../../components/Touchable/Touchable";

const CreatePostScreen = ({ navigation }) => {
  const actionRef = useRef();

  function onChoose(index) {
    console.log(index);
  }

  function onOpenActionSheet() {
    actionRef.current.show();
  }

  return (
    <View style={s.container}>
      <Text>Key information</Text>
      <Formik
        initialValues={{ title: "", description: "", price: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            <Button color="green" onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
      <Touchable onPress={onOpenActionSheet}>
        <Text>upload photo</Text>
      </Touchable>
      <ActionSheet
        ref={actionRef}
        title="Which one do you like ?"
        options={["Camera", "Gallery", "Cancel"]}
        cancelButtonIndex={2}
        onPress={onChoose}
      />
    </View>
  );
};

CreatePostScreen.navigationOption = {
  title: "New Post",
};
export default CreatePostScreen;
