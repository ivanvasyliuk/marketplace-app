import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import ProductList from "../../components/Products/ProductList/ProductList";
import { useStore } from "../../stores/createStore";
import s from "./styles";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const store = useStore();

  useEffect(() => {
    store.ownStore.fetch.run();
  }, []);

  const list = store.ownStore.list;

  return (
    <View style={s.container}>
      <ProductList list={list} />
    </View>
  );
};

export default observer(ProfileScreen);
