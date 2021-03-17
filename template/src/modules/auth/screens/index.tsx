import SignUpScreen from './SignUp';
import SignInScreen from './SignIn';
import ForgotPasswordScreen from './ForgotPassword';
import ResetPasswordScreen from './ResetPassword';

export type AuthStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined;
};

export const authScreens = {
  SignUp: { component: SignUpScreen },
  SignIn: { component: SignInScreen },
  ForgotPassword: { component: ForgotPasswordScreen },
  ResetPassword: { component: ResetPasswordScreen },
};
