import React from "react";
import { Text, View } from "react-native";
import { useStore } from "../../stores/createStore";
import s from "./styles";
const SavedScreen = () => {
  const store = useStore();
  console.log("store", store.products);

  return (
    <View style={s.container}>
      <Text>SavedScreen</Text>
    </View>
  );
};

export default SavedScreen;
