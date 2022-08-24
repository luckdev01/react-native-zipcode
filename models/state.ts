import { CombinedState } from 'redux';
import { ZipcodeState } from './zipcode';

export type State = CombinedState<{
  zipcode: ZipcodeState;
}>;
