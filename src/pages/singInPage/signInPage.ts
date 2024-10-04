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
        onBlur: (e) => {
          if (e.target instanceof HTMLInputElement) {
            const email = { email: e.target.value };
            this.setProps({
              ...email,
            });
          }
        },
      }),
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
      InputFirstName: new Input({
        id: 'first_name',
        name: 'first_name',
        type: 'text',
        placeholder:'Имя',
        onBlur: (e) => {
          if (e.target instanceof HTMLInputElement) {
            const first_name = { first_name: e.target.value };
            this.setProps({
              ...first_name,
            });
          }
        },
      }),
      InputSecondName: new Input({
        id: 'second_name',
        name: 'second_name',
        type: 'text',
        placeholder:'Фамилия',
        onBlur: (e) => {
          if (e.target instanceof HTMLInputElement) {
            const second_name = { second_name: e.target.value };
            this.setProps({
              ...second_name,
            });
          }
        },
      }),
      InputPhone: new Input({
        id: 'phone',
        name: 'phone',
        type: 'tel',
        placeholder:'Телефон',
        onBlur: (e) => {
          if (e.target instanceof HTMLInputElement) {
            const phone = { phone: e.target.value };
            this.setProps({
              ...phone,
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
      ButtonRegister:  new Button({
        id: 'register-button',
        text: 'Зарегистрироваться',
        onClick: () => {
          console.log({
            'email': this.props.email,
            'login': this.props.login,
            'first_name': this.props.first_name,
            'second_name': this.props.second_name,
            'phone': this.props.phone,
            'password': this.props.password
          })
        },
      }),
      ButtonEnter:  new Button({
        id: 'enter-button',
        text: 'Войти?',
      }),
    });
  }

  render() {
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
