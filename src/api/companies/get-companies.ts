import { Company } from '.';
import { fetchData } from '../../helpers';
import endpoints from '../endpoints';

export const fetchCompanies = () => {
  return fetchData<Company[]>(endpoints.getCompanies, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
};
