import { FlowersReducer, FlowersState, GET_FLOWERS, SET_FLOWERS, SET_FLOWERS_API_ERROR } from './types';

const initialFlowersState: FlowersState = {
  flowers: [],
  loading: false,
  error: null,
};

export const flowersReducer: FlowersReducer = (state = initialFlowersState, action) => {
  switch (action.type) {
    case GET_FLOWERS:
      return {
        ...state,
        loading: true,
      };
    case SET_FLOWERS:
      return {
        ...state,
        flowers: action.payload,
        loading: false,
      };
    case SET_FLOWERS_API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
