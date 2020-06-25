import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import { combineWatchers } from '../shared/utils/conbineWatchers';
import { flowersReducer } from './flowers/reducer';
import { getFlowersWatcher } from './flowers/sagas';
import { FlowersState } from './flowers/types';
import { modalReducer } from './modal/reducer';
import { ModalState } from './modal/types';
import { themeReducer } from './theme/reducer';
import { AppTheme } from './theme/types';
import { userReducer } from './users/reducer';
import { userSagas } from './users/sagas';
import { UserState } from './users/types';

export function* rootSaga() {
  yield all(combineWatchers(getFlowersWatcher, userSagas));
}

const sagaMiddleware = createSagaMiddleware();

export type StoreState = {
  flowers: FlowersState;
  theme: AppTheme;
  modal: ModalState;
  user: UserState;
};

export const store = createStore(
  combineReducers({ flowers: flowersReducer, theme: themeReducer, modal: modalReducer, user: userReducer }),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);
