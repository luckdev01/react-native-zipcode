import { all } from 'redux-saga/effects';

import zipcodeSaga from './zipcode/zipcode.saga';

export default function* rootSaga() {
  yield all([zipcodeSaga()]);
}
