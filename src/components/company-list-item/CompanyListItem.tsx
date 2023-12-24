import { Pressable, PressableProps, Text, View } from 'react-native';

import { Company } from '../../api/companies/get-companies.types';

import styles from './company-list-item.styles';

type CompanyListItemProps = Company & Pick<PressableProps, 'onPress'>;

export const CompanyListItem = (props: CompanyListItemProps) => {
  const { name, vacancy, onPress } = props;
  const { title, salary } = vacancy;

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.companyName}>{name}</Text>
      <View style={styles.vacancyInfo}>
        <Text style={styles.vacancyTitle}>{title}</Text>
        <Text style={styles.salaryText}>{salary}</Text>
      </View>
    </Pressable>
  );
};
