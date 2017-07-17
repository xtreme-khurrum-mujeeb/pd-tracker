import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import AppWithNavigationState from './navigators/AppNavigator';


class App extends Component {

  componentWillMount() {
    const config = {
       apiKey: 'AIzaSyANCO7WB1UAFee30BIgrnBDrWzw7G66XGA',
       authDomain: 'pd-tracker-bdffa.firebaseapp.com',
       databaseURL: 'https://pd-tracker-bdffa.firebaseio.com',
       projectId: 'pd-tracker-bdffa',
       storageBucket: 'pd-tracker-bdffa.appspot.com',
       messagingSenderId: '431212850324'
   };
   firebase.initializeApp(config);
}
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}


export default App;
