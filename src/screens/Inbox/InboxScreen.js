import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { useStore } from "../../stores/createStore";
import { FlashList } from "@shopify/flash-list";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";
import EmptyInboxSvg from "../../components/svg/EmptyInboxSvg";
import InboxChatItem from "../../components/Chat/InboxChatItem/InboxChatItem";
import s from "./styles";

const InboxScreen = () => {
  const navigation = useNavigation();
  const chats = useStore((store) => store.chats);

  useEffect(() => {
    chats.fetch.run();
  }, []);

  return (
    <View style={s.container}>
      {chats.list ? (
        <FlashList
          data={chats.list}
          renderItem={({ item }) => <InboxChatItem chat={item} />}
          keyExtractor={(item) => item.id}
          refreshing={chats.fetch.isLoading}
          // contentContainerStyle={{ backgroundColor: "red" }}
          // ListFooterComponent={() => <ListFooter />}
          // contentContainerStyle={s.listContainer}
          // estimatedItemSize={200}
          // onEndReachedThreshold={0.3}
        />
      ) : (
        <EmptyInboxSvg />
      )}
    </View>
  );
};

export default observer(InboxScreen);
