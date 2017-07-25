import React from 'react';
import { Image, StyleSheet } from 'react-native';

const ProfileImage = ({ source }) => {
  return (
    <Image
    source={source}
    style={localStyles.profileImageStyle}
    />
  );
};

const localStyles = StyleSheet.create({
  profileImageStyle: {
    width: 165,
    height: 165,
    resizeMode: 'contain'
},
});

export { ProfileImage };
