import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import screens from "./screens";

const Stack = createNativeStackNavigator();

function SettingsNavigator() {
  return (
    <>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerTitleAlign: "center",
        })}
      >
        <Stack.Screen name={screens.Settings} component={SettingsScreen} />
      </Stack.Navigator>
    </>
  );
}

export default SettingsNavigator;
