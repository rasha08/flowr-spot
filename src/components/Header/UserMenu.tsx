import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ModalComponent } from '../../shared/enums/ModalComponent';
import { StoreState } from '../../store';
import { setModalComponentAction } from '../../store/modal/actions';
import { UserState } from '../../store/users/types';
import Avatar from '../Avatar/Avatar';
import Button from '../Botton/Button';
import { useHeaderContext } from './context';
import { UserMenuWrapper, UserName } from './styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { toggleMenu } = useHeaderContext();
  const { authenticated, data } = useSelector<StoreState, UserState>(s => s.user);
  const close = useCallback(() => toggleMenu(false), [toggleMenu]);
  const openModal = useCallback((component: ModalComponent) => () => dispatch(setModalComponentAction(component)), [
    dispatch,
  ]);

  if (authenticated && data.first_name) {
    return (
      <UserMenuWrapper onClick={openModal(ModalComponent.User)}>
        <UserName>
          {data.first_name} {data.last_name}
        </UserName>
        <Avatar imageSrc={'/static/images/profile-holder.png'} />
      </UserMenuWrapper>
    );
  }

  return (
    <UserMenuWrapper onClick={close}>
      <Button variant={'link'} onClick={openModal(ModalComponent.Login)}>
        Login
      </Button>
      <Button variant={'primary'} round={true} onClick={openModal(ModalComponent.SignUp)}>
        New Account
      </Button>
    </UserMenuWrapper>
  );
};

export default UserMenu;
