import { Button } from '../../components/Button';
import { ButtonSecond } from '../../components/ButtonSecond';
import { InputContainer } from '../../components/InputContainer';
import AuthController from '../../controllers/AuthController';
import Block from '../../framework/Block';
import { router } from '../../framework/Router';
import { validation } from '../../utils/validationField';

export class SignInPage extends Block<StringIndexed> {
  constructor() {
    super({
      InputEmail: new InputContainer({
        id: 'email',
        name: 'email',
        type: 'text',
        placeholder: 'Почта',
        onBlur: (e) => {
          if (e.target instanceof HTMLInputElement) {
            const email = { email: e.target.value };
            const messageError = validation('email', email.email);
            this.setProps({
              ...email,
              disabled: !!messageError,
            });
            return messageError;
          }
          return '';
        },
      }),
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
              disabled: !!messageError,
            });
            return messageError;
          }
          return '';
        },
      }),
      InputFirstName: new InputContainer({
        id: 'first_name',
        name: 'first_name',
        type: 'text',
        placeholder: 'Имя',
        onBlur: (e) => {
          if (e.target instanceof HTMLInputElement) {
            const firstName = { first_name: e.target.value };
            const messageError = validation('first_name', firstName.first_name);
            this.setProps({
              ...firstName,
              disabled: !!messageError,
            });
            return messageError;
          }
          return '';
        },
      }),
      InputSecondName: new InputContainer({
        id: 'second_name',
        name: 'second_name',
        type: 'text',
        placeholder: 'Фамилия',
        onBlur: (e) => {
          if (e.target instanceof HTMLInputElement) {
            const secondName = { second_name: e.target.value };
            const messageError = validation('second_name', secondName.second_name);
            this.setProps({
              ...secondName,
              disabled: !!messageError,
            });

            return messageError;
          }
          return '';
        },
      }),
      InputPhone: new InputContainer({
        id: 'phone',
        name: 'phone',
        type: 'tel',
        placeholder: 'Телефон',
        onBlur: (e) => {
          if (e.target instanceof HTMLInputElement) {
            const phone = { phone: e.target.value };
            const messageError = validation('phone', phone.phone);
            this.setProps({
              ...phone,
              disabled: !!messageError,
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
              disabled: !!messageError,
            });
            return messageError;
          }
          return '';
        },
      }),
      ButtonRegister: new Button({
        id: 'register-button',
        text: 'Зарегистрироваться',
        onClick: () => {
          const { phone, email, first_name, second_name, password, login } = this.props;
          if (phone && email && first_name && second_name && password && login) {
            const form = {
              phone,
              email,
              first_name,
              second_name,
              password,
              login,
            };
            AuthController.register(form);
          }
        },
      }),
      ButtonEnter: new ButtonSecond({
        id: 'enter-button',
        text: 'Войти?',
        onClick: () => {
          router.go('/');
        },
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
