import { all, call, put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { fetchZipcodeInfo } from '../../services/api';
import { zipcodeSlice } from './zipcode.reducer';

export function* getZipcodeInfoSaga(
  action: ReturnType<typeof zipcodeSlice.actions.getZipcodeInfo>,
): SagaIterator {
  try {
    const zipcodeInfo = yield call(fetchZipcodeInfo, action.payload.code);
    yield put(
      zipcodeSlice.actions.getZipcodeInfoSuccess({
        code: action.payload.code,
        info: zipcodeInfo,
      }),
    );
  } catch (error) {
    yield put(
      zipcodeSlice.actions.getZipcodeInfoFailure({ error: error.message }),
    );
  }
}

// Watchers
function* watchZipcodeInfo() {
  yield takeLatest(
    zipcodeSlice.actions.getZipcodeInfo.type,
    getZipcodeInfoSaga,
  );
}

/**
 * Zipcode Sagas
 */
function* zipcodeSaga() {
  yield all([watchZipcodeInfo()]);
}

export default zipcodeSaga;
