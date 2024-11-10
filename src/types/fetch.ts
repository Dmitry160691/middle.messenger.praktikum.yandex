export enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type Options = {
  data?: DataOptions;
  timeout?: number;
  withCredentials?: boolean;
  responseType?: XMLHttpRequestResponseType;
  method?: Methods;
  headers?: {
    [key: string]: string;
  };
};

export type DataOptions = Document | XMLHttpRequestBodyInit | null | undefined | any;
