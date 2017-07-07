import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const LargeButton = ({ name }) => {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.button}>
        <Text style={styles.buttonText}> {name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFF',
    paddingVertical: 8,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#008774',
    fontFamily: 'Avenir Next',
    fontSize: 20
  }
});

export default LargeButton;
