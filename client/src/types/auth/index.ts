export interface Auth {
  token: string;
}

export interface AuthState {
  token: string;
}

export const AUTH_LOGIN_USER = 'AUTH_LOGIN_USER';
export const AUTH_LOGIN_USER_SUCCESS = 'AUTH_LOGIN_USER_SUCCESS';
export const AUTH_LOGIN_USER_FAIL = 'AUTH_LOGIN_USER_FAIL';

export const AUTH_REGISTRATION_USER = 'AUTH_REGISTRATION_USER';
export const AUTH_REGISTRATION_USER_SUCCESS = 'AUTH_REGISTRATION_USER_SUCCESS';
export const AUTH_REGISTRATION_USER_FAIL = 'AUTH_REGISTRATION_USER_FAIL';

export const AUTH_LOGOUT_USER = 'AUTH_LOGOUT_USER';

interface AuthLoginUserAction {
  type: typeof AUTH_LOGIN_USER;
}
interface AuthLoginUserSuccessAction {
  type: typeof AUTH_LOGIN_USER_SUCCESS;
  token: string;
}
interface AuthLoginUserFailAction {
  type: typeof AUTH_LOGIN_USER_FAIL;
  err: Error;
}

interface AuthRegistrationUserAction {
  type: typeof AUTH_REGISTRATION_USER;
}
interface AuthRegistrationUserSuccessAction {
  type: typeof AUTH_REGISTRATION_USER_SUCCESS;
  token: string;
}
interface AuthRegistrationUserFailAction {
  type: typeof AUTH_REGISTRATION_USER_FAIL;
  err: Error;
}

interface AuthLogoutUserAction {
  type: typeof AUTH_LOGOUT_USER;
}

export type AuthActionType = AuthLoginUserAction |
AuthLoginUserSuccessAction |
AuthLoginUserFailAction |
AuthRegistrationUserAction |
AuthRegistrationUserSuccessAction |
AuthRegistrationUserFailAction |
AuthLogoutUserAction;
