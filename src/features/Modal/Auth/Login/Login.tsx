import React, { ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Alert from '../../../../components/Alert/Alert';
import Button from '../../../../components/Botton/Button';
import Input from '../../../../components/Input/Input';
import Spinner from '../../../../components/Spinner/Spinner';
import { ModalComponent } from '../../../../shared/enums/ModalComponent';
import { StoreState } from '../../../../store';
import { setModalComponentAction } from '../../../../store/modal/actions';
import { loginUserAction } from '../../../../store/users/actions';
import { UserState } from '../../../../store/users/types';
import { FormContextProvider, useFormContext } from '../../../Form';
import { ModalError, ModalTitle } from '../../styled';
import { authenticationState } from '../models';
import { AuthenticationFormField, AuthenticationFormName, AuthenticationForms } from '../types';
import { authValidation } from '../validation';

const LoginForm = () => {
  const dispatch = useDispatch();

  const {
    state: { login, errors },
    validate,
    setFieldValue,
    validateForm,
  } = useFormContext<AuthenticationFormName, AuthenticationFormField>();

  const validateFieldValue = useCallback(
    (fieldName: keyof AuthenticationFormField) => ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      validate(AuthenticationForms.login)(fieldName)(value || login[fieldName]),
    [validate, login],
  );
  const handleFieldChange = useCallback(
    (fieldName: keyof AuthenticationFormField) => ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setFieldValue(AuthenticationForms.login)(fieldName)(value),
    [setFieldValue],
  );

  const onLogin = useCallback(() => {
    if (validateForm(AuthenticationForms.login, login)) {
      dispatch(loginUserAction(login));
    }
  }, [validateForm, login, dispatch]);

  return (
    <>
      <Input
        onBlur={validateFieldValue('email')}
        onChange={handleFieldChange('email')}
        value={login.email}
        error={errors['email']}
        name={'email'}
        label={'Email Address'}
        placeholder={'Enter your email address...'}
      />
      <Input
        onBlur={validateFieldValue('password')}
        onChange={handleFieldChange('password')}
        type={'password'}
        value={login.password}
        error={errors['password']}
        name={'password'}
        label={'Password'}
        placeholder={'Enter your password...'}
      />
      <Button variant={'primary'} onClick={onLogin}>
        Login to your Account
      </Button>
    </>
  );
};

const Login = () => {
  const dispatch = useDispatch();
  const { authenticated, error, loading } = useSelector<StoreState, UserState>(s => s.user);

  const closeModal = useCallback(() => dispatch(setModalComponentAction(null)), [dispatch]);
  const openUserModal = useCallback(() => dispatch(setModalComponentAction(ModalComponent.User)), [dispatch]);

  if (authenticated) {
    return (
      <Alert
        message={'Congratulations! You have successfully logged into FlowrSpot!'}
        label={'Profile'}
        action={openUserModal}
        secondaryAction={closeModal}
        secondaryLabel={'OK'}
      />
    );
  }

  return (
    <FormContextProvider initialState={authenticationState} validationSchema={authValidation}>
      <ModalTitle>Welcome Back</ModalTitle>
      {error && <ModalError>{error}</ModalError>}
      {loading ? <Spinner /> : <LoginForm />}
    </FormContextProvider>
  );
};

export default Login;
