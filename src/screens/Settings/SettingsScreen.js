import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import React from "react";
import { Button, Text, View } from "react-native";
import BigLogo from "../../components/svg/BigLogo";
import LogOutIcon from "../../components/svg/LogOutIcon";
import Touchable from "../../components/Touchable/Touchable";
import screens from "../../navigation/screens";
import { useStore } from "../../stores/createStore";
import s from "./styles";

const SettingsScreen = () => {
  const navigation = useNavigation();
  const store = useStore();
  return (
    <View style={s.container}>
      <View style={s.logo}>
        <BigLogo />
      </View>
      {store.viewer.userModel ? (
        <Touchable onPress={store.auth.logout.run} style={s.optionContainer}>
          <LogOutIcon />
          <Text style={s.logOutTitle}>LOG OUT</Text>
        </Touchable>
      ) : (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 16,
              lineHeight: 24,
              color: "gray",
            }}
          >
            Login to view your profile
          </Text>
          <Touchable
            style={s.loginBotton}
            onPress={() => navigation.navigate(screens.Auth)}
          >
            <Text style={s.loginButtonText}>Login</Text>
          </Touchable>
        </View>
      )}
      {/* <Button title="logout" onPress={() => store.auth.logout.run()} /> */}
    </View>
  );
};

export default observer(SettingsScreen);
