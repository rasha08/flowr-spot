import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Avatar from '../../../components/Avatar/Avatar';
import Button from '../../../components/Botton/Button';
import Input from '../../../components/Input/Input';
import { StoreState } from '../../../store';
import { setModalComponentAction } from '../../../store/modal/actions';
import { logoutUserAction } from '../../../store/users/actions';
import { UserState } from '../../../store/users/types';
import { UserFullName, UserInfoWrapper, UserModalHeader, UserModalWrapper } from './styled';

const UserModal = () => {
  const { data } = useSelector<StoreState, UserState>(s => s.user);
  const dispatch = useDispatch();

  const logout = useCallback(() => {
    dispatch(logoutUserAction());
    dispatch(setModalComponentAction(null));
  }, [dispatch]);

  return (
    <UserModalWrapper>
      <UserModalHeader>
        <Avatar imageSrc={'/static/images/profile-holder.png'} size={2} />
        <UserFullName>
          {data.first_name} {data.last_name}
        </UserFullName>
      </UserModalHeader>
      <UserInfoWrapper>
        <Input readonly={true} value={data.first_name} label={'First Name'} />
        <Input readonly={true} value={data.last_name} label={'Last Name'} />
        <Input readonly={true} value={data.date_of_birth} label={'Date of Birth'} />
        <Input readonly={true} value={data.email} label={'Email Address'} />
      </UserInfoWrapper>

      <Button variant={'primary'} onClick={logout}>
        Logout
      </Button>
    </UserModalWrapper>
  );
};

export default UserModal;
