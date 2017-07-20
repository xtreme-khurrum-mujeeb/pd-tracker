import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from '../components/LoginForm';
import UserSkills from '../components/UserSkills';

const RouterComponent = () => (
    <Router >
      <Scene
        key="auth"
        hideNavBar
        navigationBarStyle={styles.navBarStyle}
        titleStyle={styles.navBarTitleStyle}
      >
        <Scene key="login" component={LoginForm} title='Login' intial />
      </Scene>

      <Scene
        key="main"
        hideNavBar
        navigationBarStyle={styles.navBarStyle}
        titleStyle={styles.navBarTitleStyle}
        leftButtonIconStyle={styles.navBarIconStyle}
      >
        <Scene key="userSkills" component={UserSkills} initial />
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
