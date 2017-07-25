import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import colors from '../../colors';
import styles from '../../styles';

const Title = (props) => {
  return (
    <View style={localStyles.titleContainer}>
      <Text style={[localStyles.titleStyle, styles.h1]}> {props.children} </Text>
    </View>
  );
};

const localStyles = StyleSheet.create({
  titleContainer: {
    flex: 0.20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    backgroundColor: colors.transparent,
    color: colors.text_green,
    fontWeight: '300'
  }
});

export { Title };
