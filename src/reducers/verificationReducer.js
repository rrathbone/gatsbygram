import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function verificationReducer(state = initialState.codes, action) {
  switch (action.type) {
    case types.FETCH_CODES_SUCCESS:
      return action.codes;

    default:
      return state;
  }
}
