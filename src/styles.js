import { StyleSheet } from 'react-native';

const fontFamily = 'Avenir Next';
export default StyleSheet.create({
  h1: {
    fontSize: 22,
  },
  h2: {
    fontSize: 22,
  },
  h3: {
    fontSize: 18,
  },
  h4: {
    fontSize: 16,
  },
  titleContainer: {
    flex: 0.20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    backgroundColor: 'transparent',
    fontFamily,
    fontSize: 22,
    color: '#008774',
    fontWeight: '300',
  },
  font1Regular: {
    fontFamily: 'Avenir Next'
  }
});
