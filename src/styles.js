import { StyleSheet } from 'react-native';

const fontFamily = 'Avenir Next';
export default StyleSheet.create({
  h1: {
    fontSize: 24,
    fontFamily
  },
  h2: {
    fontSize: 20,
    fontFamily,
    fontWeight: '500'
  },
  h3: {
    fontSize: 20,
    fontFamily
  },
  h4: {
    fontSize: 18,
    fontFamily
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
    fontSize: 24,
    color: '#008774',
    fontWeight: '300'
  }
});
