import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeReducer from './EmployeeReducer';
import NetworkActivityReducer from './NetworkActivityReducer';
import RegistrationReducer from './RegistrationReducer';

export default combineReducers({
  auth: AuthReducer,
  employee: EmployeeReducer,
  network: NetworkActivityReducer,
  reg: RegistrationReducer

});
