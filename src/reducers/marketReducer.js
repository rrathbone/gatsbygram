import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function marketReducer(state = initialState.markets, action) {
  switch (action.type) {
      case types.LOAD_MARKETS_SUCCESS:
      return action.markets

    default:
      return state
  }
}
