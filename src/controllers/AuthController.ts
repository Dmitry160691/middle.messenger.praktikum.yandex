import { LoginData, RegisterData } from '../types/api';
import api, { AuthApi } from '../api/AuthApi';
import { router } from '../framework/Router';
import { store } from '../framework/Store';

class AuthController {
  private readonly api: AuthApi;

  constructor() {
    this.api = api;
  }

  public async login(data: LoginData) {
    try {
      await this.api.login(data);
      await this.getUser();
      router.go('/settings');
    } catch (error) {
      console.error(error);
      store.set('error', error);
    }
  }

  public async getUser() {
    store.resetError();
    try {
      const { response, status } = await this.api.read();

      if (status === 200) {
        const profileState = {
          profile: {
            id: response.id,
            login: response.login,
            firstName: response.first_name,
            secondName: response.second_name,
            displayName: response.display_name,
            avatar: response.avatar,
            phone: response.phone,
            email: response.email,
          },
        };

        store.set('profileState', profileState);
      } else {
        throw new Error(response.reason);
      }
    } catch (error) {
      store.set('error', error);
    }
  }

  public async register(data: RegisterData) {
    try {
      await this.api.register(data);
      await this.getUser();
      router.go('/messenger');
    } catch (error) {
      console.error(error);
    }
  }

  public async logout() {
    try {
      await this.api.logout();
      store.set('user', {});
      router.go('/');
    } catch (error) {
      console.error(error);
    }
  }
}

export default new AuthController();
