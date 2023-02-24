import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./AuthNavigator";
import AppTabNavigator from "./AppTabNavigator";
import screens from "./screens";
import { createStackNavigator } from "@react-navigation/stack";

const RootStack = createStackNavigator();

function RootNavigator() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
        })}
      >
        {isLogin ? (
          <RootStack.Group>
            <RootStack.Screen
              name={screens.MainApp}
              component={AppTabNavigator}
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

export default RootNavigator;
