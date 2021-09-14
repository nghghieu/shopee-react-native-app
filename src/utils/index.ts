import { Platform, Dimensions } from 'react-native';

export const isIos = Platform.OS === 'ios';

export const { height, width } = Dimensions.get('window');

export const screenNames = {
  // Root stack
  App: 'App',
  Auth: 'Auth',

  // Auth stack
  Intro: 'Intro',
  Login: 'Login',
  Register: 'Register',
  VerifyEmail: 'VerifyEmail',
  VerifyCode: 'VerifyCode',
  ResetPassword: 'ResetPassword',

  // App stack
  Map: 'Map',

  // App Tab stack
  UserTab: 'UserTab',
  Notification: 'Notification',
  AvailableTime: 'AvailableTime',

  ProfileStack: 'ProfileStack',
  Profile: 'Profile',
  EditProfile: 'EditProfile',
  ChangePassword: 'ChangePassword',
};

export const asyncStorageKey = {
  ACCESS_TOKEN: 'ACCESS_TOKEN',
  FCM_TOKEN: 'FCM_TOKEN',
  ALREADY_USE: 'ALREADY_USE',
  ONLY_USER: 'ONLY_USER',
};
