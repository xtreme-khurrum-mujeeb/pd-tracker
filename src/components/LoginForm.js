import React, { Component } from 'react';
import {
   View,
   StyleSheet,
   TextInput,
   Text,
   Image,
   TouchableOpacity
 } from 'react-native';
import BottomCard from './BottomCard';
import Background from './Background';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
   return (
     <Background>
       <BottomCard>
         <View style={styles.container}>
           <View style={styles.wrapper}>
              <View style={styles.inputWrap}>
                <View style={styles.iconWrap}>
                  <Image
                    source={require('../assets/images/user.png')}
                    style={styles.iconStyle}
                    resizeMode="contain"
                  />
                </View>
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => this.setState({ text })}
                  value={this.state.text}
                  placeholder="Username"
                  placeholderTextColor="#F3EFEF"
                  underlineColorAndroid='transparent'
                />
              </View>
              <View style={styles.inputWrap}>
                <View style={styles.iconWrap}>
                  <Image
                    source={require('../assets/images/padlock.png')}
                    style={styles.iconStyle}
                    resizeMode="contain"
                  />
                </View>
                <TextInput
                  secureTextEntry
                  style={styles.input}
                  onChangeText={(text) => this.setState({ text })}
                  value={this.state.text}
                  placeholder="Password"
                  placeholderTextColor="#F3EFEF"
                  underlineColorAndroid='transparent'
                />
              </View>
            <TouchableOpacity activeOpacity={0.5}>
              <View style={styles.button}>
                <Text style={styles.buttonText}> Sign In</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <View style={styles.button}>
                <Text style={styles.buttonText}> Register</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </BottomCard>
    </Background>
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
      fontSize: 20,
      marginTop: '10%'
    },
    inputContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '15%'
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',

    },
    wrapper: {
      paddingHorizontal: 50
    },
    inputWrap: {
      flexDirection: 'row',
      marginVertical: 10,
      height: 40,
      backgroundColor: 'transparent'
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
    iconStyle: {
      height: 20,
      width: 20
    },
    iconWrap: {
      paddingHorizontal: 7,
      alignItems: 'center',
      justifyContent: 'center'
   },
   button: {
     backgroundColor: '#FFF',
     paddingVertical: 10,
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

export default LoginForm;
