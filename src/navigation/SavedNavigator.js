import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header/Header";
import SearchInput from "../components/SearchInput/SearchInput";
import BrowseScreen from "../screens/Browse/BrowseScreen";
import SavedScreen from "../screens/Saved/SavedScreen";
import PostNavigation from "./PostNavigation";
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
        <Stack.Screen
          name={screens.Saved}
          options={({ route, navigation }) => ({
            header: () => (
              <Header>
                <SearchInput placeholder="Search" />
              </Header>
            ),
          })}
          component={SavedScreen}
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

export default SavedNavigator;
