import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  REG_EMAIL_CHANGED,
  REG_PASSWORD_CHANGED,
  REG_CONFIRM_PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_FAIL,
  PENDING,
  EMPLOYEES_FETCH_SUCCESS,
  COMPLETE
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const regEmailChanged = (text) => {
  return {
    type: REG_EMAIL_CHANGED,
    payload: text
  };
};

export const regPasswordChanged = (text) => {
  return {
    type: REG_PASSWORD_CHANGED,
    payload: text
  };
};

export const regConfirmPasswordChanged = (text) => {
  return {
    type: REG_CONFIRM_PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: PENDING });
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => loginUserFail(dispatch));
  };
};

export const registerUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: PENDING });
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {
      dispatch({ type: REGISTER_USER_SUCCESS, payload: user });
      loginUserSuccess(dispatch, user);
      dispatch({ type: COMPLETE });
    })
    .catch(() => loginUserFail(dispatch));
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main({ type: 'reset' });
};

//Employee Creation Below
export const employeeCreate = ({
   name,
   currentProject,
   desiredSkills,
   currentSkills,
   isManager,
   employeeList
 }) => {
   const { currentUser } = firebase.auth();
   console.log('Pushing info');
   return () => {
     firebase.database().ref(`/users/${currentUser.uid}/`)
      .push({ name,
      currentProject,
      desiredSkills,
      currentSkills,
      isManager,
      employeeList });
   };
 };

export const employeesFetch = () => {
  console.log('In employeesFetch');
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    dispatch({ type: PENDING });
    firebase.database().ref(`/users/${currentUser.uid}/`)
      .on('child_added', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
        dispatch({ type: COMPLETE });
      });
  };
};
