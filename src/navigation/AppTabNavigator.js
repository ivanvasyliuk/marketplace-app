import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ProfileNavigator from "./ProfileNavigator";
import BrowseNavigator from "./BrowseNavigator";
import SavedNavigator from "./SavedNavigator";
import InboxNavigator from "./InboxNavigator";
import screens from "./screens";
import colors from "../styles/colors";
import Touchable from "../components/Touchable/Touchable";
import { Image, StyleSheet, View, Text } from "react-native";
import CreatePostNavigator from "./CreatePostNavigator";
import AddPostButton from "../components/svg/AddPostButton";
import { observer } from "mobx-react";
import TabBar from "./components/MyTabBar";

const Tab = createBottomTabNavigator();

const IS_IPHONE_X = false;

const CustomTabBarButton = ({ children, onPress }) => (
  <View
    style={{
      top: -45,
      width: 85,
      height: 85,
      borderRadius: 80,
      // backgroundColor: colors.backgroundColor, //transparent
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <View
      style={{
        width: 56,
        height: 56,
        borderRadius: 80,
        overflow: "hidden",
        // backgroundColor: colors.backgroundColor,
      }}
    >
      <Touchable
        style={[
          //   style.createPostButton,
          {
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          },
        ]}
        onPress={onPress}
      >
        <AddPostButton />
      </Touchable>
    </View>
  </View>
);

function AppTabNavigator({ barColor = "#FFFFFF" }) {
  return (
    <>
      <Tab.Navigator
        tabBar={(props) => {
          return <TabBar props={props} />;
        }}
        // tabBar={(props) => (
        //   <View style={styles.navigatorContainer}>
        //     <BottomTabBar {...props} />
        //     {IS_IPHONE_X && (
        //       <View
        //         style={[
        //           styles.xFillLine,
        //           {
        //             backgroundColor: barColor,
        //           },
        //         ]}
        //       />
        //     )}
        //   </View>
        // )}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
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
        <Tab.Screen
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
        <Tab.Screen
          name={screens.CreatePostTab}
          component={CreatePostNavigator}
          listeners={({ navigation }) => ({
            tabPress: (event) => {
              event.preventDefault();
              navigation.navigate(screens.CreatePostModal);
            },
          })}
          options={{
            headerTitle: (props) => <Text>New Post</Text>,
            tabBarButton: (props) => (
              <TabBarAdvancedButton bgColor={barColor} {...props} />
            ),
            tabBarLabel: () => null,
            tabBarItemStyle: {
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        />

        <Tab.Screen
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
        <Tab.Screen
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
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  createPostButton: {
    top: -25,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  navigatorContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    // SHADOW
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

export default observer(AppTabNavigator);
