import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import Header from "../components/Header/Header";
import SearchInput from "../components/SearchInput/SearchInput";
import BrowseScreen from "../screens/Browse/BrowseScreen";
import screens from "./screens";

const Stack = createNativeStackNavigator();

function BrowseNavigator() {
  return (
    <>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          header: () => (
            <Header>
              <SearchInput />
            </Header>
          ),
          // header: () => (
          //   <View style={{ height: 120, backgroundColor: "red" }} />
          // ),
          headerStyle: {
            height: 200,
            backgroundColor: "green",
          },
        })}
      >
        <Stack.Screen name={screens.Browse} component={BrowseScreen} />
      </Stack.Navigator>
    </>
  );
}

export default BrowseNavigator;
