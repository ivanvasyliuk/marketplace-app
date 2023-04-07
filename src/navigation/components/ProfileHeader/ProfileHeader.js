import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SettingsIcon from "../../../components/svg/SettingsIcon";
import Touchable from "../../../components/Touchable/Touchable";
import { dimensions } from "../../../styles";
import screens from "../../screens";
import s from "./styles";

const ProfileHeader = () => {
  const navigation = useNavigation();
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={[
        s.container,
        { paddingTop: top, height: top + dimensions.headerHeight },
      ]}
    >
      <View
        style={{
          overflow: "hidden",
          flexDirection: "row",
          alignSelf: "flex-end",
          margin: 16,
        }}
      >
        <Touchable
          isOpacity
          onPress={() => navigation.navigate(screens.Settings)}
        >
          <SettingsIcon />
        </Touchable>
      </View>
    </View>
  );
};
export default observer(ProfileHeader);
