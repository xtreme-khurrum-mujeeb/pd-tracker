import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

const IconButton = ({ imageSource, style, onPress }) => {
  return (
    <TouchableOpacity
      style={[localStyles.settingsImageContainer, style]}
      activeOpacity={0.5}
      onPress={onPress}
    >
     <Image
       source={imageSource}
       style={localStyles.settingsImageStyle}
     />
    </TouchableOpacity>
  );
};

const localStyles = StyleSheet.create({
  settingsImageContainer: {
    flex: 0.10,
    width: 25,
    flexDirection: 'row',
    marginHorizontal: '5%'
  },
  settingsImageStyle: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});

export { IconButton };
