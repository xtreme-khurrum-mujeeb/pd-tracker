import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = () => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator
        size='small'
        color='yellow'
      />
    </View>
  );
};

const styles = {
  spinnerStyle: {
      flex: 0.20,
      justifyContent: 'center',
      alignItems: 'center'
  }
};


export { Spinner };
