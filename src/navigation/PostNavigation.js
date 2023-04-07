import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostScreen from "../screens/Post/PostScreen";
import screens from "./screens";

const Stack = createNativeStackNavigator();

function PostNavigation() {
  return (
    <>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerTitleAlign: "center",
        })}
      >
        <Stack.Screen name={screens.PostDetails} component={PostScreen} />
      </Stack.Navigator>
    </>
  );
}

export default PostNavigation;
