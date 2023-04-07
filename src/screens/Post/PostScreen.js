import React from "react";
import { Image, View, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { dimensions } from "../../styles";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import s from "./styles";
import colors from "../../styles/colors";
import Touchable from "../../components/Touchable/Touchable";
import UserImage from "../../components/User/UserImage/UserImage";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useProductsCollection } from "../../stores/Products/ProductsCollection";
import { observer } from "mobx-react";
import { useStore } from "../../stores/createStore";

const PostScreen = () => {
  const store = useStore();
  const route = useRoute();
  const navigation = useNavigation();
  const collection = useProductsCollection();

  const product = route.params.product;
  console.log("product", product);

  const isOwnerPost = store.viewer.userId === product.ownerId;

  const timeCreatedAt = `${new Date(+product.createdAt).getHours()}:${new Date(
    +product.createdAt
  ).getMinutes()}`;

  const { top } = useSafeAreaInsets();
  return (
    <ScrollView style={[s.headerContainer]}>
      <View>
        <Image
          style={[s.image, { backgroundColor: "green" }]}
          source={{
            uri: product.photos[0],
          }}
        />
        <View
          style={[
            s.header,
            { paddingTop: top, height: top + dimensions.headerHeight },
          ]}
        >
          <Touchable isOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color={colors.white} />
          </Touchable>
          <View style={s.rigthButtonsInHeader}>
            <Touchable isOpacity>
              {isOwnerPost ? (
                <MaterialIcons name="edit" size={24} color={colors.white} />
              ) : (
                <Touchable
                  isOpacity
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
            </Touchable>
            <Touchable isOpacity>
              <MaterialCommunityIcons
                name="share-variant"
                size={24}
                color={colors.white}
              />
            </Touchable>
            <Touchable isOpacity>
              <MaterialIcons name="more-vert" size={24} color={colors.white} />
            </Touchable>
          </View>
        </View>
        <View style={s.titleAndPriceContainer}>
          <View>
            <Text style={s.title}>{product.title}</Text>
            <Text style={s.timeAndLocation}>
              {timeCreatedAt}
              {`   `}
              <MaterialIcons name="location-on" size={18} color="gray" />
              {product.location}
            </Text>
          </View>
          <Text style={s.price}>$400</Text>
        </View>
      </View>
      <View style={s.descriptionContainer}>
        <View>
          <Text style={s.descrioption}>{product.description}</Text>
        </View>
        <View style={s.horizontalLine} />
        <UserImage
          image="file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fexpoproject-aeb8be29-bf3a-4275-a960-54282c5f6b7a/ImagePicker/c3dbdf38-2c1f-463f-ba1e-97ca1d9188de.jpeg"
          size={48}
        />
      </View>
    </ScrollView>
  );
};
export default observer(PostScreen);
