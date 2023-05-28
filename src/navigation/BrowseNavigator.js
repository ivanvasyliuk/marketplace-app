import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header/Header";
import SearchInput from "../components/SearchInput/SearchInput";
import FiltersButton from "../components/svg/FiltersButton";
import Touchable from "../components/Touchable/Touchable";
import BrowseScreen from "../screens/Browse/BrowseScreen";
import CancelButton from "./components/CancelButton";
import FiltersNavigator from "./FiltersNavigator";
import PostNavigation from "./PostNavigation";
import screens from "./screens";

const Stack = createNativeStackNavigator();

function BrowseNavigator() {
  return (
    <>
      <Stack.Navigator
        screenOptions={({ route, navigation }) => ({
          header: () => (
            <Header>
              <SearchInput placeholder="Search" />
              {!!route.params?.search ? (
                <CancelButton />
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

export default BrowseNavigator;
