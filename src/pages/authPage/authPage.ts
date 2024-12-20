import { Button } from '../../components/Button';
import { ButtonSecond } from '../../components/ButtonSecond';
import { InputContainer } from '../../components/InputContainer';
import { router } from '../../framework/Router';
import { Block } from '../../framework/Block';
import { validation } from '../../utils/validationField';
import AuthController from '../../controllers/AuthController';

export class AuthPage extends Block<StringIndexed> {
  constructor() {
    super({
      InputLogin: new InputContainer({
        id: 'login',
        name: 'login',
        type: 'text',
        placeholder: 'Логин',
        onBlur: (e) => {
          if (e.target instanceof HTMLInputElement) {
            const login = { login: e.target.value };
            const messageError = validation('login', login.login);
            this.setProps({
              ...login,
              disabled: !!messageError || !!validation('password', this.props.password),
            });
            return messageError;
          }
          return '';
        },
      }),
      InputPass: new InputContainer({
        id: 'password',
        name: 'password',
        type: 'password',
        placeholder: 'Пароль',
        onBlur: (e) => {
          if (e.target instanceof HTMLInputElement) {
            const password = { password: e.target.value };
            const messageError = validation('password', password.password);
            this.setProps({
              ...password,
              disabled: !!messageError || !!validation('login', this.props.login),
            });
            return messageError;
          }
          return '';
        },
      }),
      ButtonAuth: new Button({
        id: 'auth-button',
        text: 'Войти',
        disabled: false,
        onClick: () => {
          if (
            validation('login', this.props.login) === '' &&
            validation('password', this.props.password) === ''
          ) {
            AuthController.login({
              login: this.props.login,
              password: this.props.password,
            });
          }
        },
      }),
      ButtonsignIn: new ButtonSecond({
        id: 'sign-in-button',
        text: 'Нет акаунта?',
        onClick: () => router.go('/sign-up'),
      }),
    });
  }

  render() {
    return `
    <div class="app">
  <div class="auth-container">
    <header>
      <h1>Вход</h1>
    </header>
    <main>
    {{ErrorTextLogin}}
      {{{InputLogin}}}
      {{{InputPass}}}
    </main>
    <footer>
      {{{ButtonAuth}}}
      {{{ButtonsignIn}}}
    </footer>
  </div>
</div>`;
  }
}
