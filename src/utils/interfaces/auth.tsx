export interface IRegisterForm {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface ILoginForm {
  email: string;
  password: string;
}
export interface IUserCredentials  {
  email: string;
  otpCode: string;
}