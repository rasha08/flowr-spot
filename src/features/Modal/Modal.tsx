import React, { FC, Suspense, lazy, useCallback, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from '../../components/Spinner/Spinner';
import { ModalComponent } from '../../shared/enums/ModalComponent';
import { lazyFn } from '../../shared/utils/lazyFn';
import { useClickOutside } from '../../shared/utils/useClickOutside';
import { StoreState } from '../../store';
import { setModalComponentAction } from '../../store/modal/actions';
import { ModalState } from '../../store/modal/types';
import { ModalClose, ModalOverlay, ModalWrapper } from './styled';

const Modal: FC = () => {
  const modalRef = useRef(null);
  const { currentModal } = useSelector<StoreState, ModalState>(s => s.modal);

  const dispatch = useDispatch();
  const closeModal = useCallback(lazyFn(dispatch, setModalComponentAction(null)), [dispatch]);

  const CurrentComponent = useMemo(() => {
    switch (currentModal) {
      case ModalComponent.Login:
        return lazy(() => import('./Auth/Login/Login'));
      case ModalComponent.SignUp:
        return lazy(() => import('./Auth/Register/Register'));
      case ModalComponent.User:
        return lazy(() => import('./UserModal/UserModal'));
      default:
        return () => null;
    }
  }, [currentModal]);

  useClickOutside(modalRef, !!currentModal, closeModal);

  if (!currentModal) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalWrapper ref={modalRef}>
        <ModalClose onClick={closeModal} />
        <Suspense fallback={<Spinner />}>
          <CurrentComponent />
        </Suspense>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default Modal;
