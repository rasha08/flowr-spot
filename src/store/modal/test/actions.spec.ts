import { ModalComponent } from '../../../shared/enums/ModalComponent';
import { setModalComponentAction } from '../actions';
import { SET_MODAL_COMPONENT } from '../types';

describe('Modal Actions Tests', () => {
  it('get proper action for hiding modal', () => {
    expect(setModalComponentAction(null)).toEqual({ type: SET_MODAL_COMPONENT, payload: null });
  });

  it('get proper action for showing Login Modal', () => {
    expect(setModalComponentAction(ModalComponent.Login)).toEqual({ type: SET_MODAL_COMPONENT, payload: 'Login' });
  });
});
