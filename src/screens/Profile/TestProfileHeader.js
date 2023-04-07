import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Animated,
  Image,
} from "react-native";
import ProductList from "../../components/Products/ProductList/ProductList";
import UserImage from "../../components/User/UserImage/UserImage";
import { useStore } from "../../stores/createStore";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import s from "./styles";

const image =
  "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fexpoproject-aeb8be29-bf3a-4275-a960-54282c5f6b7a/ImagePicker/c3dbdf38-2c1f-463f-ba1e-97ca1d9188de.jpeg";

const HEADER_MAX_HEIGHT = 172;
const HEADER_MIN_HEIGHT = 80;
const PROFILE_IMAGE_MAX_HEIGHT = 72;
const PROFILE_IMAGE_MIN_HEIGHT = 36;

const TestProfileHeader = () => {
  const [state, setState] = useState({ scrollY: new Animated.Value(0) });
  const navigation = useNavigation();
  const store = useStore();
  const { top } = useSafeAreaInsets();
  console.log("top", top);
  useEffect(() => {
    store.ownStore.fetch.run();
  }, []);

  const list = store.ownStore.list;

  const headerHeight = state.scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: "clamp",
  });

  const profileImageMarginTop = state.scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT - 70, HEADER_MIN_HEIGHT],
    extrapolate: "clamp",
  });
  const headerZindex = state.scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });
  const headerTitleBottom = state.scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [0, 14],
    extrapolate: "clamp",
  });
  const headerImageBottom = state.scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [32, 8],
    extrapolate: "clamp",
  });

  const profileImageMarginLeft = state.scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [160, 48],
    extrapolate: "clamp",
  });
  const profileNameMarginLeft = state.scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [155, 92],
    extrapolate: "clamp",
  });
  const imageSize = state.scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
    extrapolate: "clamp",
  });

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "white",
          height: headerHeight,
          zIndex: headerZindex,
          alignItems: "center",
        }}
      >
        <Animated.View
          style={{
            height: imageSize,
            width: imageSize,
            borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
            overflow: "hidden",
            marginTop: profileImageMarginTop,
            position: "absolute",
            bottom: headerImageBottom,
            left: profileImageMarginLeft,
          }}
        >
          <Image
            source={{ uri: image }}
            style={{ flex: 1, width: null, height: null }}
          />
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            bottom: headerTitleBottom,
            left: profileNameMarginLeft,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            Owner Name
          </Text>
        </Animated.View>
      </Animated.View>

      <ScrollView
        style={{ flex: 1 }}
        scrollEventThrottle={16}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: state.scrollY } } },
        ])}
      >
        <Animated.View
          style={{
            height: 70,
            marginTop: profileImageMarginTop,
          }}
        ></Animated.View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>active:145 | sold:30 | rating:4.7</Text>
        </View>
        <ProductList list={list} />
      </ScrollView>
    </View>
  );
};

export default observer(TestProfileHeader);
