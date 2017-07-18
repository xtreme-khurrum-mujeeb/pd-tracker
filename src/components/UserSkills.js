import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
   View,
   StyleSheet,
   Image,
   Text,
   StatusBar
 } from 'react-native';

import {
   TopCard,
   BottomCard,
   Background,
   InputWithImage,
   LargeButton,
   ErrorMessage,
   Spinner
  } from './common';

import styles from '../styles';
import strings from '../strings';

export class UserSkills extends Component {

  static propTypes = {
  };

  static navigationOptions = () => ({
   title: 'Chat with Victor',
 });

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
      <View style={styles.container}>
        {this.displayErrorMessage()}
        {this.displaySpinner()}
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

  render() {
    return (
       <Background>
         <StatusBar hidden />
         <TopCard>
           <View style={styles.titleContainer}>
             <Text style={styles.titleStyle}> Skills </Text>
           </View>
           <View style={localStyles.topImageContainer}>
             <Image
             source={require('../assets/images/profile.png')}
             style={localStyles.profileImageStyle}
             />
           <View style={localStyles.currentProjectContainer}>
             <Text style={localStyles.currentProjectTitleStyle}> Current Project: </Text>
             <Text style={localStyles.currentProjectStyle}> FordPass - iOS </Text>
           </View>
          </View>
        </TopCard>
         <BottomCard>

        </BottomCard>
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
    profileImageStyle: {
      width: 165,
      height: 165,
      resizeMode: 'contain',
  },
    currentProjectContainer: {
      marginTop: 5,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    currentProjectTitleStyle: {
      backgroundColor: 'transparent',
      fontFamily: 'Avenir Next',
      fontSize: 20,
      color: '#008774',
      fontWeight: '500'
    },
    currentProjectStyle: {
      backgroundColor: 'transparent',
      fontFamily: 'Avenir Next',
      fontSize: 20,
      color: '#008774'
    }

});

export default UserSkills;
