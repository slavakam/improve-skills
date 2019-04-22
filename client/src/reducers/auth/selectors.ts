import { AuthState } from '../../types/auth';
import { AppState } from '../../store';

const authStateSelector = (state: AppState): AuthState => state.auth;

export const isAuthenticatedSelector = (state: AppState): boolean => {
  const token = authStateSelector(state).token;
  const localStorageToken = localStorage.getItem('token');

  if (token) return !!token;
  if (localStorageToken) return !!localStorageToken;

  return false;
};
