import axios, { AxiosResponse } from 'axios';
import { compose, identity, ifElse, isNil, path, tap } from 'ramda';
import { takeLatest } from 'redux-saga/effects';

import { environment } from '../../environment';
import { StorageKeys } from '../../shared/enums/StorageKeys';
import { putEffect } from '../../shared/utils/putEffect';
import { getValueForKeyInLocalStorage, storeInLocalStorage } from '../../shared/utils/storage';
import { tryCatchAsync } from '../../shared/utils/tryCatchAsync';
import { getUserDataAction, setRegistrationStatusAction, setUserDataAction, setUserErrorAction } from './actions';
import { loginEndpoint, meEndPoint, registerEndpoint } from './consts';
import { GET_USER_DATA, LOGIN_USER, LoginUserAction, REGISTER_USER, RegisterUserAction, UserData } from './types';

type UserResponse = AxiosResponse<UserData>;
type AuthResponse = AxiosResponse<{ auth_token: string; error?: string }>;

const authUser = <T>(url: string) => (payload: T): Promise<AuthResponse> => axios.post(url, payload);
const getMe = (url: string) => (): Promise<UserResponse> =>
  axios.get(url, { headers: { authorization: getValueForKeyInLocalStorage(StorageKeys.Token) } });

const storeTokenInLocalStorage = (token?: string) => storeInLocalStorage(StorageKeys.Token, token);
const makeApiRequest = (isAuth: boolean) => (url: string) =>
  tryCatchAsync(ifElse(() => isAuth, authUser, getMe)(url), identity);

const handleError = compose(putEffect, setUserErrorAction, path(['data', 'error']));
const checkForError = compose(isNil, path(['data', 'error']));
const handlerResponse = (onSuccess: (data: AxiosResponse) => void) => ifElse(checkForError, onSuccess, handleError);

const handleRegisterResponse = handlerResponse(
  compose(putEffect, setRegistrationStatusAction, path(['data', 'auth_token'])),
);

const handleLoginResponse = handlerResponse(
  compose(putEffect, getUserDataAction, tap(storeTokenInLocalStorage), path(['data', 'auth_token'])),
);

const handleUserDataResponse = handlerResponse(compose(putEffect, setUserDataAction, path(['data', 'user'])));

function* loginUser(action: LoginUserAction) {
  const login = makeApiRequest(true)(`${environment.apiUrl}/${loginEndpoint}`);
  yield handleLoginResponse(yield login(action.payload));
}

function* registerUser(action: RegisterUserAction) {
  const register = makeApiRequest(true)(`${environment.apiUrl}/${registerEndpoint}`);
  yield handleRegisterResponse(yield register(action.payload));
}

function* getUser() {
  const fetchUserData = makeApiRequest(false)(`${environment.apiUrl}/${meEndPoint}`);
  yield handleUserDataResponse(yield fetchUserData());
}

function* getLoginWatcher() {
  yield takeLatest(LOGIN_USER, loginUser);
}

function* getRegisterWatcher() {
  yield takeLatest(REGISTER_USER, registerUser);
}

function* getUserDataWatcher() {
  yield takeLatest(GET_USER_DATA, getUser);
}

export const userSagas = [getLoginWatcher, getRegisterWatcher, getUserDataWatcher];
