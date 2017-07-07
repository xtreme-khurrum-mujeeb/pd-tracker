import React, { Component } from 'react';
import {
   View,
   StyleSheet,
   ScrollView
 } from 'react-native';
import BottomCard from './BottomCard';
import Background from './Background';
import InputWithImage from './InputWithImage';
import LargeButton from './LargeButton';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    const userIcon = require('../assets/images/user.png');
    const passwordIcon = require('../assets/images/padlock.png');

    return (
       <Background>
         <BottomCard>
           <ScrollView>
           <View style={styles.container}>
             <View style={styles.wrapper}>
                  <InputWithImage
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder="Username"
                    imageSource={userIcon}
                  />
                  <InputWithImage
                    secureTextEntry
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder="Password"
                    imageSource={passwordIcon}
                  />
                <LargeButton name='Sign In' />
                <LargeButton name='Register' />
            </View>
          </View>
        </ScrollView>
        </BottomCard>
      </Background>
   );
 }
}

const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    wrapper: {
      paddingHorizontal: 50
    },

});

export default LoginForm;
