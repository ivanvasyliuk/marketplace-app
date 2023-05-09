import React, { useEffect, useRef, useState } from "react";
import { observer } from "mobx-react";
import { Linking } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, View, Text, ScrollView } from "react-native";
import Toast from "react-native-toast-message";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Touchable from "../../components/Touchable/Touchable";
import UserImage from "../../components/User/UserImage/UserImage";
import { useStore } from "../../stores/createStore";
import colors from "../../styles/colors";
import { dimensions } from "../../styles";
import s from "./styles";
import CallIcon from "../../components/svg/CallIcon";
import MessageIcon from "../../components/svg/MessageIcon";
import screens from "../../navigation/screens";
import SellerInfo from "../../components/SellerInfo/SellerInfo";
import HeaderPost from "../../components/HeaderPost/HeaderPost";
import Carousel from "react-native-reanimated-carousel";
import AnimatedDotsCarousel from "react-native-animated-dots-carousel";
import DotsCarousel from "../../components/DotsCarousel/DotsCarousel";
import ImagesCarousel from "../../components/ImagesCarousel/ImagesCarousel";

const PostScreen = () => {
  const store = useStore();
  const carouselRef = useRef();
  const route = useRoute();
  const navigation = useNavigation();
  const [allDescriptionVisible, setAllDescriptionVisible] = useState(false);
  const [index, setIndex] = useState(0);

  function openCall(phoneNumber) {
    if (phoneNumber) {
      Linking.openURL(`tel:${phoneNumber}`);
    } else {
      Toast.show({
        type: "success",
        text1: "User don't have phone number ",
      });
    }
  }
  const product = route.params.product;

  const isOwnerPost = store.viewer.userId === product.ownerId;

  const timeCreatedAt = `${new Date(+product.createdAt).getHours()}:${new Date(
    +product.createdAt
  ).getMinutes()}`;

  return (
    <View style={s.container}>
      <HeaderPost product={product} isOwnerPost={isOwnerPost} />
      <ScrollView style={[s.contentContainer]}>
        <View>
          <ImagesCarousel list={product.photos} setIndex={setIndex} />
          <DotsCarousel list={product.photos} index={index} />
          <LinearGradient
            colors={["transparent", "rgba(0, 0, 0, 0.2)", "rgba(0,0,0,0.6)"]}
            style={s.titleAndPriceContainer}
          >
            <View>
              <Text style={s.title}>{product.title}</Text>
              <Text style={s.timeAndLocation}>
                {timeCreatedAt}
                {`   `}
                <MaterialIcons name="location-on" size={18} color="gray" />
                {product.location}
              </Text>
            </View>
            <Text style={s.price}>{`$${product.price}`}</Text>
          </LinearGradient>
        </View>
        <View style={s.descriptionContainer}>
          <View>
            <Text style={s.descrioption}>
              {allDescriptionVisible
                ? product.description
                : product.description.slice(0, 145)}
            </Text>
            <Touchable
              isOpacity
              onPress={() => setAllDescriptionVisible(!allDescriptionVisible)}
            >
              {product.description.length > 145 && (
                <Text
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: 16,
                    lineHeight: 24,
                    color: colors.primary,
                  }}
                >
                  {allDescriptionVisible ? "Hide more..." : "Read more..."}
                </Text>
              )}
            </Touchable>
          </View>
          <View style={s.horizontalLine} />
          <SellerInfo product={product} />
        </View>
      </ScrollView>
      <Toast position="bottom" bottomOffset={50} />
      {!isOwnerPost && (
        <View style={s.callAndMessageContainer}>
          <Touchable
            style={s.callButtonContainer}
            onPress={() => openCall(product.owner.phone)}
          >
            <CallIcon />
            <Text style={s.buttonLabel}>Call</Text>
          </Touchable>
          <Touchable style={s.messageButtonContainer}>
            <MessageIcon />
            <Text style={s.buttonLabel}>Message</Text>
          </Touchable>
        </View>
      )}
    </View>
  );
};
export default observer(PostScreen);
