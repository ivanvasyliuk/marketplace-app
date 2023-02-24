import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import ProfileNavigator from "./ProfileNavigator";
import BrowseNavigator from "./BrowseNavigator";
import screens from "./screens";

const Tab = createBottomTabNavigator();

export default function AppTabNavigator() {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { backgroundColor: "black" },
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              color = "green";
            }
            if (route.name == "ProfileTab") {
              return <AntDesign name="user" size={size} color={color} />;
            }
            if (route.name == "BrowseTab") {
              return <AntDesign name="search1" size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "grey",
          //   headerShown: false,
        })}
      >
        <Tab.Screen name={screens.BrowseTab} component={BrowseNavigator} />
        <Tab.Screen name={screens.ProfileTab} component={ProfileNavigator} />
      </Tab.Navigator>
    </>
  );
}
