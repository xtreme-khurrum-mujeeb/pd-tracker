import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import styles from '../../styles';
import colors from '../../colors';


const Pill = (props) => {
  return (
    <View style={localStyles.background}>
      <Text style={[localStyles.pillText, styles.h4]}>{props.children}</Text>
    </View>

  );
};

const localStyles = StyleSheet.create({
  background: {
    backgroundColor: colors.pure_white,
    paddingVertical: 4,
    marginVertical: 5,
    borderRadius: 3,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  pillText: {
    color: colors.text_green,
  }
});

export { Pill };
