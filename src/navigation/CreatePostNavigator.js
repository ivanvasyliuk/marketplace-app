import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text } from "react-native";
import CreatePostScreen from "../screens/CreatePost/CreatePostScreen";
import { Ionicons } from "@expo/vector-icons";
import screens from "./screens";
import colors from "../styles/colors";

const Stack = createNativeStackNavigator();

function CreatePostNavigator() {
  return (
    <>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerTitleAlign: "center",
        })}
      >
        <Stack.Screen
          options={{
            headerTitle: (props) => <Text>New Post</Text>,
            headerLeft: () => (
              <Ionicons name="close" size={30} color={colors.primary} />
            ),
            headerRight: () => (
              <Text style={style.postLabel}>Post</Text>
              //   <Button title="Post" style={style.headerRightButton} />
            ),
          }}
          name={screens.CreatePost}
          component={CreatePostScreen}
        />
      </Stack.Navigator>
    </>
  );
}

const style = StyleSheet.create({
  headerRightButton: {},
  postLabel: {
    fontSize: 18,
    color: colors.primary,
  },
});

export default CreatePostNavigator;
