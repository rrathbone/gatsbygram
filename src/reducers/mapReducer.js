import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function mapReducer(state = initialState.zoom, action) {
  switch (action.type) {
    case types.INITIAL_MAP_ZOOM_LEVEL:
      return action.zoom;

    default:
      return state;
  }
}
