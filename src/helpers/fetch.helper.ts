import { API_URL, API_VERSION } from '@env';

export const fetchData = async <T>(endpoint: string, config?: RequestInit): Promise<T> => {
  try {
    const response = await fetch(`${API_URL}${API_VERSION}/${endpoint}`, config);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
