import { CommonActions, useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import React from "react";
import { Button, Text, View } from "react-native";
import { NavigationActions, StackActions } from "react-navigation";
import GoToLoginButton from "../../components/GoToLoginButton/GoToLoginButton";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import BigLogo from "../../components/svg/BigLogo";
import LogOutIcon from "../../components/svg/LogOutIcon";
import Touchable from "../../components/Touchable/Touchable";
import ProfileHeader from "../../navigation/components/ProfileHeader/ProfileHeader";
import screens from "../../navigation/screens";
import { useStore } from "../../stores/createStore";
import s from "./styles";

const SettingsScreen = () => {
  const navigation = useNavigation();
  const store = useStore();

  function resetProfileNavigator() {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: "ProfileTab",
        },
      ],
    });
  }

  return (
    <View style={s.container}>
      <View style={s.logo}>
        <BigLogo />
      </View>
      {store.viewer.userModel ? (
        <LogoutButton />
      ) : (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={s.grayText}>Login to view your profile</Text>
          <GoToLoginButton resetAction={resetProfileNavigator} />
        </View>
      )}
    </View>
  );
};

export default observer(SettingsScreen);
