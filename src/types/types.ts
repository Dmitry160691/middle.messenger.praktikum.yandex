export interface DialogData {
  id: number;
  name: string;
  dialog: DialogMessage[];
}
  
export interface ProfileData {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  phone: string;
}

export interface DialogMessage {
  text: string;
  isYou: boolean;
  time: string;
}

export enum Pages {
  auth = 'auth',
  signIn = 'signIn',
  message = 'message',
  profile = 'profile',
  profileEdit = 'profileEdit',
  passwordEdit = 'passwordEdit',
  avatarEdit = 'avatarEdit',
  notFound = 'notFound',
}

export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}
  
export type Options = {
  data?: DataOptions;
  timeout?: number;
  withCredentials?: boolean;
  method: METHODS;
  headers?: {
    [key: string]: string;
  };
};
  
export type DataOptions = Document | XMLHttpRequestBodyInit | null | undefined;
  
export type HTTPMethod = (url: string, options?: Options) => Promise<unknown>;

