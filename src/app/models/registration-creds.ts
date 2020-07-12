export interface AuthCreds {
  login: string;
  password: string;
}

export interface RegistrationCreds extends AuthCreds{
  passwordConfirmation: string;
}
