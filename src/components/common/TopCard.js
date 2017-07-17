import React from 'react';
import { View, StyleSheet } from 'react-native';

const TopCard = (props) => {
  return (
      <View style={styles.containerStyle}>
        {props.children}
      </View>
    );
  };

const styles = StyleSheet.create({
  containerStyle: {
    flex: 0.5
  },
});

export { TopCard };
