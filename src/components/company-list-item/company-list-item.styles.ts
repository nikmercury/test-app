import { StyleSheet } from 'react-native';

import { gaps } from '../../styles';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    padding: gaps.xl,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
  },
  companyName: {
    fontWeight: 'bold',
    fontSize: 26,
    marginRight: gaps.l,
    flex: 2,
  },
  vacancyInfo: {
    alignItems: 'flex-end',
    flexShrink: 1,
    flex: 3,
  },
  vacancyTitle: {
    fontSize: 23,
    flexWrap: 'wrap',
    textAlign: 'right',
    marginBottom: gaps.m,
    height: 60,
  },
  salaryText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;
