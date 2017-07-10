import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

const BottomCard = (props) => {
  return (
      <View style={styles.containerStyle}>
        <View style={styles.boxStyle}>
          {props.children}
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  containerStyle: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    },
  boxStyle: {
    backgroundColor: 'rgba(3,100,87,0.60)',
    width: '100%',
    height: '100%'
  }
});

export default BottomCard;
