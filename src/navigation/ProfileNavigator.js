import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileHeader from "./components/ProfileHeader/ProfileHeader";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import screens from "./screens";
import SettingsNavigator from "./SettingsNavigator";
import TestProfileHeader from "../screens/Profile/TestProfileHeader";
import PostNavigation from "./PostNavigation";
import { useStore } from "../stores/createStore";
import ProfileScreenAnimated from "../screens/Profile/ProfileScreenAnimated";
import { observer } from "mobx-react";

const Stack = createNativeStackNavigator();

function ProfileNavigator() {
  const store = useStore();

  return (
    <>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          header: () => <ProfileHeader />,
        })}
      >
        {store.viewer.userModel && (
          <Stack.Screen
            name={screens.Profile}
            component={ProfileScreenAnimated}
          />
        )}
        <Stack.Screen
          options={{ headerShown: false }}
          name={screens.Settings}
          component={SettingsNavigator}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={screens.PostDetailsNavigator}
          component={PostNavigation}
        />
      </Stack.Navigator>
    </>
  );
}

export default observer(ProfileNavigator);
