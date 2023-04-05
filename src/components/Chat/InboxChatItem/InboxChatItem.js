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

  // const user = chat.user;
  console.log("chatItem", chat.user);

  return (
    <Touchable
      style={s.container}
      onPress={() => navigation.navigate(screens.ChatModal)}
    >
      <View style={s.imageContainer}>
        <UserImage
          size={56}
          // image={chat.owner.product.avatar}
          image="file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fexpoproject-aeb8be29-bf3a-4275-a960-54282c5f6b7a/ImagePicker/c3dbdf38-2c1f-463f-ba1e-97ca1d9188de.jpeg"
        />
      </View>
      <View style={s.titlesContainer}>
        <Text style={s.productTitle}>Painting</Text>
        <Text style={s.ownerTitle}>Darrell Edwards</Text>
        <Text style={s.lastMessageLabel}>
          Purus vitae placerat sollicitudin ...
        </Text>
      </View>
      <View style={{}}>
        <Text style={s.time}>{now.getHours() + ":" + now.getMinutes()}</Text>
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
      </View>
    </Touchable>
  );
};
export default InboxChatItem;
