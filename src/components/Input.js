import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="white"
        underlineColorAndroid='transparent'
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    height: 40,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    color: 'white',
    fontFamily: 'Avenir Next',
    marginTop: '10%'
  },
  labelStyle: {
    fontSize: 18,
    flex: 1
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'column',

  }
};

export default Input;
