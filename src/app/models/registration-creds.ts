export interface LoginCreds {
  login: string;
  password: string;
}

export interface RegistrationCreds extends LoginCreds{
  passwordConfirmation: string;
}
