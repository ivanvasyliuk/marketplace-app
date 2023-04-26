import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import screens from "../../../navigation/screens";
import Touchable from "../../Touchable/Touchable";
import UserImage from "../../User/UserImage/UserImage";
import s from "./styles";

const InboxChatItem = ({ chat }) => {
  const navigation = useNavigation();

  const now = new Date();

  function onPress() {
    navigation.navigate(screens.Chat, {
      chat: chat,
    });
  }
  console.log("chat", chat);
  console.log("owner", chat.owner);

  return (
    <Touchable style={s.container} onPress={onPress}>
      <View style={s.imageContainer}>
        <UserImage size={56} image={chat.owner.avatar} />
      </View>
      <View style={s.titlesContainer}>
        <Text style={s.productTitle}>{chat.product.title}</Text>
        <Text style={s.ownerTitle}>{chat.owner.fullName}</Text>
        <Text style={s.lastMessageLabel}>{`${chat.message.text.slice(0, 35)}${
          chat.message.text.length > 35 ? " ..." : ""
        }`}</Text>
      </View>
      <View style={{}}>
        <Text style={s.time}>{now.getHours() + ":" + now.getMinutes()}</Text>
        {!chat.message.read && (
          <View
            style={{
              borderRadius: 10,
              width: 20,
              height: 20,
              backgroundColor: "#349A89",
              bottom: 0,
              right: 0,
              position: "absolute",
            }}
          ></View>
        )}
      </View>
    </Touchable>
  );
};
export default InboxChatItem;
