import { StyleSheet, Platform } from 'react-native';

let fontFamily;
if (Platform.OS === 'android') {
  fontFamily = 'sans-serif-light';
} else {
  fontFamily = 'Avenir Next';
}

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
    fontSize: 14,
    fontFamily
  },
  fontFamily: {
    fontFamily
  }
});
