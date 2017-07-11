import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  PENDING
} from '../actions/types';

const INITIAL_STATE = {
  email: 'test@test.ca',
  password: 'test123',
  user: null,
  error: false,
  loading: false
 };

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case PENDING:
      return { ...state, loading: true, error: false };
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, ...INITIAL_STATE };
    case LOGIN_USER_FAIL:
      return { ...state, error: true, password: '', loading: false };
    default:
      return state;
  }
};
