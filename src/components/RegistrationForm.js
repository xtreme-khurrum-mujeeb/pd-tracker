import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import {
   View,
   StyleSheet,
   Image,
   Keyboard
 } from 'react-native';

import {
  regEmailChanged,
  regPasswordChanged,
  regConfirmPasswordChanged,
  registerUser
 } from '../actions';

import {
   TopCard,
   BottomCard,
   Background,
   InputWithImage,
   LargeButton,
   ErrorMessage,
   Spinner,
   Title,
   IconButton
  } from './common';

import strings from '../strings';
import colors from '../colors';

const userIcon = require('../assets/images/user.png');
const passwordIcon = require('../assets/images/padlock.png');

export class RegistrationForm extends Component {

  static propTypes = {
  };

  onRegEmailChange(text) {
    this.props.regEmailChanged(text);
  }

  onRegPasswordChange(text) {
    this.props.regPasswordChanged(text);
  }

  onRegConfirmPasswordChange(text) {
    this.props.regConfirmPasswordChanged(text);
  }

  onRegisterPress() {
    const { email, password } = this.props;

    Keyboard.dismiss();

    this.props.registerUser({ email, password });
  }

  onBackPress() {
    Actions.pop();
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
               onChangeText={this.onRegEmailChange.bind(this)}
               value={this.props.email}
               placeholder="Email"
               imageSource={userIcon}
             />
             <InputWithImage
               secureTextEntry
               onChangeText={this.onRegPasswordChange.bind(this)}
               value={this.props.password}
               placeholder="Password"
               imageSource={passwordIcon}
               defaultValue="test123"
             />
             <InputWithImage
               secureTextEntry
               onChangeText={this.onRegConfirmPasswordChange.bind(this)}
               value={this.props.confirmPassword}
               placeholder="Confirm Password"
               imageSource={passwordIcon}
               defaultValue="test123"
             />
       </View>
     </View>
  );
}

  render() {
    return (
       <Background>
         <BottomCard>
           <Title textColor={colors.text_white}> Register </Title>
             <View style={localStyles.iconContainer}>
               <IconButton
                 imageSource={require('../assets/images/arrow-left.png')}
                 style={{  }}
                 onPress={this.onBackPress.bind(this)}
               />
           </View>
           {this.renderLoginView()}
        </BottomCard>
        <BottomCard>
          <View style={localStyles.wrapper}>
          <LargeButton
            name='Submit'
            onPress={this.onRegisterPress.bind(this)}
          />
          </View>
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
  },
    iconContainer: {
      flex: 0.20,
      flexDirection: 'row',
      justifyContent: 'space-between'
  },

});

const mapStateToProps = state => {
  return {
    email: state.reg.email,
    password: state.reg.password,
    confirmPassword: state.reg.confirmPassword,
    error: state.reg.error,
    loading: state.network.loading
  };
};

export default connect(mapStateToProps, {
  regEmailChanged,
  regPasswordChanged,
  regConfirmPasswordChanged,
  registerUser
})(RegistrationForm);
