import { EntityState } from '@reduxjs/toolkit';

export type ZipcodeInfo = {
  [key: string]: any;
};

export type ZipcodeEntity = {
  code: string;
  info: ZipcodeInfo;
};

export type ZipcodeState = EntityState<{
  code: string;
  info: ZipcodeInfo;
}> & {
  loading: boolean;
  error: null;
};
