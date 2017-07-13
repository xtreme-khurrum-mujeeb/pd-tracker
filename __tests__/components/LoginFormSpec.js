import 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { LoginForm } from '../../src/components/LoginForm';
import strings from '../../src/strings';

const errorMessage = strings.invalidCredentials;
let initialState;
let subject;
let emailChanged;
let passwordChanged;
let loginUser;
let registerUser;

beforeEach(() => {
  initialState = {
      email: 'test@email.ca',
      password: 'password123',
      error: false,
      loading: false,
  };
});

it('should render the LoginForm', () => {
  const tree = renderer.create(<LoginForm {...initialState} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should pass text in the email field to InputWithImage', () => {
  subject = shallow(<LoginForm {...initialState} />);
  expect(subject.find('InputWithImage').at(0).prop('value')).toContain('test@email.ca');
});

it('should pass in the password field to InputWithImage', () => {
  subject = shallow(<LoginForm {...initialState} />);
  expect(subject.find('InputWithImage').at(1).prop('value')).toContain('password123');
});

it('should be a secureTextEntry on the password field', () => {
  subject = shallow(<LoginForm {...initialState} />);
  expect(subject.find('InputWithImage').at(1).prop('secureTextEntry')).toBeTruthy();
});

it('should not display an error message on intial launch', () => {
  initialState.error = false;
  subject = shallow(<LoginForm {...initialState} />);
  expect(subject.find('ErrorMessage').exists()).toBeFalsy();
});

it('should display an error message with invalid credentials', () => {
  initialState.error = true;
  subject = shallow(<LoginForm {...initialState} />);
  expect(subject.find('ErrorMessage').at(0).prop('message')).toContain(errorMessage);
});

it('should not display a spinner when not in the loading state', () => {
  initialState.loading = false;
  subject = shallow(<LoginForm {...initialState} />);
  expect(subject.find('Spinner').exists()).toBeFalsy();
});

it('should display a spinner when in the loading state', () => {
  initialState.loading = true;
  subject = shallow(<LoginForm {...initialState} />);
  expect(subject.find('Spinner').exists()).toBeTruthy();
});
