// Самая простая версия. Реализовать штучку со всеми проверками им предстоит в конце спринта

import { Methods, DataOptions, Options } from '../../types/fetch';

type HTTPMethod = (url: string, options?: Options) => Promise<XMLHttpRequest>;

export class HTTPTransport {
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `https://ya-praktikum.tech/api/v2${endpoint}`;
  }

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
    this.request(this.endpoint + url, { ...options, method: Methods.GET }, options?.timeout);

  put: HTTPMethod = (url, options) =>
    this.request(this.endpoint + url, { ...options, method: Methods.PUT }, options?.timeout);

  post: HTTPMethod = (url, options) =>
    this.request(this.endpoint + url, { ...options, method: Methods.POST }, options?.timeout);

  delete: HTTPMethod = (url, options) =>
    this.request(this.endpoint + url, { ...options, method: Methods.DELETE }, options?.timeout);

  request = (url: string, options: Options, timeout = 10000): Promise<XMLHttpRequest> => {
    const { headers = {}, method, data, withCredentials = true, responseType = 'json' } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject('No method');
        return;
      }

      const xhr = new XMLHttpRequest();

      const isGet = method === Methods.GET;

      xhr.open(method, url);

      Object.keys(headers ?? {}).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = () => reject({ reason: 'abort' });

      xhr.onerror = () => reject({ reason: 'network error' });

      xhr.ontimeout = () => reject({ reason: 'timeout' });

      xhr.timeout = timeout;

      xhr.withCredentials = withCredentials;

      xhr.responseType = responseType;

      if (isGet || !data) {
        xhr.send();
      } else if (data instanceof FormData) {
        xhr.send(data);
      } else {
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
