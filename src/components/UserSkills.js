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
   Title,
   Pill
  } from './common';

import styles from '../styles';
import colors from '../colors';

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
               <Text style={[localStyles.currentProjectTitle, styles.h2]}>
                 Current Project:
               </Text>
               <Text style={[localStyles.currentProject, styles.h3]}>
                FordPass - iOS
               </Text>
             </View>
          </View>
        </TopCard>

        <BottomCard>
          <View style={localStyles.bottomProfileContainer} >
            <View style={localStyles.wrapper} >
              <View style={{ flex: 0.5 }}>
                <Text style={[styles.h1, localStyles.skillSectionTitle]}> Desired Skills </Text>
                <View style={localStyles.skillsContainer}>
                  <Pill> iOS </Pill>
                  <Pill> Javascript </Pill>
                  <Pill> Consulting </Pill>
                  <Pill> React Native </Pill>
                  <Pill> Angular JS </Pill>
                </View>
              </View>
              <View style={{ flex: 0.5 }}>
                <Text style={[styles.h1, localStyles.skillSectionTitle]}> Current Skills </Text>
                  <View style={localStyles.skillsContainer}>
                    <Pill> iOS </Pill>
                    <Pill> Exploratory Testing </Pill>
                    <Pill> EarlGrey  </Pill>
                  </View>
              </View>
            </View>
          </View>

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
    currentProjectTitle: {
      backgroundColor: colors.transparent,
      color: colors.text_green
    },
    currentProject: {
      backgroundColor: colors.transparent,
      color: colors.text_green
    },
    bottomProfileContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    wrapper: {
      flex: 1,
      paddingVertical: 20,
      paddingHorizontal: 20,
    },
    skillSectionTitle: {
      color: colors.text_white
    },
    skillsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingLeft: 2
    }

});

export default UserSkills;
