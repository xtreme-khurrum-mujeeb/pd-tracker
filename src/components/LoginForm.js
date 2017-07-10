import React, { Component } from 'react';
import {
   View,
   StyleSheet,
   ScrollView,
   Platform
 } from 'react-native';
import { connect } from 'react-redux';
import {
  emailChanged,
  passwordChanged,
  loginUser,
  registerUser
 } from '../actions';
import TopCard from './TopCard';
import BottomCard from './BottomCard';
import Background from './Background';
import InputWithImage from './InputWithImage';
import LargeButton from './LargeButton';

const userIcon = require('../assets/images/user.png');
const passwordIcon = require('../assets/images/padlock.png');

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  onRegisterPress() {
    const { email, password } = this.props;

    this.props.registerUser({ email, password });
  }

  loginView() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
             <InputWithImage
               onChangeText={this.onEmailChange.bind(this)}
               value={this.props.email}
               placeholder="Username"
               imageSource={userIcon}
             />
             <InputWithImage
               secureTextEntry
               onChangeText={this.onPasswordChange.bind(this)}
               value={this.props.password}
               placeholder="Password"
               imageSource={passwordIcon}
               defaultValue="test123"
             />
           <LargeButton
             name='Sign In'
             onPress={this.onLoginPress.bind(this)}
           />
           <LargeButton
             name='Register'
             onPress={this.onRegisterPress.bind(this)}
           />
       </View>
     </View>
  );
}

  renderLoginView() {
    if (Platform.OS === 'ios') {
      return (
        this.loginView()
     );
  }
    return (
      <ScrollView>
        {this.loginView()}
     </ScrollView>
   );
}

  render() {
    return (
       <Background>
         <TopCard />
         <BottomCard>
           {this.renderLoginView()}
        </BottomCard>
      </Background>
   );
 }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    wrapper: {
      paddingHorizontal: 50
    },

});

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
  registerUser
})(LoginForm);
