import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import Block from '../../framework/Block';

export class SignInPage extends Block {
  constructor() {
    super({
      InputEmail: new Input({
        id: 'email',
        name: 'email',
        type: 'text',
        placeholder:'Почта',
        onClick: () => {
          console.log('email');
        },
      }),
      InputLogin: new Input({
        id: 'login',
        name: 'login',
        type: 'text',
        placeholder:'Логин',
        onClick: () => {
          console.log('login');
        },
      }),
      InputFirstName: new Input({
        id: 'first_name',
        name: 'first_name',
        type: 'text',
        placeholder:'Имя',
        onClick: () => {
          console.log('first_name');
        },
      }),
      InputSecondName: new Input({
        id: 'second_name',
        name: 'second_name',
        type: 'text',
        placeholder:'Фамилия',
        onClick: () => {
          console.log('second_name');
        },
      }),
      InputPhone: new Input({
        id: 'phone',
        name: 'phone',
        type: 'tel',
        placeholder:'Телефон',
        onClick: () => {
          console.log('CLICK');
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
      ButtonRegister:  new Button({
        id: 'register-button',
        text: 'Зарегистрироваться',
      }),
      ButtonEnter:  new Button({
        id: 'enter-button',
        text: 'Войти?',
      }),
    });
  }

  render() {
    console.log('dcsds');
    return `
    <div class="app">
  <div class="sign-in-container">
    <header>
      <h1>Регистрация</h1>
    </header>
    <main>
      {{{InputEmail}}}
      {{{InputLogin}}}
      {{{InputFirstName}}}
      {{{InputSecondName}}}
      {{{InputPhone}}}
      {{{InputPass}}}
    </main>
    <footer>
      {{{ButtonRegister}}}
      {{{ButtonEnter}}}
    </footer>
  </div>
</div>`;
  }
}
