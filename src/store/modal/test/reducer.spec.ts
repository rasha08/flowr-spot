import { ModalComponent } from '../../../shared/enums/ModalComponent';
import { modalReducer } from '../reducer';
import { SET_MODAL_COMPONENT } from '../types';

describe('Modal Reducer Tests', () => {
  it('sets initial state properly', () => {
    expect(modalReducer({ currentModal: null }, { type: SET_MODAL_COMPONENT, payload: ModalComponent.Login })).toEqual({
      currentModal: ModalComponent.Login,
    });
  });

  it('get proper action for showing Login Modal', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(
      modalReducer({ currentModal: null }, { type: 'WRONG ACTION' as any, payload: ModalComponent.Login }),
    ).toEqual({ currentModal: null });
  });
});
