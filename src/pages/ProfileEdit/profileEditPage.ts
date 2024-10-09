import { Button } from '../../components/Button';
import { InputContainer } from '../../components/InputContainer';
import Block from '../../framework/Block';
import { ProfileData } from '../../types';
import { validation } from '../../utils/validationField';

interface PageProps {
  profileData: ProfileData;
}

export class ProfileEditPage extends Block {
  constructor({ profileData }: PageProps) {
    super({
      InputEmail: new InputContainer({
        id: 'email',
        name: 'email',
        type: 'text',
        value: profileData.email,
        placeholder: 'Почта',
        label: 'Почта',
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
        label: 'Логин',
        value: profileData.login,
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
        value: profileData.first_name,
        label: 'Имя',
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
        value: profileData.second_name,
        placeholder: 'Фамилия',
        label: 'Фамилия',
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
        value: profileData.phone,
        placeholder: 'Телефон',
        label: 'Телефон',
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
      ButtonSave: new Button({
        id: 'register-button',
        text: 'Сохранить',
        onClick: () => {
          if (
            this.props.email &&
            this.props.login &&
            this.props.first_name &&
            this.props.second_name &&
            this.props.phone
          ) {
            console.log({
              email: this.props.email,
              login: this.props.login,
              first_name: this.props.first_name,
              second_name: this.props.second_name,
              phone: this.props.phone,
            });
          }
        },
      }),
    });
  }

  render() {
    return `
    <div class="app">
  <div class="profile-container">
    <header>
    <div class="contact-avatar"></div>
    <h2>Имя</h2>
    </header>
    <main>
      {{{InputEmail}}}
      {{{InputLogin}}}
      {{{InputFirstName}}}
      {{{InputSecondName}}}
      {{{InputPhone}}}
  </main>
  <footer>
    {{{ButtonSave}}}
  </footer>
  </div>
</div>
`;
  }
}
