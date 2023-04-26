import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import GoToLoginButton from "../../components/GoToLoginButton/GoToLoginButton";
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
      {false && (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              lineHeight: 24,
              letterSpacing: 0,
              textAlign: "center",
              color: "gray",
              marginBottom: 8,
            }}
          >
            Login to check your Inbox
          </Text>
          <GoToLoginButton />
        </View>
      )}
    </View>
  );
};

export default observer(ProfileScreen);
