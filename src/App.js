import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
import BottomCard from './components/BottomCard';
import Background from './components/Background';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    const config = {
       apiKey: 'AIzaSyBOIKzB8_fRHOxftEGszW81Yu7uQ_0uSNk',
       authDomain: 'manager-ff19d.firebaseapp.com',
       databaseURL: 'https://manager-ff19d.firebaseio.com',
       projectId: 'manager-ff19d',
       storageBucket: 'manager-ff19d.appspot.com',
       messagingSenderId: '460019027980'
   };
   firebase.initializeApp(config);
}
  render() {
    const store = createStore(reducers);
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}


export default App;
