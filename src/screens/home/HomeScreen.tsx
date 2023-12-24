import { useCallback, useEffect } from 'react';
import { FlatList, SafeAreaView } from 'react-native';

import { Company } from '../../api/companies';
import { CompaniesListHeader, CompanyListItem } from '../../components';
import { useAppDispatch, useAppSelector } from '../../helpers';
import { companiesList, getCompanies } from '../../stores/companies';

import { styles } from './home-screen.styles';

const ITEMS_REFETCH_TIMEOUT = 30000;

const keyExtractor = (item: Company, index: number) => `${item.name}_${index}`;

export const HomeScreen = () => {
  const companies = useAppSelector(companiesList);
  const dispatch = useAppDispatch();

  const renderItem = useCallback(
    ({ item }: { item: Company }) => <CompanyListItem {...item} />,
    [],
  );

  useEffect(() => {
    dispatch(getCompanies());
    const timerId = setTimeout(() => dispatch(getCompanies()), ITEMS_REFETCH_TIMEOUT);
    return () => clearTimeout(timerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView>
      <CompaniesListHeader />
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={companies}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};
