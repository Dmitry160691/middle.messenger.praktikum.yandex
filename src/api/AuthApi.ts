import { LoginData, RegisterData } from '../types/api';
import BaseAPI from './BaseApi';

export class AuthApi extends BaseAPI {
  constructor() {
    super('/auth');
  }

  public login = (data: LoginData) => this.http.post('/signin', { data });

  public read = (): Promise<XMLHttpRequest> => this.http.get('/user');

  public logout = () => this.http.post('/logout');

  public register = (data: RegisterData) => this.http.post('/signup', { data });
}

export default new AuthApi();
