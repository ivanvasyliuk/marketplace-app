import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BrowseScreen from "../screens/Browse/BrowseScreen";
import SavedScreen from "../screens/Saved/SavedScreen";
import screens from "./screens";

const Stack = createNativeStackNavigator();

function SavedNavigator() {
  return (
    <>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerTitleAlign: "center",
        })}
      >
        <Stack.Screen name={screens.Saved} component={SavedScreen} />
      </Stack.Navigator>
    </>
  );
}

export default SavedNavigator;
