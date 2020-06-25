import { useEmailValidator, useStringValidator } from 'use-validation-hooks';

import { ValidationSchema } from '../../../shared/utils/useValidation';

const baseAuth = {
  email: useEmailValidator({ label: 'Email', required: true }),
  password: useStringValidator({ label: 'Password', required: true, min: 8 }),
};

const register = {
  first_name: useStringValidator({ label: 'First Name', required: true, min: 2 }),
  last_name: useStringValidator({ label: 'Last Name', required: true, min: 2 }),
  date_of_birth: useStringValidator({
    label: 'Date of Birth',
    required: true,
  }),
};

export const authValidation: ValidationSchema = {
  login: baseAuth,
  register: {
    ...baseAuth,
    ...register,
  },
};
