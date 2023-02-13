import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import colors from "./src/styles/colors";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button
          color={colors.primary}
          onPress={() => setCount(count - 1)}
          title="decrement"
        />
        <Button
          color={colors.primary}
          onPress={() => setCount(count + 1)}
          title="increment"
        />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 5,
  },
  counter: {
    marginBottom: 10,
  },
});
