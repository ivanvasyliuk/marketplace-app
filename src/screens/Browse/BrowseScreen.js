import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import screens from "../../navigation/screens";
import { useStore } from "../../stores/createStore";
import colors from "../../styles/colors";
import styles from "./styles";

const BrowseScreen = ({ navigation }) => {
  const store = useStore();
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");
  return (
    <View style={styles.container}>
      <Text>BrowseScreen</Text>
      <View>
        <Text>{title}</Text>
        <Text style={{ textAlign: "center" }}>{count}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            padding: 5,
          }}
        >
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
          <Button
            color={colors.primary}
            onPress={() => store.auth.logout.run()}
            title="logout"
          />
          <Button
            color={colors.primary}
            onPress={() => alert("Clicked")}
            title="Click"
          />
        </View>
        <TextInput
          style={{ width: 200, height: 50, borderWidth: 1, marginTop: 5 }}
          onChangeText={(title) => setTitle(title)}
          value={title}
        />
      </View>
    </View>
  );
};

export default BrowseScreen;
