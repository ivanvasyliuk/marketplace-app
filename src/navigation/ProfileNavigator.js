import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigator from ".";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import screens from "./screens";

const Stack = createNativeStackNavigator();

function ProfileNavigator() {
  return (
    <>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerTitleAlign: "center",
        })}
      >
        <Stack.Screen name={screens.Profile} component={ProfileScreen} />
      </Stack.Navigator>
    </>
  );
}

export default ProfileNavigator;
