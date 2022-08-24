import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { ZipcodeEntity } from '../../models/zipcode';

export const zipcodeAdapter = createEntityAdapter<ZipcodeEntity>({
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
    getZipcodeInfoSuccess: (state, action: PayloadAction<ZipcodeEntity>) => {
      zipcodeAdapter.upsertOne(state, action.payload);
      state.loading = false;
    },
    getZipcodeInfoFailure: (state, action: PayloadAction<{ error: any }>) => {
      console.log(action.payload.error);
      state.loading = false;
      state.error = 'Zip code invalid or not found';
    },
  },
});

export default zipcodeSlice.reducer;
