import React, { useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { Text, TextInput, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import s from "./styles";
import colors from "../../styles/colors";
import { useRoute } from "@react-navigation/native";

const ChatScreen = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState("");
  const [height, setHeight] = useState(0);
  const route = useRoute();

  const chat = route.params;
  useEffect(() => {
    if (chat) {
      chat.messages;
    }
  }, [chat]);
  // console.log("chat", chat);
  console.log("route", route.params);
  console.log("messages", chat.messages);

  // const chat = route.params;

  // const handleContentSizeChange = (event) => {
  //   const { height } = event.nativeEvent.contentSize;

  //   setHeight(height);
  // };

  return (
    <View style={s.container}>
      <View style={{ flex: 1 }}>
        <FlashList
          data={chat}
          renderItem={({ item }) => <ProductItem product={item} />}
          keyExtractor={(item) => item.id}
          // refreshing={chats.fetch.isLoading}
          // ListFooterComponent={() => <ListFooter />}
          // contentContainerStyle={s.listContainer}
          // estimatedItemSize={200}
          // onEndReachedThreshold={0.3}
        />
      </View>
      <View style={s.footer}>
        <View style={[s.inputContainer]}>
          <TextInput
            maxLength={400}
            placeholder="Message..."
            onChange={setText}
            // onContentSizeChange={handleContentSizeChange}
            style={[s.input]}
            value={text}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            multiline
            // numberOfLines={5}
          />
        </View>
        <Entypo name="chevron-with-circle-right" size={40} style={s.icon} />
      </View>
    </View>
  );
};
export default ChatScreen;
