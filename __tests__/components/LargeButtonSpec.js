import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import LargeButton from '../../src/components/LargeButton';

describe('LargeButton', () => {
  let onPress;
  let initialState;

  beforeEach(() => {
    onPress = jest.fn();
    initialState = {
      onPress,
      name: 'some text',
    };
  });

  it('renders the text', () => {
    const tree = renderer.create(
      <LargeButton {...initialState} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls onPress when clicking the button', () => {
    let subject = shallow(<LargeButton {...initialState} />);
    subject.find('TouchableOpacity').simulate('press');
    expect(onPress.mock.calls.length).toEqual(1);
  });
});
