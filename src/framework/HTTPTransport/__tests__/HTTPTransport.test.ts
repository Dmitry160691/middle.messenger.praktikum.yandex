import sinon from 'sinon';
import { expect, assert } from 'chai';
import { Methods } from '../../../types/fetch';
import { HTTPTransport } from '../HTTPTransport';

describe('HTTPTransport', () => {
  it('Построение строки запроса', async () => {
    const http = new HTTPTransport('/test');

    const stub = sinon.stub(http, 'request').resolves();

    const method = Methods.GET;

    await http.get('', { data: { a: 'aaa', b: 'bbb' } });

    expect(stub.calledWithMatch('https://ya-praktikum.tech/api/v2/test?a=aaa&b=bbb', { method }));
  });

  it('Возвращает ошибку при попытке получить данные пользователя', async () => {
    const http = new HTTPTransport('/auth');

    await http.get('/user', {}).catch((error) => {
      const errorMessage = error.message.toString();
      assert.equal(errorMessage, 'Request failed with status 401, Cookie is not valid');
    });
  });

  it('Возвращает ошибку при авторизации из-за невалидных данных', async () => {
    const http = new HTTPTransport('/auth');

    await http.post('/signin', {}).catch((error) => {
      const errorMessage = error.message.toString();

      assert.equal(errorMessage, 'Request failed with status 400, login is empty, but required');
    });
  });
});
