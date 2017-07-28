import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
   View,
   StyleSheet,
   Image,
   Keyboard
 } from 'react-native';

import {
  emailChanged,
  passwordChanged,
  loginUser,
  registerUser
 } from '../actions';

import {
   TopCard,
   BottomCard,
   Background,
   InputWithImage,
   LargeButton,
   ErrorMessage,
   Spinner
  } from './common';

import strings from '../strings';

const userIcon = require('../assets/images/user.png');
const passwordIcon = require('../assets/images/padlock.png');

export class LoginForm extends Component {

  static propTypes = {
    emailChanged: PropTypes.func,
    passwordChanged: PropTypes.func,
    loginUser: PropTypes.func,
    registerUser: PropTypes.func,
    email: PropTypes.string,
    password: PropTypes.string,
    error: PropTypes.bool,
    loading: PropTypes.bool
  };

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginPress() {
    const { email, password } = this.props;

    Keyboard.dismiss();

    this.props.loginUser({ email, password });
  }

  onRegisterPress() {
    const { email, password } = this.props;

    this.props.registerUser({ email, password });
  }

  displayErrorMessage() {
    if (this.props.error) {
      return (
        <ErrorMessage message={strings.invalidCredentials} />
      );
    }
  }

  displaySpinner() {
    if (this.props.loading) {
      return (
        <Spinner />
      );
    }
  }

  renderLoginView() {
    return (
      <View style={localStyles.container}>
        {this.displayErrorMessage()}
        <View style={localStyles.wrapper}>
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

  render() {
    return (
       <Background>
         <TopCard>
           <View style={localStyles.topImageContainer}>
             <Image
             source={require('../assets/images/Oval.png')}
             style={localStyles.topImageStyle}
             />
          </View>
        </TopCard>
         <BottomCard>
           {this.renderLoginView()}
        </BottomCard>
        {this.displaySpinner()}
      </Background>
   );
 }
}

const localStyles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center'
    },
    wrapper: {
      flex: 1,
      paddingHorizontal: 50,
    },
    topImageContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    topImageStyle: {
      width: 165,
      height: 165,
      resizeMode: 'contain',
  }

});

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.network.loading
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
  registerUser
})(LoginForm);
