import { AuthState } from '../../types/auth';
import { AppState } from '../../store';
import http from '../../../axios';

const authStateSelector = (state: AppState): AuthState => state.auth;

export const isAuthenticatedSelector = (state: AppState): boolean => {
  const token = authStateSelector(state).token;
  const localStorageToken = localStorage.getItem('token');

  if (token) {
    http.defaults.headers.common.Authorization = token;
    return !!token;
  }
  if (localStorageToken) {
    http.defaults.headers.common.Authorization = localStorageToken;
    return !!localStorageToken;
  }
  return false;
};
