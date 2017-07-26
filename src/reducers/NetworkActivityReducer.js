import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  PENDING
} from '../actions/types';

const INITIAL_STATE = {
  loading: false
 };

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case PENDING:
      return { loading: true };
    case LOGIN_USER_SUCCESS:
      return { ...INITIAL_STATE };
    case LOGIN_USER_FAIL:
      return { loading: false };
    default:
      return state;
  }
};
