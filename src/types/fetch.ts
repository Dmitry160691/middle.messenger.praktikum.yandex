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