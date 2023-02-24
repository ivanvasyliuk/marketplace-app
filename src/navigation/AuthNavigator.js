import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Auth/Login/LoginScreen";
import RegisterScreen from "../screens/Auth/Register/RegisterScreen";
import screens from "./screens";

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: "center",
      })}
    >
      <Stack.Screen name={screens.Login} component={LoginScreen} />
      <Stack.Screen name={screens.Register} component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
