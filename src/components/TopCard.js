import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TopCard = () => {
  return (
      <View style={styles.containerStyle}>
          <Image
          source={require('../assets/images/Oval.png')}
          style={styles.backgroundStyle}
          />
      </View>
    );
  };

const styles = StyleSheet.create({
  containerStyle: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
    },
  boxStyle: {
    backgroundColor: 'green',
    flex: 1
  },
  backgroundStyle: {
    width: 165,
    height: 165,
    resizeMode: 'contain'
}
});

export default TopCard;
