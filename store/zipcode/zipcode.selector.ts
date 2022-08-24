import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../models/state';
import { zipcodeAdapter } from './zipcode.reducer';

const selectZipcodeState = (state: State) => state.zipcode;

export const { selectById } = zipcodeAdapter.getSelectors(selectZipcodeState);

export const selectZipcodeInfoByCode = createSelector(
  selectById,
  zipcodeEntity => zipcodeEntity?.info,
);

export const selectZipcodeInfoLoading = createSelector(
  selectZipcodeState,
  zipcodeState => zipcodeState.loading,
);

export const selectZipcodeInfoError = createSelector(
  selectZipcodeState,
  zipcodeState => zipcodeState.error,
);
