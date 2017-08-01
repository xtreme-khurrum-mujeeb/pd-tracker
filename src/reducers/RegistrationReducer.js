import {
  REG_EMAIL_CHANGED,
  REG_PASSWORD_CHANGED,
  REG_CONFIRM_PASSWORD_CHANGED,
  PENDING
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  confirmPassword: '',
  user: null,
  error: false,
 };

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case PENDING:
      return { ...state, error: false };
    case REG_EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case REG_PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case REG_CONFIRM_PASSWORD_CHANGED:
        return { ...state, confirmPassword: action.payload };
    // case LOGIN_USER_SUCCESS:
    //   return { ...state, user: action.payload, ...INITIAL_STATE };
    // case LOGIN_USER_FAIL:
    //   return { ...state, error: true, password: '' };
    default:
      return state;
  }
};
