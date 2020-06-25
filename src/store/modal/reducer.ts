import { ModalReducer, ModalState, SET_MODAL_COMPONENT } from './types';

const initialModalState: ModalState = {
  currentModal: null,
};

export const modalReducer: ModalReducer = (state = initialModalState, action) => {
  switch (action.type) {
    case SET_MODAL_COMPONENT:
      return {
        ...state,
        currentModal: action.payload,
      };
    default:
      return state;
  }
};
