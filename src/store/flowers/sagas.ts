import axios, { AxiosResponse } from 'axios';
import { compose, identity, ifElse, isNil, path, prop } from 'ramda';
import { takeLatest } from 'redux-saga/effects';

import { environment } from '../../environment';
import { putEffect } from '../../shared/utils/putEffect';
import { tryCatchAsync } from '../../shared/utils/tryCatchAsync';
import { setFlowersAction, setFlowersApiErrorAction } from './actions';
import { flowersEndPoint } from './consts';
import { Flower, GET_FLOWERS } from './types';

type FlowersResponse = AxiosResponse<{
  flowers: Flower[];
}>;

const getFlowers = (url: string): Promise<FlowersResponse> => axios.get(url);

const setError = compose(putEffect, setFlowersApiErrorAction);
const setFlowers = compose(putEffect, compose(setFlowersAction, path(['data', 'flowers'])));

const makeApiRequest = tryCatchAsync(getFlowers, identity);
const handleResponse = ifElse(compose(isNil, prop('data')), setError, setFlowers);

function* fetchFlowers() {
  yield handleResponse(yield makeApiRequest(`${environment.apiUrl}/${flowersEndPoint}`));
}

export function* getFlowersWatcher() {
  yield takeLatest(GET_FLOWERS, fetchFlowers);
}
