import React, { useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { Text, TextInput, View } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import s from "./styles";
import MessageItem from "../../components/Chat/MessageItem/MessageItem";
import { observer } from "mobx-react";
import UserImage from "../../components/User/UserImage/UserImage";
import Touchable from "../../components/Touchable/Touchable";
import screens from "../../navigation/screens";

const ChatScreen = () => {
  const navigation = useNavigation();
  const [text, setText] = useState("");
  const route = useRoute();

  const chat = route.params.chat;

  useEffect(() => {
    if (chat) {
      chat.messages.fetch.run();
    }
  }, [chat]);

  // const handleContentSizeChange = (event) => {
  //   const { height } = event.nativeEvent.contentSize;

  //   setHeight(height);
  // };
  function onPress() {
    navigation.navigate(screens.PostDetailsNavigator, {
      screen: screens.PostDetails,
      params: { product: chat.product },
    });
  }

  return (
    <View style={s.container}>
      <Touchable isOpacity onPress={onPress}>
        <View style={s.ownerBarItem}>
          <UserImage size={32} image={chat.product.photos[0]} />
          <View style={s.titlesContainer}>
            <Text style={s.productTitle}>{chat.product.title}</Text>
            <Text style={s.lastMessageLabel}>{`${chat.message.text.slice(
              0,
              35
            )}${chat.message.text.length > 35 ? " ..." : ""}`}</Text>
          </View>
          <AntDesign
            name="right"
            size={24}
            style={{
              position: "absolute",
              right: 20,
            }}
            color="gray"
          />
        </View>
      </Touchable>
      <View style={{ flex: 1 }}>
        <FlashList
          data={chat.messages.asList}
          renderItem={({ item }) => <MessageItem message={item} />}
          keyExtractor={(item) => item.id}
          // refreshing={chats.fetch.isLoading}
          // ListFooterComponent={() => <ListFooter />}
          // contentContainerStyle={s.listContainer}
          // estimatedItemSize={200}
          // onEndReachedThreshold={0.3}
          role="dialog"
          inverted={-1}
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
            multiline
            // numberOfLines={5}
          />
        </View>
        <Entypo name="chevron-with-circle-right" size={40} style={s.icon} />
      </View>
    </View>
  );
};
export default observer(ChatScreen);
