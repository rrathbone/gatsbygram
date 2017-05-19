import axios from 'axios'
import { browserHistory } from 'react-router'
import * as types from './actionTypes'
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import userApi from '../api/userApi'

const ROOT_URL = 'http://localhost:3090'

export function signinUser({ email, password }) {
  return function(dispatch) {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(res => {
        // If request is good...
        // - Update state to indicate user is authenticated
        dispatch({ type: types.AUTH_USER })
        // - Save the JWT token
        localStorage.setItem('token', res.data.token)
        // - redirect to the route '/feature'
        browserHistory.push('/');
      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        dispatch(authError('Bad Login Info'))
      })
  }
}

export function signupUser({ firstName, lastName, phone, email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, { firstName, lastName, phone, email, password })
    .then(res => {
      dispatch({ type: types.AUTH_USER })
      localStorage.setItem('token', res.data.token)
      browserHistory.push('/');
    })
    .catch(res => dispatch(authError(res.data.error)))
  }
}

export function loadUsersSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users }
}

export function createUserSuccess(user) {
  return { type: types.CREATE_USER_SUCCESS, user }
}

export function updateUserSuccess(user) {
  return {type: types.UPDATE_USER_SUCCESS, user};
}

export function loadUsers() {
  return function(dispatch) {
    return userApi.getAllUsers().then(users => {
      dispatch(loadUsersSuccess(users))
    }).catch(error => {
      throw(error)
    })
  }
}

export function saveUser(user) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return userApi.saveUser(user).then(user => {
      user.id ? dispatch(updateUserSuccess(user)) :
        dispatch(createUserSuccess(user));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function authError(err) {
  return {
    type: types.AUTH_ERROR,
    payload: err
  }
}

export function signoutUser() {
  localStorage.removeItem('token')

  return { type: types.UNAUTH_USER }
}

export function fetchMessage() {
  return function(dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') }

    })
      .then(response => {
        dispatch({
          type: types.FETCH_MESSAGE,
          payload: response.data.message
        })
      })
  }
}
