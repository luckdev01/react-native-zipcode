import { zipcodeSlice } from './zipcode.reducer';

export function getZipcodeInfo(code: string) {
  return zipcodeSlice.actions.getZipcodeInfo({
    code,
  });
}
