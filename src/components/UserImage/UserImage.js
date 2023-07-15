import React from 'react';
import { Image, View } from 'react-native';
import s from './styles';

const UserImage = ({ image, size }) => {
  return (
    <View
      style={[
        s.container,
        { borderRadius: size / 2, width: size, height: size },
      ]}
    >
      <Image
        style={{ width: size, height: size }}
        source={{ uri: image }}
      />
    </View>
  );
};
export default UserImage;
