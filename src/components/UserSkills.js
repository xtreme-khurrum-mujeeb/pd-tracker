import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
   View,
   StyleSheet,
   Image,
   Text,
   StatusBar,
   TouchableOpacity
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
import colors from '../colors';
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
             <TouchableOpacity
               style={localStyles.settingsImageContainer}
               activeOpacity={0.5}
             >
              <Image
                 source={require('../assets/images/settings.png')}
                 style={localStyles.settingsImageStyle}
              />
            </TouchableOpacity>
           <View style={localStyles.topImageContainer}>
             <Image
             source={require('../assets/images/profile.png')}
             style={localStyles.profileImageStyle}
             />
           <View style={localStyles.currentProjectContainer}>
             <Text style={[localStyles.currentProjectTitleStyle, styles.h2]}>
               Current Project:
             </Text>
             <Text style={[localStyles.currentProjectStyle, styles.h3]}>
                FordPass - iOS
             </Text>
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
    settingsImageContainer: {
      flex: 0.10,
      width: 25,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignSelf: 'flex-end',
      marginRight: '5%'
    },
    settingsImageStyle: {
      width: 25,
      height: 25,
      resizeMode: 'contain',
    },
    currentProjectContainer: {
      marginTop: 5,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    currentProjectTitleStyle: {
      backgroundColor: colors.transparent,
      color: colors.text_green
    },
    currentProjectStyle: {
      backgroundColor: colors.transparent,
      color: colors.text_green
    }

});

export default UserSkills;
