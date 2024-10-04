import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import Block from '../../framework/Block';



export class AuthPage extends Block {
  constructor() {
    super({
      InputLogin: new Input({
        id: 'login',
        name: 'login',
        type: 'text',
        placeholder:'Логин',
        onBlur: (e) => {
          if (e.target instanceof HTMLInputElement) {
            const login = { login: e.target.value };
            this.setProps({
              ...login,
            });
          }
        },
      }),
      InputPass: new Input({
        id: 'password',
        name: 'password',
        type: 'password',
        placeholder:'Пароль',
        onBlur: (e) => {
          if (e.target instanceof HTMLInputElement) {
            const password = { password: e.target.value };
            this.setProps({
              ...password,
            });
          }
        },
      }),
      ButtonAuth:  new Button({
        id: 'auth-button',
        text: 'Войти',
        onClick: () => {
          console.log(
            {
              login: this.props.login,
              password: this.props.password,
            },
          );
        },
      }),
      ButtonSingIn:  new Button({
        id: 'sign-in-button',
        text: 'Нет акаунта?',
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
      {{{InputLogin}}}
      {{{InputPass}}}
    </main>
    <footer>
      {{{ButtonAuth}}}
      {{{ButtonSingIn}}}
    </footer>
  </div>
</div>`;
  }
}
