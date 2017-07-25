import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
   View,
   StyleSheet,
   Text,
   StatusBar,
 } from 'react-native';

import {
   TopCard,
   BottomCard,
   Background,
   ProfileImage,
   IconButton,
   Title
  } from './common';

import styles from '../styles';
import colors from '../colors';
import strings from '../strings';

export class UserSkills extends Component {

  render() {
    return (
       <Background>
         <StatusBar hidden />
         <TopCard>
           <Title> Skills </Title>
           <IconButton
             imageSource={require('../assets/images/settings.png')}
             style={{ alignSelf: 'flex-end' }}
           />
           <View style={localStyles.topProfileContainer}>
             <ProfileImage source={require('../assets/images/profile.png')} />
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
    topProfileContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
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
