import { useNavigation, useRoute } from "@react-navigation/native";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import ProductList from "../../components/Products/ProductList/ProductList";
import { useStore } from "../../stores/createStore";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
  interpolate,
} from "react-native-reanimated";
import s from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import UserImage from "../../components/User/UserImage/UserImage";
import { width } from "../../styles/dimensions";
import Touchable from "../../components/Touchable/Touchable";
import SettingsIcon from "../../components/svg/SettingsIcon";
import screens from "../../navigation/screens";
import { AntDesign } from "@expo/vector-icons";
import NotSellYetIcon from "../../components/svg/NotSellYetIcon";

const ProfileScreenAnimated = () => {
  const navigation = useNavigation();
  const store = useStore();
  const headerHeight = useSharedValue(172);
  const scrollY = useSharedValue(0);
  const scrollOffset = useSharedValue(0);
  const textWidth = useSharedValue(0);
  const { top } = useSafeAreaInsets();

  const route = useRoute();

  const owner = !!route.params?.owner
    ? route.params?.owner.owner
    : store.viewer.userModel;

  const isOwnerPost = store.viewer.userId === owner.id;

  console.log("owner", owner);

  useEffect(() => {
    if (!owner) {
      navigation.navigate(screens.Settings);
    }
    store.products.ownStore.fetch.run("20");
  }, [store.products.ownStore.list]);

  const list = store.products.ownStore.list;

  // const owner = { fullName: "Joseph" };

  const HEADER_MAX_HEIGHT = 172;
  const HEADER_MIN_HEIGHT = 56;
  const PROFILE_IMAGE_MAX_HEIGHT = 72;
  const PROFILE_IMAGE_MIN_HEIGHT = 36;
  const headerChangeRange = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

  // const scrollHandler = useAnimatedScrollHandler({
  //   onScroll: (event) => {
  //     scrollOffset.value = event.contentOffset.y;
  //     if (event.contentOffset.y < HEADER_MAX_HEIGHT) {
  //       headerHeight.value = HEADER_MAX_HEIGHT - event.contentOffset.y;
  //     }
  //   },
  // });

  function scrollHandler(e) {
    console.log("e", e.nativeEvent);
    console.log("headerHeight.value", headerHeight.value);
    scrollOffset.value = e.nativeEvent.contentOffset.y;
    headerHeight.value = interpolate(
      e.nativeEvent.contentOffset.y,
      [0, headerChangeRange],
      [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT]
    );
  }

  const headerContainer = useAnimatedStyle(() => {
    return {
      marginTop: top,
      minHeight: HEADER_MIN_HEIGHT,
      height: withSpring(headerHeight.value, {
        damping: 10,
        stiffness: 100,
      }),
    };
  });
  const backButtonContainer = useAnimatedStyle(() => {
    const top = (HEADER_MIN_HEIGHT - 36) / 2;
    const opacity = interpolate(
      scrollOffset.value,
      [0, headerChangeRange - 10, headerChangeRange],
      [0, 0, 1]
    );
    return {
      opacity: opacity,
      position: "absolute",
      top: top,
      left: 10,
      width: 36,
      height: 36,
    };
  });
  const textContainer = useAnimatedStyle(() => {
    const middle = (width - textWidth.value) / 2;
    let left = 92;
    let top = (HEADER_MIN_HEIGHT - 17) / 2;
    if (scrollOffset.value < 120) {
      left = interpolate(
        scrollOffset.value,
        [0, headerChangeRange],
        [middle, 92]
      );
      top = interpolate(scrollOffset.value, [0, headerChangeRange], [99, 17]);
    }
    return {
      transform: [{ translateX: withSpring(left) }],
      position: "absolute",
      top: withSpring(top),
    };
  });
  const avatarContainer = useAnimatedStyle(() => {
    const middle = width / 2 - PROFILE_IMAGE_MAX_HEIGHT / 2;
    let left = 48;
    let imageSize = PROFILE_IMAGE_MIN_HEIGHT;
    let top = 11;
    if (scrollOffset.value < 120) {
      left = interpolate(
        scrollOffset.value,
        [0, headerChangeRange],
        [middle, 48]
      );
      imageSize = interpolate(
        scrollOffset.value,
        [0, headerChangeRange],
        [72, 36]
      );
      top = interpolate(scrollOffset.value, [0, headerChangeRange], [19, 11]);
    }
    return {
      transform: [{ translateX: withSpring(left) }],
      backgroundColor: "red",
      top: withSpring(top),
      width: withSpring(imageSize),
      height: withSpring(imageSize),
      borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
      overflow: "hidden",
      position: "absolute",
    };
  });

  return (
    <View style={[s.container, { paddingtop: top }]}>
      <Animated.View style={[headerContainer]}>
        <Animated.View style={[avatarContainer]}>
          {/* <UserImage /> */}
        </Animated.View>

        <Animated.View style={textContainer}>
          <Text
            style={{ fontSize: 16, fontWeight: "500" }}
            onLayout={(e) => {
              console.log("e");
              textWidth.value = e.nativeEvent.layout.width;
            }}
          >
            {owner?.fullName}
          </Text>
        </Animated.View>
        {isOwnerPost && (
          <Touchable
            style={{
              position: "absolute",
              top: 19.5,
              right: 10,
              // backgroundColor: "red",
            }}
            isOpacity
            onPress={() => navigation.navigate(screens.Settings)}
          >
            <SettingsIcon />
          </Touchable>
        )}

        <Animated.View style={backButtonContainer}>
          <Touchable
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }}
            isOpacity
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="left" size={22} />
          </Touchable>
        </Animated.View>
      </Animated.View>
      {/* <Animated.ScrollView onScroll={scrollHandler}> */}
      <ProductList
        list={list}
        onScroll={scrollHandler}
        ListEmptyComponent={<NotSellYetIcon />}
      />
      {/* </Animated.ScrollView> */}
    </View>
  );
};

export default observer(ProfileScreenAnimated);
