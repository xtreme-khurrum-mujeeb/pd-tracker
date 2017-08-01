import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from '../components/LoginForm';
import UserSkills from '../components/UserSkills';
import RegistrationForm from '../components/RegistrationForm';

const RouterComponent = () => (
    <Router >
      <Scene
        key="auth"
        hideNavBar
        navigationBarStyle={styles.navBarStyle}
        titleStyle={styles.navBarTitleStyle}
      >
        <Scene key="login" component={LoginForm} title='Login' initial />
        <Scene key="registration" component={RegistrationForm} title='Registration' />
      </Scene>

      <Scene
        key="main"
        hideNavBar
        navigationBarStyle={styles.navBarStyle}
        titleStyle={styles.navBarTitleStyle}
        leftButtonIconStyle={styles.navBarIconStyle}
      >
        <Scene key="userSkills" component={UserSkills} panHandlers={null} initial />
      </Scene>
    </Router>
  );

const styles = {
  navBarStyle: {
    backgroundColor: '#00AE9E'
  },
  navBarTitleStyle: {
    color: 'white'
  },
  navBarIconStyle: {
    tintColor: 'white'
  }
};

export default RouterComponent;
