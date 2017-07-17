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
    flex: 0.5
    },
  boxStyle: {
    backgroundColor: 'rgba(3,100,87,0.60)',
    flex: 1
  }
});

export { BottomCard };
