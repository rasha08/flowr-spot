import { StorageKeys } from '../../shared/enums/StorageKeys';
import { removeFromLocalStorage } from '../../shared/utils/storage';
import {
  GET_USER_DATA,
  GetUserDataAction,
  LOGIN_USER,
  LOGOUT_USER,
  LoginPayload,
  LoginUserAction,
  LogoutUserAction,
  REGISTER_USER,
  RegisterPayload,
  RegisterUserAction,
  SET_REGISTRATION_STATUS,
  SET_USER_DATA,
  SET_USER_ERROR,
  SetRegistrationStatusAction,
  SetUserDataAction,
  SetUserErrorAction,
  UserData,
} from './types';

export const loginUserAction: (credentials: LoginPayload) => LoginUserAction = credentials => ({
  type: LOGIN_USER,
  payload: credentials,
});

export const registerUserAction: (credentials: RegisterPayload) => RegisterUserAction = credentials => ({
  type: REGISTER_USER,
  payload: credentials,
});

export const getUserDataAction: () => GetUserDataAction = () => ({
  type: GET_USER_DATA,
  payload: null,
});

export const setUserErrorAction: (error?: string | null) => SetUserErrorAction = error => ({
  type: SET_USER_ERROR,
  payload: error || null,
});

export const setUserDataAction: (data?: UserData) => SetUserDataAction = data => ({
  type: SET_USER_DATA,
  payload: data,
});

export const setRegistrationStatusAction: (token?: string) => SetRegistrationStatusAction = token => ({
  type: SET_REGISTRATION_STATUS,
  payload: token || '',
});

export const logoutUserAction: () => LogoutUserAction = () => {
  removeFromLocalStorage(StorageKeys.Token);
  return {
    type: LOGOUT_USER,
    payload: null,
  };
};
