import {
  AUTH_LOGIN_USER,
  AUTH_LOGIN_USER_SUCCESS,
  AUTH_LOGIN_USER_FAIL,

  AUTH_REGISTRATION_USER,
  AUTH_REGISTRATION_USER_SUCCESS,
  AUTH_REGISTRATION_USER_FAIL,

  AUTH_LOGOUT_USER,

  AuthActionType,
} from '../../types/auth';
import http from '../../../axios';

export const loginUserAction = (): AuthActionType => ({
  type: AUTH_LOGIN_USER,
});
export const loginUserSuccessAction = (token: string): AuthActionType => ({
  type: AUTH_LOGIN_USER_SUCCESS,
  token,
});
export const loginUserFailAction = (err: Error): AuthActionType => ({
  type: AUTH_LOGIN_USER_FAIL,
  err,
});

export const registrationUserAction = (): AuthActionType => ({
  type: AUTH_REGISTRATION_USER,
});
export const registrationUserSuccessAction = (token: string): AuthActionType => ({
  type: AUTH_REGISTRATION_USER_SUCCESS,
  token,
});
export const registrationUserFailAction = (err: Error): AuthActionType => ({
  type: AUTH_REGISTRATION_USER_FAIL,
  err,
});

export const logoutUserAction = (): AuthActionType => {
  http.defaults.headers.common.Authorization = localStorage.getItem('token');
  localStorage.removeItem('token');
  return {
    type: AUTH_LOGOUT_USER,
  };
};
