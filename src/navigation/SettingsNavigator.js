import { AntDesign } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Touchable from "../components/Touchable/Touchable";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import colors from "../styles/colors";
import screens from "./screens";

const Stack = createNativeStackNavigator();

function SettingsNavigator() {
  return (
    <>
      <Stack.Navigator
        screenOptions={({ route, navigation }) => ({
          headerTitleAlign: "center",
          headerLeft: () => (
            <Touchable isOpacity onPress={() => navigation.goBack()}>
              <AntDesign
                name="left"
                size={24}
                style={{ marginHorizontal: 0 }}
                color={colors.gray}
              />
            </Touchable>
          ),
        })}
      >
        <Stack.Screen name={screens.Settings} component={SettingsScreen} />
      </Stack.Navigator>
    </>
  );
}

export default SettingsNavigator;
