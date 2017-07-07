import React from 'react';
import {
  TextInput,
  View,
  Image,
  StyleSheet
 } from 'react-native';

const InputWithImage = ({ value, onChangeText, placeholder, secureTextEntry, imageSource }) => {
const {
    input,
    inputWrap,
    iconWrap,
    iconStyle
   } = styles;

  return (
    <View style={inputWrap}>
      <View style={iconWrap}>
        <Image
          source={imageSource}
          style={iconStyle}
          resizeMode="contain"
        />
      </View>
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          autoCorrect={false}
          style={input}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor="#F3EFEF"
          underlineColorAndroid='transparent'
          returnKeyType='next'
        />

    </View>
  );
};

const styles = StyleSheet.create({
  inputWrap: {
    flexDirection: 'row',
    marginVertical: 10,
    height: 40,
    backgroundColor: 'transparent'
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center'
 },
 iconStyle: {
     height: 21,
     width: 21
 },
 input: {
   flex: 1,
   paddingHorizontal: 10,
   borderBottomWidth: 1,
   borderBottomColor: 'white',
   color: 'white',
   fontFamily: 'Avenir Next',
   fontSize: 20,
 },
});

export default InputWithImage;
