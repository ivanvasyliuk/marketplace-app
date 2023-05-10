import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { useStore } from "../../stores/createStore";
import { FlashList } from "@shopify/flash-list";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";
import EmptyInboxSvg from "../../components/svg/EmptyInboxSvg";
import InboxChatItem from "../../components/Chat/InboxChatItem/InboxChatItem";
import s from "./styles";
import GoToLoginButton from "../../components/GoToLoginButton/GoToLoginButton";
import colors from "../../styles/colors";

const InboxScreen = () => {
  const navigation = useNavigation();
  const store = useStore();
  const chats = store.chats;

  useEffect(() => {
    chats.fetch.run();
  }, []);

  return (
    <View style={s.container}>
      {store.viewer.userModel ? (
        <FlashList
          data={chats.list}
          renderItem={({ item }) => <InboxChatItem chat={item} />}
          keyExtractor={(item) => item.id}
          refreshing={chats.fetch.isLoading}
          ListEmptyComponent={<EmptyInboxSvg />}
          ListFooterComponent={() => (
            <View
              style={{
                borderBottomColor: colors.border,
                borderBottomWidth: 1,
              }}
            />
          )}
          ListHeaderComponent={() => (
            <View
              style={{
                borderBottomColor: colors.border,
                borderBottomWidth: 1,
              }}
            />
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                borderBottomColor: "white",
                borderBottomWidth: 1,
                paddingLeft: 72,
                backgroundColor: "white",
              }}
            >
              <View
                style={{
                  borderBottomColor: colors.border,
                  borderBottomWidth: 1,

                  backgroundColor: "white",
                }}
              />
            </View>
          )}
          // contentContainerStyle={{ backgroundColor: "red" }}
          // ListFooterComponent={() => <ListFooter />}
          // contentContainerStyle={s.listContainer}
          // estimatedItemSize={200}
          // onEndReachedThreshold={0.3}
        />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              lineHeight: 24,
              letterSpacing: 0,
              textAlign: "center",
              color: "gray",
              marginBottom: 8,
            }}
          >
            Login to check your Inbox
          </Text>
          <GoToLoginButton />
        </View>
      )}
    </View>
  );
};

export default observer(InboxScreen);
