import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import Block from '../../framework/Block';



export class PasswordEditPage extends Block {
  constructor() {
    super({
      InputOldPass: new Input({
        id: 'oldPassword',
        name: 'oldPassword',
        type: 'password',
        placeholder:'Старый пароль',
        onBlur: (e) => {
          if (e.target instanceof HTMLInputElement) {
            const oldPassword = { oldPassword: e.target.value };
            this.setProps({
              ...oldPassword,
            });
          }
        },
      }),
      InputNewPass: new Input({
        id: 'newPassword',
        name: 'newPassword',
        type: 'password',
        placeholder:'Новый пароль',
        onBlur: (e) => {
          if (e.target instanceof HTMLInputElement) {
            const newPassword = { newPassword: e.target.value };
            this.setProps({
              ...newPassword,
            });
          }
        },
      }),
      ButtonSave:  new Button({
        id: 'save-password',
        text: 'Сохранить',
        onClick: () => {
          console.log({'oldPassword': this.props.oldPassword, 'newPassword': this.props.newPassword})
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
