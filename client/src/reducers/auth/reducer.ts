import {
  AuthState,
  AUTH_LOGIN_USER_SUCCESS,
  AUTH_LOGIN_USER_FAIL,
  AUTH_REGISTRATION_USER_SUCCESS,
  AUTH_REGISTRATION_USER_FAIL,
  AUTH_LOGOUT_USER,
  AuthActionType,
} from '../../types/auth';

const defaultState: AuthState = {
  token: null,
};

export const reducer = (
  state = defaultState,
  action: AuthActionType,
): AuthState => {
  switch (action.type) {
    case AUTH_LOGIN_USER_SUCCESS:
    case AUTH_REGISTRATION_USER_SUCCESS:
      return {
        ...state,
        token: action.token,
      };

    case AUTH_LOGIN_USER_FAIL:
    case AUTH_REGISTRATION_USER_FAIL:
    case AUTH_LOGOUT_USER:
      return {
        ...state,
        token: null,
      };
    default: return state;
  }
};
