import { StyleSheet } from 'react-native';

export const stylesLoginForm = StyleSheet.create({
  Container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    paddingHorizontal: 8,
  },
  Field: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  errorInput: {
    borderColor: 'red',
  },
});
