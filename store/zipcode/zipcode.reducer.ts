import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { ZipcodeInfo } from '../../models/zipcode';

export const zipcodeAdapter = createEntityAdapter<{
  code: string;
  info: ZipcodeInfo;
}>({
  selectId: zipcode => zipcode.code,
  sortComparer: (a, b) => a.code.localeCompare(b.code),
});

export const zipcodeSlice = createSlice({
  name: 'zipcode',
  initialState: zipcodeAdapter.getInitialState({
    loading: false,
    error: null,
  }),
  reducers: {
    getZipcodeInfo: (state, _action: PayloadAction<{ code: string }>) => {
      state.loading = true;
      state.error = null;
    },
    getZipcodeInfoSuccess: (
      state,
      action: PayloadAction<{ code: string; info: ZipcodeInfo }>,
    ) => {
      zipcodeAdapter.upsertOne(state, action.payload);
      state.loading = false;
    },
    getZipcodeInfoFailure: (state, action: PayloadAction<{ error: any }>) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export default zipcodeSlice.reducer;
