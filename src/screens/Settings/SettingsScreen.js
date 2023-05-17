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

    navigation
      .getParent()
      .getParent()
      .getParent()
      .dispatch((state) => {
        // state.routes[0].state.routes[4].state.routes = [
        //   { name: screens.Profile },
        // ];
        const routes = state.routes.filter((r) => r.name !== screens.Auth);

        return CommonActions.reset({
          ...state,
          routes,
          index: routes.length - 1,
        });
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

// navigation.dispatch(
//   CommonActions.reset({
//     index: 0,
//     routes: [
//       {
//         name: "ProfileTab",
//       },
//     ],
//   })
// );

// const MainApp = state.routes.find((r) => r.name == screens.MainApp);

// const ProfileTab = MainApp.state.routes.find(
//   (r) => r.name == screens.ProfileTab
// );
// ProfileHeader.route =
// console.log("ProfileTab", ProfileTab);
// console.log("ProfileTab", ProfileTab.state.routes);
// ProfileTab.state.routes = [{ name: screens.Profile }];
// console.log("ProfileTab", ProfileTab);

// console.log("routes", routes[0].state.routes[4].state.routes);
// console.log("stateAfter", state.routes[0].state.routes[4].state.routes);
