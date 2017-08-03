import {
  REG_EMAIL_CHANGED,
  REG_PASSWORD_CHANGED,
  REG_CONFIRM_PASSWORD_CHANGED,
  PENDING,
  REG_PASSWORD_MATCH,
  REG_PASSWORD_UNMATCH
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  confirmPassword: '',
  passwordMatch: true,
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
    case REG_PASSWORD_MATCH:
      return { ...state, passwordMatch: true };
    case REG_PASSWORD_UNMATCH:
        return { ...state, passwordMatch: false };
    default:
      return state;
  }
};
