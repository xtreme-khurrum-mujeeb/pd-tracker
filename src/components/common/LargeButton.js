import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import styles from '../../styles';
import colors from '../../colors';


const LargeButton = ({ onPress, name }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <View style={localStyles.button}>
        <Text style={[localStyles.buttonText, styles.h3]}> {name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const localStyles = StyleSheet.create({
  button: {
    backgroundColor: colors.pure_white,
    paddingVertical: 8,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.text_green,
  }
});

export { LargeButton };
