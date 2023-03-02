import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InboxScreen from "../screens/Inbox/InboxScreen";
import screens from "./screens";

const Stack = createNativeStackNavigator();

function InboxNavigator() {
  return (
    <>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerTitleAlign: "center",
        })}
      >
        <Stack.Screen name={screens.Inbox} component={InboxScreen} />
      </Stack.Navigator>
    </>
  );
}

export default InboxNavigator;
