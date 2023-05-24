import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";
import Touchable from "../components/Touchable/Touchable";
import LoginScreen from "../screens/Auth/Login/LoginScreen";
import RegisterScreen from "../screens/Auth/Register/RegisterScreen";
import colors from "../styles/colors";
import screens from "./screens";

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerTitleAlign: "center",
        headerLeft: () => (
          <Touchable onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color={colors.gray} />
          </Touchable>
        ),
      })}
    >
      <Stack.Screen name={screens.Login} component={LoginScreen} />
      <Stack.Screen name={screens.Register} component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
