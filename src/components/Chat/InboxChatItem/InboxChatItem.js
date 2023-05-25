import React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { format, isToday, isYesterday } from "date-fns";
import screens from "../../../navigation/screens";
import Touchable from "../../Touchable/Touchable";
import UserImage from "../../User/UserImage/UserImage";
import s from "./styles";
import { observer } from "mobx-react";

const InboxChatItem = ({ chat }) => {
  const navigation = useNavigation();

  let date = new Date(chat.updatedAt);

  const renderTime = isToday(date)
    ? format(date, "HH:mm")
    : isYesterday(date)
    ? `Yesterday, ${format(date, "HH:mm")}`
    : format(date, "MMM dd");

  const lastMessage = `${chat.message.text.slice(0, 30)}${
    chat.message.text.length > 30 ? " ..." : ""
  }`;

  function onPress() {
    navigation.navigate(screens.Chat, {
      chat: chat,
    });
  }

  return (
    <Touchable style={s.container} onPress={onPress}>
      <View style={s.imageContainer}>
        <UserImage size={56} image={chat.owner.avatar} />
      </View>
      <View style={s.titlesContainer}>
        <Text style={s.productTitle}>{chat.product.title}</Text>
        <Text style={s.ownerTitle}>{chat.owner.fullName}</Text>
        <Text style={s.lastMessageLabel}>{lastMessage}</Text>
      </View>
      <View style={{}}>
        <Text style={s.time}>{`${renderTime}`}</Text>
        {!chat.message.read && <View style={s.readIndicator}></View>}
      </View>
    </Touchable>
  );
};
export default observer(InboxChatItem);
