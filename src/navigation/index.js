import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import AppTabNavigator from "./AppTabNavigator";
import screens from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { useStore } from "../stores/createStore";
import { observer } from "mobx-react";
import CreatePostNavigator from "./CreatePostNavigator";
import theme from "../styles/theme";
import FiltersNavigator from "./FiltersNavigator";
import ChatScreen from "../screens/Chat/ChatScreen";
import { Text } from "react-native";
import ChatLeftHeader from "./components/ChatLeftHeader/ChatLeftHeader";

const RootStack = createStackNavigator();

function RootNavigator() {
  const store = useStore();
  return (
    <NavigationContainer theme={theme}>
      <RootStack.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          presentation: "modal",
        })}
      >
        {/* {store.viewer.userModel ? ( */}
        <RootStack.Group>
          <RootStack.Screen
            name={screens.MainApp}
            component={AppTabNavigator}
          />
          <RootStack.Screen
            name={screens.CreatePostModal}
            component={CreatePostNavigator}
          />
          <RootStack.Screen
            name={screens.FiltersModal}
            component={FiltersNavigator}
          />
          <RootStack.Screen
            options={({ navigation, route }) => ({
              headerShown: true,
              headerTitleAlign: "center",
              headerTitle: (props) => <Text style={{ fontSize: 16 }}></Text>,
              headerLeft: () => <ChatLeftHeader chat={route.params.chat} />,
              // {
              //   return (
              //     <Touchable onPress={() => navigation.goBack()}>
              //       <AntDesign
              //         name="left"
              //         size={24}
              //         style={{ marginLeft: 20 }}
              //         color={colors.primary}
              //       />
              //     </Touchable>
              //   );
              // },
            })}
            name={screens.Chat}
            component={ChatScreen}
          />
        </RootStack.Group>
        {/* // ) : ( */}
        <RootStack.Group>
          <RootStack.Screen name={screens.Auth} component={AuthNavigator} />
        </RootStack.Group>
        {/* // )} */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default observer(RootNavigator);
