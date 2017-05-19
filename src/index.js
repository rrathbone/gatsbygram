import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import reduxThunk from 'redux-thunk'
import ReduxPromise from 'redux-promise'

import { AUTH_USER } from './actions/actionTypes'
import reducers from './reducers'

import { fetchCodes } from './actions/verificationActions'
import { loadMarkets } from './actions/marketActions'
import { loadUsers } from './actions/authActions'

const createStoreWithMiddleware = applyMiddleware(reduxThunk, ReduxPromise)(createStore)
const store = createStoreWithMiddleware(reducers)
store.dispatch(loadMarkets())
store.dispatch(loadUsers())
store.dispatch(fetchCodes())

const token = localStorage.getItem('token')

if(token) {
  // We beed to update application state
  store.dispatch({ type: AUTH_USER })
}

// <IndexRoute component={Welcome}/>
ReactDOM.render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}>
    </Router>
  </Provider>,
  document.querySelector('.container')
)
