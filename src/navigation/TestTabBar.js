import React from "react";
import { StyleSheet, View } from "react-native";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import colors from "../styles/colors";
import screens from "./screens";
import BrowseNavigator from "./BrowseNavigator";
import SavedNavigator from "./SavedNavigator";
import CreatePostNavigator from "./CreatePostNavigator";
import InboxNavigator from "./InboxNavigator";
import ProfileNavigator from "./ProfileNavigator";
import TabBarAdvancedButton from "./components/TabBarAdvancedButton";
// import { IS_IPHONE_X } from "../utils";

const BottomBar = createBottomTabNavigator();

export default function TabBar({ barColor }) {
  return (
    <>
      <BottomBar.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
        })}
        tabBar={(props) => (
          <View style={styles.navigatorContainer}>
            <BottomTabBar {...props} />
            {true && (
              <View
                style={[
                  styles.xFillLine,
                  {
                    backgroundColor: barColor,
                  },
                ]}
              />
            )}
          </View>
        )}
        tabBarOptions={{
          showIcon: true,
          style: styles.navigator,
          tabStyle: {
            backgroundColor: "white",
          },
        }}
      >
        <BottomBar.Screen
          name={screens.BrowseTab}
          component={BrowseNavigator}
          options={{
            tabBarLabel: "Browse",
            tabBarIcon: ({ focused, color, size }) => (
              <AntDesign
                name="search1"
                size={size}
                color={focused ? colors.primary : colors.gray}
              />
            ),
          }}
        />
        <BottomBar.Screen
          name={screens.SavedTab}
          component={SavedNavigator}
          options={{
            tabBarLabel: "Saved",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name="md-bookmark-outline"
                color={focused ? colors.primary : colors.gray}
                size={size}
              />
            ),
          }}
        />
        <BottomBar.Screen
          name={screens.CreatePostTab}
          component={CreatePostNavigator}
          listeners={({ navigation }) => ({
            tabPress: (event) => {
              event.preventDefault();
              navigation.navigate(screens.CreatePostModal);
            },
          })}
          options={{
            tabBarButton: (props) => (
              <TabBarAdvancedButton bgColor="white" {...props} />
            ),
          }}
        />
        <BottomBar.Screen
          name={screens.InboxTab}
          component={InboxNavigator}
          options={{
            tabBarLabel: "Inbox",
            tabBarIcon: ({ focused, color, size }) => (
              <AntDesign
                name="inbox"
                size={size}
                color={focused ? colors.primary : colors.gray}
              />
            ),
          }}
        />

        <BottomBar.Screen
          name={screens.ProfileTab}
          component={ProfileNavigator}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ focused, color, size }) => (
              <AntDesign
                name="user"
                size={size}
                color={focused ? colors.primary : colors.gray}
              />
            ),
          }}
        />
      </BottomBar.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigatorContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: "transparent",
    elevation: 30,
  },
  xFillLine: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 34,
  },
});

// <Tab.Screen

//   options={{
//     headerTitle: (props) => <Text>New Post</Text>,
//     tabBarButton: (props) => <CustomTabBarButton {...props} />,
//     tabBarLabel: () => null,
//     tabBarItemStyle: {
//       alignItems: "center",
//       justifyContent: "center",
//     },
//   }}
// />
