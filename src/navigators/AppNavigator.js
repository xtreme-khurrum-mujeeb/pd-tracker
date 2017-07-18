import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import {
   StyleSheet,
 } from 'react-native';

import LoginForm from '../components/LoginForm';
import UserSkills from '../components/UserSkills';


export const AppNavigator = StackNavigator({
  Login: {
    screen: LoginForm,
    navigationOptions: { header: null }
  },
  User: {
    screen: UserSkills,
    navigationOptions: {
      headerTintColor: '#036457',
      headerStyle: { backgroundColor: '#B1F6FA' },
      header: null
    }
  }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

const styles = StyleSheet.create({
  headerBackgroundStyle: {
    backgroundColor: '#036457'
  }
});

export default connect(mapStateToProps)(AppWithNavigationState);
