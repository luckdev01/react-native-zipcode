import { combineReducers } from 'redux';
import zipcode from './zipcode/zipcode.reducer';

const rootReducer = combineReducers({
  zipcode,
});

export default rootReducer;
