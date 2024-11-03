import { DataOptions, HTTPMethod, METHODS, Options } from '../types';

export class HTTPTransport {
  queryStringify(data: DataOptions) {
    if (typeof data !== 'object' || data === null) {
      throw new Error('Data must be object');
    }

    let result = '?';

    for (const [key, value] of Object.entries(data)) {
      result += `${key}=${value}&`;
    }

    return result.slice(0, -1);
  }

  get: HTTPMethod = (url, options) =>
    this.request(url, { ...options, method: METHODS.GET }, options?.timeout);

  put: HTTPMethod = (url, options) =>
    this.request(url, { ...options, method: METHODS.PUT }, options?.timeout);

  post: HTTPMethod = (url, options) =>
    this.request(url, { ...options, method: METHODS.POST }, options?.timeout);

  delete: HTTPMethod = (url, options) =>
    this.request(url, { ...options, method: METHODS.DELETE }, options?.timeout);

  request = (url: string, options: Options, timeout = 5000) => {
    const { headers = {}, method, data } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject('No method');
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(method, url);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
