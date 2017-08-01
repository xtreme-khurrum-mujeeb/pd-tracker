import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import colors from '../../colors';
import styles from '../../styles';

const Title = ({ textColor = colors.text_green, children }) => {
  return (
    <View style={localStyles.titleContainer}>
      <Text style={[localStyles.titleStyle, styles.h1, { color: textColor }]}> {children} </Text>
    </View>
  );
};

const localStyles = StyleSheet.create({
  titleContainer: {
    flex: 0.20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    backgroundColor: colors.transparent,
    fontWeight: '300'
  }
});

export { Title };
