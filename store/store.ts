import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const reduxSagaMonitorOptions = {};
const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({ thunk: false }),
    ...middlewares,
    logger,
  ],
});

sagaMiddleware.run(rootSaga);

export default store;
