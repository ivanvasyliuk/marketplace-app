import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header/Header";
import SearchInput from "../components/SearchInput/SearchInput";
import FiltersButton from "../components/svg/FiltersButton";
import Touchable from "../components/Touchable/Touchable";
import BrowseScreen from "../screens/Browse/BrowseScreen";
import PostScreen from "../screens/Post/PostScreen";
import FiltersNavigator from "./FiltersNavigator";
import PostNavigation from "./PostNavigation";
import screens from "./screens";

const Stack = createNativeStackNavigator();

const CancelButton = () => {
  const navigation = useNavigation();

  function onPress() {
    navigation.setParams({ search: "" });
  }

  return (
    <Touchable onPress={onPress} isOpacity style={styles.touchable}>
      <Text style={styles.cancelButtonLabel}>Cancel</Text>
    </Touchable>
  );
};

function BrowseNavigator() {
  return (
    <>
      <Stack.Navigator
        screenOptions={({ route, navigation }) => ({
          header: () => (
            <Header>
              <SearchInput placeholder="Search" />
              {console.log("route", route.params)}
              {!!route.params?.search ? (
                <CancelButtondsad />
              ) : (
                <Touchable
                  isOpacity
                  style={{ padding: 20 }}
                  onPress={() =>
                    navigation.navigate(screens.FiltersModal, {
                      screen: screens.FiltersScreen,
                      params: {
                        filtersSubmit: route.params.filtersSubmit,
                        filtersValues: route.params.filtersValues,
                      },
                    })
                  }
                >
                  <FiltersButton />
                </Touchable>
              )}
            </Header>
          ),
        })}
      >
        <Stack.Screen name={screens.Browse} component={BrowseScreen} />
        <Stack.Screen name={screens.Filters} component={FiltersNavigator} />
        <Stack.Screen
          options={{ headerShown: false }}
          name={screens.PostDetailsNavigator}
          component={PostNavigation}
        />
      </Stack.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  touchable: {
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  cancelButtonLabel: {
    height: 18,
    fontSize: 16,
    color: "green",
  },
});

export default BrowseNavigator;
