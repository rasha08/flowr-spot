import { apiErrorMessage } from './consts';
import {
  Flower,
  GET_FLOWERS,
  GetFlowersAction,
  SET_FLOWERS,
  SET_FLOWERS_API_ERROR,
  SetFlowersAction,
  SetFlowersApiErrorAction,
} from './types';

export const getFlowersAction: () => GetFlowersAction = () => ({
  type: GET_FLOWERS,
  payload: null,
});

export const setFlowersAction: (flowers?: Flower[]) => SetFlowersAction = flowers => ({
  type: SET_FLOWERS,
  payload: flowers || [],
});

export const setFlowersApiErrorAction: (error?: string) => SetFlowersApiErrorAction = error => ({
  type: SET_FLOWERS_API_ERROR,
  payload: error || apiErrorMessage,
});
