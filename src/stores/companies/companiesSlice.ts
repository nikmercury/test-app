import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Company, fetchCompanies } from '../../api/companies';
import { RootState } from '../store';

const PAGE_SIZE = 5;

export enum ActionStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  FAILED = 'failed',
}

export interface CompaniesState {
  companies: Company[];
  paginatedCompanies: Company[];
  status: ActionStatus;
}

const initialState: CompaniesState = {
  companies: [],
  paginatedCompanies: [],
  status: ActionStatus.IDLE,
};

export const getCompanies = createAsyncThunk('companies/getCompanies', async () => {
  return await fetchCompanies();
});

export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    clearCompanies(state) {
      state.companies = [];
      state.status = ActionStatus.IDLE;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCompanies.pending, state => {
        state.status = ActionStatus.LOADING;
      })
      .addCase(getCompanies.fulfilled, (state, action: PayloadAction<Company[]>) => {
        state.status = ActionStatus.IDLE;
        state.companies = action.payload;
        state.paginatedCompanies = action.payload.slice(0, PAGE_SIZE);
      })
      .addCase(getCompanies.rejected, state => {
        state.status = ActionStatus.FAILED;
      });
  },
});

export const { clearCompanies } = companiesSlice.actions;

export const companiesList = (state: RootState) => state.companiesStore.paginatedCompanies;

export const loadingStatus = (state: RootState) => state.companiesStore.status;

export const companiesReducer = companiesSlice.reducer;
