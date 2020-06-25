import { ReduxAction } from '../../shared/types/ReduxAction';
import { ReduxReducer } from '../../shared/types/ReduxReducer';

export const GET_FLOWERS = 'GET_FLOWERS';
export const SET_FLOWERS = 'SET_FLOWERS';
export const SET_FLOWERS_API_ERROR = 'SET_FLOWERS_API_ERROR';

export type Flower = {
  id: number;
  name: string;
  latin_name: string;
  sightings: number;
  profile_picture: string;
  favorite: boolean;
};

export type GetFlowersAction = ReduxAction<typeof GET_FLOWERS, null>;
export type SetFlowersAction = ReduxAction<typeof SET_FLOWERS, Flower[]>;
export type SetFlowersApiErrorAction = ReduxAction<typeof SET_FLOWERS_API_ERROR, string | null>;

export type FlowersAction = GetFlowersAction | SetFlowersAction | SetFlowersApiErrorAction;

export type FlowersState = {
  flowers: Flower[];
  loading: boolean;
  error: string | null;
};

export type FlowersReducer = ReduxReducer<FlowersState, FlowersAction>;
