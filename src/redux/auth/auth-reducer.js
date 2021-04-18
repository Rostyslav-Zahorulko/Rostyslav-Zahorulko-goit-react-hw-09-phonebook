import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { authActions } from '../auth';

const {
  registerSuccess,
  registerError,
  loginSuccess,
  loginError,
  logoutSuccess,
  logoutError,
  getCurrentUserSuccess,
  getCurrentUserError,
} = authActions;

const initialUserState = { name: null, email: null };

const userReducer = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const isAuthenticatedReducer = createReducer(false, {
  [registerSuccess]: () => true,
  [registerError]: () => false,
  [loginSuccess]: () => true,
  [loginError]: () => false,
  [logoutSuccess]: () => false,
  [logoutError]: () => true,
  [getCurrentUserSuccess]: () => true,
  [getCurrentUserError]: () => false,
});

const tokenReducer = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const errorReducer = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,
});

const authReducer = combineReducers({
  user: userReducer,
  isAuthenticated: isAuthenticatedReducer,
  token: tokenReducer,
  error: errorReducer,
});

export default authReducer;
