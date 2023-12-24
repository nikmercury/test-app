import { StyleSheet } from 'react-native';

import { gaps } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    margin: gaps.xl,
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  modalBackground: {
    backgroundColor: 'black',
  },
  modalContainer: {},
  text: {
    color: 'white',
    textAlign: 'center',
  },
  companyName: {
    fontSize: 18,
    marginBottom: gaps.m,
  },
  title: {
    marginBottom: gaps.l,
    fontWeight: 'bold',
    fontSize: 22,
  },
  salary: {
    fontSize: 20,
  },
  description: {
    marginTop: gaps.xl,
    fontSize: 20,
  },
  infoContainer: {},
});
