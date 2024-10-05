import { Button } from '../../components/Button';
import { InputContainer } from '../../components/InputContainer';
import Block from '../../framework/Block';
import { Pages } from '../../types';
import { validation } from '../../utils/validationField';

interface PageProps {
  link?: (path: Pages) => void;
}

export class PasswordEditPage extends Block {
  constructor(props: PageProps) {
    super({
      InputOldPass: new InputContainer({
        id: 'oldPassword',
        name: 'oldPassword',
        type: 'password',
        placeholder:'Старый пароль',
        onBlur: (e) => {
          if (e.target instanceof HTMLInputElement) {
            const oldPassword = { oldPassword: e.target.value };
            const messageError = validation('oldPassword', oldPassword.oldPassword);
            this.setProps({
              ...oldPassword,
              disabled: !!messageError || !!validation('password', this.props.newPassword),
            });
            return messageError;
          }
          return '';
        },
          
      }),
      InputNewPass: new InputContainer({
        id: 'newPassword',
        name: 'newPassword',
        type: 'password',
        placeholder:'Новый пароль',
        onBlur: (e) => {
          if (e.target instanceof HTMLInputElement) {
            const newPassword = { newPassword: e.target.value };
            const messageError = validation('password', newPassword.newPassword);
            this.setProps({
              ...newPassword,
              disabled: !!messageError || !!validation('oldPassword', this.props.oldPassword),
            });
            return messageError;
          }
          return '';
        },
      }),
      ButtonSave:  new Button({
        id: 'save-password',
        text: 'Сохранить',
        disabled: true,
        onClick: () => {
          if (validation('oldPassword', this.props.oldPassword) === '' && validation('password', this.props.newPassword) === '') {
            console.log('Старый пароль не пустой, Новый пароль валидный. Ок');
            props.link(Pages.profile);
          }
        },
      }),
    });
  }

  render() {
    return `
    <div class="app">
  <div class="profile-container">
    <header >
    <div class="contact-avatar"></div>
    </header>
    <main>
      {{{InputOldPass}}}
      {{{InputNewPass}}}
  </main>
  <footer>
    {{{ButtonSave}}}
  </footer>
  </div>
</div>`;
  }
}
