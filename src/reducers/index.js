import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import ajaxCallsInProgress from './ajaxStatusReducer'
import auth from './authReducer'
import codes from './verificationReducer'
import markets from './marketReducer'
import users from './userReducer'
import zoom from './mapReducer'

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  auth,
  codes,
  form,
  markets,
  users,
  zoom
});

export default rootReducer;
