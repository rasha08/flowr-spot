import React, { ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Alert from '../../../../components/Alert/Alert';
import Button from '../../../../components/Botton/Button';
import Input from '../../../../components/Input/Input';
import { InputGroup } from '../../../../components/Input/styled';
import Spinner from '../../../../components/Spinner/Spinner';
import { ModalComponent } from '../../../../shared/enums/ModalComponent';
import { subtractYearsFormDate } from '../../../../shared/utils/subtractYearsFromDate';
import { StoreState } from '../../../../store';
import { setModalComponentAction } from '../../../../store/modal/actions';
import { registerUserAction } from '../../../../store/users/actions';
import { UserState } from '../../../../store/users/types';
import { FormContextProvider, useFormContext } from '../../../Form';
import { ModalError, ModalTitle } from '../../styled';
import { authenticationState } from '../models';
import { AuthenticationFormField, AuthenticationFormName, AuthenticationForms } from '../types';
import { authValidation } from '../validation';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const {
    state: { register, errors },
    validate,
    setFieldValue,
    validateForm,
  } = useFormContext<AuthenticationFormName, AuthenticationFormField>();

  const validateFieldValue = useCallback(
    (fieldName: keyof AuthenticationFormField) => ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      validate(AuthenticationForms.register)(fieldName)(value || register[fieldName]),
    [validate, register],
  );
  const handleFieldChange = useCallback(
    (fieldName: keyof AuthenticationFormField) => ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setFieldValue(AuthenticationForms.register)(fieldName)(value),
    [setFieldValue],
  );

  const onRegister = useCallback(() => {
    if (validateForm(AuthenticationForms.register, register)) {
      dispatch(registerUserAction(register));
    }
  }, [validateForm, register, dispatch]);

  return (
    <>
      <InputGroup>
        <Input
          onBlur={validateFieldValue('first_name')}
          onChange={handleFieldChange('first_name')}
          value={register.first_name}
          error={errors['first_name']}
          name={'first_name'}
          label={'First Name'}
          placeholder={'Enter your First Name...'}
        />
        <Input
          onBlur={validateFieldValue('last_name')}
          onChange={handleFieldChange('last_name')}
          value={register.last_name}
          error={errors['last_name']}
          name={'last_name'}
          label={'Last Name'}
          placeholder={'Enter your Last Name...'}
        />
      </InputGroup>
      <Input
        onBlur={validateFieldValue('date_of_birth')}
        onChange={handleFieldChange('date_of_birth')}
        error={errors['date_of_birth']}
        name={'dateOfBirth'}
        label={'Date of Birth'}
        placeholder={'Enter your Date of Birth...'}
        value={register.date_of_birth}
        max={subtractYearsFormDate(15).toDateString()}
        min={subtractYearsFormDate(100).toDateString()}
        type="date"
      />
      <Input
        onBlur={validateFieldValue('email')}
        onChange={handleFieldChange('email')}
        value={register.email}
        error={errors['email']}
        name={'email'}
        label={'Email Address'}
        placeholder={'Enter your email address...'}
      />
      <Input
        onBlur={validateFieldValue('password')}
        onChange={handleFieldChange('password')}
        value={register.password}
        type={'password'}
        error={errors['password']}
        name={'password'}
        label={'Password'}
        placeholder={'Enter your password...'}
      />
      <Button variant={'primary'} onClick={onRegister}>
        Create Account
      </Button>
    </>
  );
};

const Register = () => {
  const dispatch = useDispatch();
  const { registrationSuccess, error, loading } = useSelector<StoreState, UserState>(s => s.user);

  const startLoginFlow = useCallback(() => dispatch(setModalComponentAction(ModalComponent.Login)), [dispatch]);

  if (registrationSuccess) {
    return (
      <Alert
        message={'Congratulations! You have successfully signed up for FlowrSpot!'}
        label={'ok'}
        action={startLoginFlow}
      />
    );
  }

  return (
    <FormContextProvider initialState={authenticationState} validationSchema={authValidation}>
      <ModalTitle>Create an Account</ModalTitle>
      {error && <ModalError>{error}</ModalError>}
      {loading ? <Spinner /> : <RegisterForm />}
    </FormContextProvider>
  );
};

export default Register;
