import { ModalComponent } from '../../shared/enums/ModalComponent';
import { ReduxAction } from '../../shared/types/ReduxAction';
import { ReduxReducer } from '../../shared/types/ReduxReducer';

export const SET_MODAL_COMPONENT = 'SET_MODAL_COMPONENT';

export type SetModalComponentAction = ReduxAction<typeof SET_MODAL_COMPONENT, ModalComponent | null>;

export type ModalState = {
  currentModal: ModalComponent | null;
};

export type ModalReducer = ReduxReducer<ModalState, SetModalComponentAction>;
