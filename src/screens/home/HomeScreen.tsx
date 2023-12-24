import { useCallback, useEffect, useRef } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { RefreshControl } from 'react-native-gesture-handler';

import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

import { Company } from '../../api/companies';
import { CompaniesListHeader, CompanyListItem } from '../../components';
import { useAppDispatch, useAppSelector } from '../../helpers';
import { VacancyInfoModal } from '../../modals';
import {
  ActionStatus,
  companiesList,
  getCompanies,
  loadNextPage,
  loadingStatus,
} from '../../stores/companies';

import { styles } from './home-screen.styles';

const ITEMS_REFETCH_TIMEOUT = 30000;

const keyExtractor = (item: Company, index: number) => `${item.name}_${index}`;

export const HomeScreen = () => {
  const modalRef = useRef<BottomSheetModalMethods>(null);

  const status = useAppSelector(loadingStatus);
  const companies = useAppSelector(companiesList);
  const dispatch = useAppDispatch();

  const renderItem = useCallback(
    ({ item }: { item: Company }) => (
      <CompanyListItem
        {...item}
        onPress={() => modalRef.current?.present({ companyName: item.name, vacancy: item.vacancy })}
      />
    ),
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
        initialNumToRender={5}
        onEndReachedThreshold={0.01}
        contentContainerStyle={styles.contentContainerStyle}
        data={companies}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        refreshControl={<RefreshControl refreshing={status === ActionStatus.LOADING} />}
        onEndReached={() => dispatch(loadNextPage())}
      />
      <VacancyInfoModal ref={modalRef} />
    </SafeAreaView>
  );
};
