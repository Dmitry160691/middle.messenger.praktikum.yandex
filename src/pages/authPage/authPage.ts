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
        onClick: (event: Event) => {
          console.log('CLICK');
          event.preventDefault();
          event.stopPropagation();
        },
      }),
      InputPass: new Input({
        id: 'password',
        name: 'password',
        type: 'password',
        placeholder:'Пароль',
        onClick: () => {
          console.log('CLICK');
        },
      }),
      ButtonAuth:  new Button({
        id: 'auth-button',
        text: 'Войти',
        // onClick: () => {
        //   nav('message');
        // },
      }),
      ButtonSingIn:  new Button({
        id: 'sign-in-button',
        text: 'Нет акаунта?',
        // onClick: () => {
        //   nav('singIn');
        // },
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
