import * as types from './actionTypes'
import verificationApi from '../api/verificationApi'
import { beginAjaxCall } from './ajaxStatusActions'

export function fetchCodesSuccess(codes) {
  return { type: types.FETCH_CODES_SUCCESS, codes}
}

export function fetchCodes() {
  return function(dispatch) {
    dispatch(beginAjaxCall())
    return verificationApi.getRandomCode().then(codes => {
      dispatch(fetchCodesSuccess(codes))
    }).catch(error => {
      throw(error)
    })
  }
}
