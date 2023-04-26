import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, View } from "react-native";
import screens from "./screens";
import colors from "../styles/colors";
import FiltersScreen from "../screens/Filters/FiltersScreen";
import Touchable from "../components/Touchable/Touchable";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

function FiltersNavigator() {
  return (
    <Stack.Navigator
      screenOptions={({ route, navigation }) => ({
        // headerShown: false,
        headerTitleAlign: "center",
        headerLeft: () => {
          return (
            <Touchable onPress={() => navigation.goBack()}>
              <Ionicons name="close" size={30} color={colors.primary} />
            </Touchable>
          );
        },
        headerTitle: (props) => (
          <Text style={{ fontSize: 16, lineHeight: 24, fontWeight: "500" }}>
            Filters
          </Text>
        ),
      })}
    >
      <Stack.Screen
        // options={({ navigation, route }) => ({
        //   headerTitleAlign: "center",
        //   headerShown: true,
        //   headerTitle: (props) => (
        //     <Text style={{ fontSize: 16 }}>New Post</Text>
        //   ),
        //   headerLeft: () => {
        //     return (
        //       <Touchable onPress={() => navigation.goBack()}>
        //         <Ionicons name="close" size={30} color={colors.primary} />
        //       </Touchable>
        //     );
        //   },
        //   headerRight: (props) => (
        //     <Touchable onPress={() => route.params.onSubmit()}>
        //       <Text style={style.postLabel}>Post</Text>
        //     </Touchable>
        //   ),
        // })}
        name={screens.FiltersScreen}
        component={FiltersScreen}
      />
    </Stack.Navigator>
  );
}

const style = StyleSheet.create({
  headerRightButton: {},
  postLabel: {
    fontSize: 18,
    color: colors.primary,
  },
});

export default FiltersNavigator;
