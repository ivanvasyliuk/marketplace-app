import React from "react";
import { ActivityIndicator, Image, View } from "react-native";
import s from "./styles";
import ButtonAddPhoto from "./ButtonAddPhoto";
import { useFormikContext } from "formik";
import { useState } from "react";

const Photos = () => {
  const [isLoadingPhoto, setIsLoadingPhoto] = useState(false);
  const {
    values: { images },
  } = useFormikContext();

  return (
    <>
      <View style={s.container}>
        <View style={s.imagesList}>
          {images.map((image, index) => (
            <View key={index}>
              <Image source={{ uri: image }} style={s.image} />
            </View>
          ))}
          {isLoadingPhoto && (
            <ActivityIndicator style={s.loaderContainer} size="large" />
          )}
          <ButtonAddPhoto
            isLoadingPhoto={isLoadingPhoto}
            setIsLoadingPhoto={setIsLoadingPhoto}
          />
        </View>
      </View>
    </>
  );
};

export default Photos;
