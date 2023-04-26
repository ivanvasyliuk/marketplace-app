import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import Touchable from "../../../components/Touchable/Touchable";
import UserImage from "../../../components/User/UserImage/UserImage";
import colors from "../../../styles/colors";

const ChatLeftHeader = ({ chat }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Touchable isOpacity onPress={() => navigation.goBack()}>
        <AntDesign
          name="left"
          size={24}
          style={{ marginHorizontal: 20 }}
          color={colors.primary}
        />
      </Touchable>
      <UserImage image={chat.owner.avatar} size={36} />
      <Text
        style={{
          marginLeft: 8,
          fontWeight: "500",
          fontSize: 16,
          lineHeight: 24,
        }}
      >
        {chat.owner.fullName}
      </Text>
    </View>
  );
};
export default ChatLeftHeader;
