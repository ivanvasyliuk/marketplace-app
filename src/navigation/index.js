import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./AuthNavigator";
import AppTabNavigator from "./AppTabNavigator";
import screens from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { useStore } from "../stores/createStore";
import CreatePostScreen from "../screens/CreatePost/CreatePostScreen";
import { observer } from "mobx-react";

const RootStack = createStackNavigator();

function RootNavigator() {
  const store = useStore();
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
        })}
      >
        {store.viewer.userModel ? (
          <RootStack.Group>
            <RootStack.Screen
              name={screens.MainApp}
              component={AppTabNavigator}
            />
            <RootStack.Screen
              name={screens.CreatePostModal}
              component={CreatePostScreen}
              screenOptions={{ presentation: "modal" }}
            />
          </RootStack.Group>
        ) : (
          <RootStack.Group>
            <RootStack.Screen name={screens.Auth} component={AuthNavigator} />
          </RootStack.Group>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default observer(RootNavigator);
