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
// import Carousel from "react-native-snap-carousel";

const PostScreen = () => {
  const store = useStore();
  const carouselRef = useRef();
  const route = useRoute();
  const navigation = useNavigation();
  const [allDescriptionVisible, setAllDescriptionVisible] = useState(false);

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

  const { top } = useSafeAreaInsets();

  useEffect(() => {
    // Question: is it need?
    // product.fetchOwner();
  }, []);

  return (
    <View style={s.container}>
      <ScrollView style={[s.contentContainer]}>
        <View>
          {/* <Carousel
            layout="default"
            ref={(c) => (carouselRef = c)}
            data={product.photos}
            renderItem={({ index }) => (
              <Image
                style={[s.image, { backgroundColor: "green" }]}
                source={{
                  uri: product.photos[index],
                }}
              />
            )}
            containerCustomStyle={ViewPropTypes.style}
            sliderWidth={300}
            itemWidth={300}
          /> */}
          <Image
            style={[s.image, { backgroundColor: "green" }]}
            source={{
              uri: product.photos[0],
            }}
          />
          <LinearGradient
            colors={["rgba(0,0,0,0.7)", "rgba(0, 0, 0, 0.32)", "transparent"]}
            style={[
              s.header,
              { paddingTop: top, height: top + dimensions.headerHeight },
            ]}
          >
            <Touchable
              style={s.iconContainer}
              isOpacity
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="left" size={24} color={colors.white} />
            </Touchable>
            <View style={s.rigthButtonsInHeader}>
              {isOwnerPost ? (
                <Touchable style={s.iconContainer} isOpacity>
                  <MaterialIcons name="edit" size={24} color={colors.white} />
                </Touchable>
              ) : (
                <Touchable
                  isOpacity
                  style={s.iconContainer}
                  onPress={() => product.toogleFavorite.run()}
                >
                  {product.saved ? (
                    <Ionicons
                      name="md-bookmark"
                      color={colors.white}
                      size={24}
                    />
                  ) : (
                    <Ionicons
                      name="md-bookmark-outline"
                      color={colors.white}
                      size={24}
                    />
                  )}
                </Touchable>
              )}

              <Touchable style={s.iconContainer} isOpacity>
                <MaterialCommunityIcons
                  name="share-variant"
                  size={24}
                  color={colors.white}
                />
              </Touchable>
              <Touchable style={s.iconContainer} isOpacity>
                <MaterialIcons
                  name="more-vert"
                  size={24}
                  color={colors.white}
                />
              </Touchable>
            </View>
          </LinearGradient>
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
                : product.description.slice(0, 90)}
            </Text>
            <Touchable
              isOpacity
              onPress={() => setAllDescriptionVisible(!allDescriptionVisible)}
            >
              {product.description.length > 90 && (
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
          <View style={{ flexDirection: "row" }}>
            <UserImage image={product.owner.avatar} size={48} />
            <View>
              <Text>
                {product.owner.fullName} is {`${"online"}`}
              </Text>
              <Text
                style={{
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: 16,
                  lineHeight: 24,
                  color: colors.blue,
                }}
              >
                See all James’s posts
              </Text>
            </View>
          </View>
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
            <Text
              style={{
                color: "white",
                fontStyle: "normal",
                marginLeft: 8,
                fontWeight: "400",
                fontSize: 16,
                lineHeight: 24,
              }}
            >
              Call
            </Text>
          </Touchable>
          <Touchable style={s.messageButtonContainer}>
            <MessageIcon />
            <Text
              style={{
                color: "white",
                fontStyle: "normal",
                marginLeft: 8,
                fontWeight: "400",
                fontSize: 16,
                lineHeight: 24,
              }}
            >
              Message
            </Text>
          </Touchable>
        </View>
      )}
    </View>
  );
};
export default observer(PostScreen);
