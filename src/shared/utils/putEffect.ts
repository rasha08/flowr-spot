import { put } from 'redux-saga/effects';

import { SagasPutEffect } from '../types/SagasPutEffect';

export const putEffect: SagasPutEffect = action => put(action);
