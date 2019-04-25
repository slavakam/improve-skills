import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import http from '../../../axios';

import { AppState } from '../../store';
import {
  loginUserAction,
  loginUserSuccessAction,
  loginUserFailAction,

  registrationUserAction,
  registrationUserSuccessAction,
  registrationUserFailAction,
} from '../../actions/auth';
import { registration, login } from '../../api';

export const loginUserThunk = (email: string, password: string, cb: () => void):
ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  dispatch(loginUserAction());

  try {
    const { data } = await login(email, password);
    localStorage.setItem('token', data.token);
    http.defaults.headers.common.Authorization = data.token;
    dispatch(loginUserSuccessAction(data.token));
    cb();
  } catch (err) {
    dispatch(loginUserFailAction(err));
  }
};

export const registrationUserThunk = (email: string, password: string, cb: () => void):
ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  dispatch(registrationUserAction());

  try {
    const { data } = await registration(email, password);
    localStorage.setItem('token', data.token);
    http.defaults.headers.common.Authorization = data.token;
    dispatch(registrationUserSuccessAction(data.token));
    cb();
  } catch (err) {
    dispatch(registrationUserFailAction(err));
  }
};
