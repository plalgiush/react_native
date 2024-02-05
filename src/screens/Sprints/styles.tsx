import { StyleSheet } from 'react-native';

export const stylesSprints = StyleSheet.create({
  containerSprint: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    maxWidth: 320,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 16,
    margin: 8,
  },
});
