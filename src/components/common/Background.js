import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Background = (props) => {
  return (
    <Image
      source={require('../../assets/images/Background.png')}
      style={styles.backgroundStyle}
    >
      {props.children}
    </Image>
      );
  };
  const styles = StyleSheet.create({
      backgroundStyle: {
      flex: 0.5,
      width: null,
      height: null
    }
  });


export { Background };
