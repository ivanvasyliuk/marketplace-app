import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileHeader from "./components/ProfileHeader/ProfileHeader";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import screens from "./screens";
import SettingsNavigator from "./SettingsNavigator";
import TestProfileHeader from "../screens/Profile/TestProfileHeader";

const Stack = createNativeStackNavigator();

function ProfileNavigator() {
  return (
    <>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          header: () => <ProfileHeader />,
        })}
      >
        <Stack.Screen name={screens.Profile} component={TestProfileHeader} />
        <Stack.Screen
          options={{ headerShown: false }}
          name={screens.Settings}
          component={SettingsNavigator}
        />
      </Stack.Navigator>
    </>
  );
}

export default ProfileNavigator;
