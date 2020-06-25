import { ReduxAction } from '../../shared/types/ReduxAction';
import { ReduxReducer } from '../../shared/types/ReduxReducer';

export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const GET_USER_DATA = 'GET_USER_DATA';
export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_USER_ERROR = 'SET_USER_ERROR';
export const SET_REGISTRATION_STATUS = 'SET_REGISTRATION_STATUS';
export const LOGOUT_USER = 'LOGOUT_USER';

export type UserData = {
  first_name: string;
  last_name: string;
  profile_picture: string;
  date_of_birth: string;
  email: string;
};

export type UserState = {
  authenticated: boolean;
  data: UserData;
  error: string | null;
  loading: boolean;
  registrationSuccess: boolean;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = LoginPayload & {
  first_name: string;
  last_name: string;
  date_of_birth: string;
};

export type LoginUserAction = ReduxAction<typeof LOGIN_USER, LoginPayload>;
export type RegisterUserAction = ReduxAction<typeof REGISTER_USER, RegisterPayload>;
export type GetUserDataAction = ReduxAction<typeof GET_USER_DATA, null>;
export type SetUserDataAction = ReduxAction<typeof SET_USER_DATA, UserData | undefined>;
export type SetUserErrorAction = ReduxAction<typeof SET_USER_ERROR, string | null>;
export type SetRegistrationStatusAction = ReduxAction<typeof SET_REGISTRATION_STATUS, string>;
export type LogoutUserAction = ReduxAction<typeof LOGOUT_USER, null>;

export type UserAction =
  | LoginUserAction
  | RegisterUserAction
  | GetUserDataAction
  | SetUserDataAction
  | SetUserErrorAction
  | SetRegistrationStatusAction
  | LogoutUserAction;
export type UserReducer = ReduxReducer<UserState, UserAction>;
