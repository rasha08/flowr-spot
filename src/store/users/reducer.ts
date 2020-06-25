import { StorageKeys } from '../../shared/enums/StorageKeys';
import { getValueForKeyInLocalStorage } from '../../shared/utils/storage';
import {
  GET_USER_DATA,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  SET_REGISTRATION_STATUS,
  SET_USER_DATA,
  SET_USER_ERROR,
  UserData,
  UserReducer,
  UserState,
} from './types';

const initialUserData: UserData = {
  first_name: '',
  last_name: '',
  date_of_birth: '',
  profile_picture: '',
  email: '',
};

const initialUsersState: UserState = {
  authenticated: !!getValueForKeyInLocalStorage(StorageKeys.Token),
  data: initialUserData,
  error: null,
  loading: false,
  registrationSuccess: false,
};

export const userReducer: UserReducer = (state = initialUsersState, action) => {
  switch (action.type) {
    case GET_USER_DATA:
    case LOGIN_USER:
    case REGISTER_USER: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case SET_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_USER_DATA:
      return {
        ...state,
        loading: false,
        error: null,
        authenticated: !!action.payload,
        data: action.payload || initialUserData,
      };
    case SET_REGISTRATION_STATUS:
      return {
        ...state,
        loading: false,
        error: null,
        registrationSuccess: !!action.payload,
      };
    case LOGOUT_USER:
      return { ...initialUsersState, authenticated: false };
    default:
      return state;
  }
};
