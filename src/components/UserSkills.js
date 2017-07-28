import _ from 'lodash';
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
   employeeCreate,
   employeesFetch
  } from '../actions';

import {
   TopCard,
   BottomCard,
   Background,
   ProfileImage,
   IconButton,
   Title,
   Spinner,
   Pill
  } from './common';

import styles from '../styles';
import colors from '../colors';

export class UserSkills extends Component {

  static propTypes = {
    employeeCreate: PropTypes.func,
    name: PropTypes.string,
    currentProject: PropTypes.string,
    desiredSkills: PropTypes.node,
    currentSkills: PropTypes.node,
    isManager: PropTypes.bool,
    employeeList: PropTypes.node
  };

  componentWillMount() {
    this.props.employeesFetch();
  }

  onSettingsPress() {
    //this.props.employeeCreate({ name, currentProject, desiredSkills, currentSkills, isManager, employeeList });
  }

  displaySpinner() {
    if (this.props.loading) {
      return (
        <Spinner />
      );
    }
  }

  renderPill(pillString) {
    return (
      <Pill key={pillString}> {pillString} </Pill>
    );
  }

  render() {
    console.log('In render');
    const {
      name,
      currentProject,
      desiredSkills,
      currentSkills,
      isManager,
      employeeList
    } = this.props.employee;

    return (
       <Background>
         <StatusBar hidden />
         <TopCard>
           <Title> Skills </Title>
           <IconButton
             imageSource={require('../assets/images/settings.png')}
             style={{ alignSelf: 'flex-end' }}
             onPress={this.onSettingsPress.bind(this)}
           />
           <View style={localStyles.topProfileContainer}>
             <ProfileImage source={require('../assets/images/profile.png')} />
             <View style={localStyles.currentProjectContainer}>
               <Text style={[localStyles.currentProjectTitle, styles.h2]}>
                 Current Project:
               </Text>
               <Text style={[localStyles.currentProject, styles.h3]}>
                {currentProject}
               </Text>
             </View>
          </View>
        </TopCard>

        <BottomCard>
          <View style={localStyles.bottomProfileContainer} >
            <View style={localStyles.wrapper} >
              <View style={{ flex: 0.5 }}>
                <Text style={[styles.h1, localStyles.skillSectionTitle]}>
                   Desired Skills
                 </Text>
                <View style={localStyles.skillsContainer}>
                  {desiredSkills.map((skill) => this.renderPill(skill))}
                </View>
              </View>
              <View style={{ flex: 0.5 }}>
                <Text style={[styles.h1, localStyles.skillSectionTitle]}>
                   Current Skills
                </Text>
                  <View style={localStyles.skillsContainer}>
                  {currentSkills.map((skill) => this.renderPill(skill))}
                  </View>
              </View>
            </View>
          </View>
        </BottomCard>
        {this.displaySpinner()}
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

const mapStateToProps = state => {
  //const employee = state.employee;
  return {
    employee: state.employee,
    loading: state.network.loading
  };
};

export default connect(mapStateToProps, {
  employeeCreate,
  employeesFetch
})(UserSkills);
