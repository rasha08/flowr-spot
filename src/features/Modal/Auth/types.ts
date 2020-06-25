export type AuthenticationFormName = 'register' | 'login';
export type AuthenticationFormField = Login & Register;

export enum AuthenticationForms {
  register = 'register',
  login = 'login',
}

type BaseAuth = {
  email: string;
  password: string;
};

export type Register = BaseAuth & {
  first_name: string;
  last_name: string;
  date_of_birth: string;
};

export type Login = BaseAuth;

export type AuthenticationState = {
  login: Login;
  register: Register;
};
