import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
   return (
     <View style={styles.inputContainer}>
       <TextInput
         style={styles.inputStyle}
         onChangeText={(text) => this.setState({ text })}
         value={this.state.text}
         placeholder="email@pivotal.io"
         placeholderTextColor="white"
         underlineColorAndroid='transparent'
       />
       <TextInput
         style={styles.inputStyle}
         onChangeText={(text) => this.setState({ text })}
         value={this.state.text}
         placeholder="password"
         placeholderTextColor="white"
         underlineColorAndroid='transparent'
       />
    </View>
   );
 }
}

const styles = StyleSheet.create({
    inputStyle: {
      height: 40,
      borderBottomColor: 'white',
      borderBottomWidth: 1,
      color: 'white',
      fontFamily: 'Avenir Next',
      marginTop: '10%'
    },
    inputContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '15%'
    }

});

export default LoginForm;
