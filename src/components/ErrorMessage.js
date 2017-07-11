import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ErrorMessage = ({ message }) => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorStyle}>
        {message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    backgroundColor: '#FFAC28',
    flex: 0.20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorStyle: {
    color: 'white',
    fontFamily: 'Avenir Next',
    fontSize: 20
  }
});

export default ErrorMessage;
