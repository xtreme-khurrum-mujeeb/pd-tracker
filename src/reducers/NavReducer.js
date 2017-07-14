import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';

const initialState = {
  index: 0,
  routes: [
    { key: 'initial', routeName: 'Login' },
  ],
};

export default function navigation(state = initialState, action) {
  return AppNavigator.router.getStateForAction(action, state);
}
