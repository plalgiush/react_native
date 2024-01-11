import {StyleSheet} from 'react-native';

export const stylesButton = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 60,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonBackground: {
    backgroundColor: '#fff',
  },
  buttonPrimaryColor: {
    color: '#25292e',
  },
  buttonSecondaryColor: {
    color: '#00716F',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 18,
    textTransform: 'uppercase',
  },
});
