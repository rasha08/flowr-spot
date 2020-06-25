import { AuthenticationState } from './types';

export const authenticationState: AuthenticationState = {
  login: {
    password: '',
    email: '',
  },
  register: {
    password: '',
    email: '',
    first_name: '',
    last_name: '',
    date_of_birth: '',
  },
};
