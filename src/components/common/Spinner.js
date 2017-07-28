import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import colors from '../../colors'

const Spinner = () => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator
        size='large'
        color='yellow'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background_green
  }
});


export { Spinner };
