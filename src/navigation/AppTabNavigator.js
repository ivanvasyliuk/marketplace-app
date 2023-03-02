import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import ProfileNavigator from "./ProfileNavigator";
import BrowseNavigator from "./BrowseNavigator";
import SavedNavigator from "./SavedNavigator";
import InboxNavigator from "./InboxNavigator";
import screens from "./screens";
import colors from "../styles/colors";
import CreatePostNavigator from "./CreatePostNavigator";
import Touchable from "../components/Touchable/Touchable";
import { Image, StyleSheet, View } from "react-native";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <View
    style={{
      top: -45,
      width: 85,
      height: 85,
      borderRadius: 80,
      backgroundColor: colors.backgroundColor,
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
        backgroundColor: colors.backgroundColor,
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
        <Image
          source={require("../../assets/icons/add-post.png")}
          resizeMode="contain"
          style={{ width: 56, height: 56 }}
        />
      </Touchable>
    </View>
  </View>
);

export default function AppTabNavigator() {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { backgroundColor: colors.white },
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: "grey",
          //   headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let name;
            if (focused) {
              color = colors.primary;
            }
            switch (route.name) {
              case "ProfileTab":
                name = "user";
                break;
              case "BrowseTab":
                name = "search1";
                break;
              case "InboxTab":
                name = "inbox";
                break;
              case "SavedTab":
                name = "save";
                break;
            }
            return <AntDesign name={name} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={screens.BrowseTab} component={BrowseNavigator} />
        <Tab.Screen name={screens.SavedTab} component={SavedNavigator} />
        <Tab.Screen
          options={{
            // tabBarIcon: ({ focused }) => (

            // ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
            tabBarLabel: () => null,
            tabBarItemStyle: {
              alignItems: "center",
              justifyContent: "center",
            },
          }}
          name={screens.CreatePostModal}
          component={CreatePostNavigator}
        />
        <Tab.Screen name={screens.InboxTab} component={InboxNavigator} />
        <Tab.Screen name={screens.ProfileTab} component={ProfileNavigator} />
      </Tab.Navigator>
    </>
  );
}

const style = StyleSheet.create({
  createPostButton: {
    top: -25,
    justifyContent: "center",
    alignItems: "center",
  },
});
