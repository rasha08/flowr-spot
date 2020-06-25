import { ModalComponent } from '../../shared/enums/ModalComponent';
import { SET_MODAL_COMPONENT, SetModalComponentAction } from './types';

export const setModalComponentAction: (component: ModalComponent | null) => SetModalComponentAction = component => ({
  type: SET_MODAL_COMPONENT,
  payload: component,
});
