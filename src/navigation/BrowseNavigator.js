import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BrowseScreen from "../screens/Browse/BrowseScreen";
import screens from "./screens";

const Stack = createNativeStackNavigator();

function BrowseNavigator() {
  return (
    <>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerTitleAlign: "center",
        })}
      >
        <Stack.Screen name={screens.Browse} component={BrowseScreen} />
      </Stack.Navigator>
    </>
  );
}

export default BrowseNavigator;
