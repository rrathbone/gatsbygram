import * as types from './actionTypes'
import { beginAjaxCall } from './ajaxStatusActions'
import marketApi from '../api/marketApi'

export function loadMarketsSuccess(markets) {
  return {type: types.LOAD_MARKETS_SUCCESS, markets};
}

export function loadMarkets() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return marketApi.getAllMarkets().then(markets => {
      dispatch(loadMarketsSuccess(markets));
    }).catch(error => {
      throw(error);
    });
  };
}
