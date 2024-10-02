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
        onClick: (event: Event) => {
          console.log('CLICK');
          event.preventDefault();
          event.stopPropagation();
        },
      }),
      InputNewPass: new Input({
        id: 'newPassword',
        name: 'newPassword',
        type: 'password',
        placeholder:'Новый пароль',
        onClick: () => {
          console.log('CLICK');
        },
      }),
      ButtonSave:  new Button({
        id: 'save-password',
        text: 'Сохранить',
        // onClick: () => {
        //   nav('singIn');
        // },
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
