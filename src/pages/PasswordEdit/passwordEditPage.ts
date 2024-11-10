import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
import { InputContainer } from '../../components/InputContainer';
import UserController from '../../controllers/UserController';
import Block from '../../framework/Block';
import { router } from '../../framework/Router';
import { store } from '../../framework/Store';
import { validation } from '../../utils/validationField';

export class PasswordEditPage extends Block<StringIndexed> {
  constructor() {
    const { profileState } = store.getState();

    const { profile } = profileState;
    super({
      InputOldPass: new InputContainer({
        id: 'oldPassword',
        name: 'oldPassword',
        type: 'password',
        placeholder: 'Старый пароль',
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
        placeholder: 'Новый пароль',
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
      ButtonSave: new Button({
        id: 'save-password',
        text: 'Сохранить',
        disabled: true,
        onClick: async () => {
          if (
            validation('oldPassword', this.props.oldPassword) === '' &&
            validation('password', this.props.newPassword) === ''
          ) {
            const res = await UserController.updatePassword({
              oldPassword: this.props.oldPassword,
              newPassword: this.props.newPassword,
            });

            if (res && res.status === 'error') {
              this.setProps({
                Error: res.message,
              });
            } else {
              router.go('/settings');
            }
          }
        },
      }),
      Avatar: new Avatar({
        name: profile.firstName,
        avatarUrl: profile.avatar,
        isEdit: false,
      }),
    });
  }

  render() {
    return `
    <div class="app">
  <div class="profile-container">
    <header >
    {{{ Avatar }}}
    </header>
    <main>
      {{{InputOldPass}}}
      {{{InputNewPass}}}
  </main>
  <footer>
    {{Error}}
    {{{ButtonSave}}}
  </footer>
  </div>
</div>`;
  }
}
