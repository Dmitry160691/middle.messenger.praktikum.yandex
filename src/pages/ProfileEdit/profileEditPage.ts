import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
import { InputContainer } from '../../components/InputContainer';
import UserController from '../../controllers/UserController';
import Block from '../../framework/Block';
import { connect } from '../../framework/HOC';
import { router } from '../../framework/Router';
import { store } from '../../framework/Store';
import { validation } from '../../utils/validationField';

class ProfileEditPage extends Block<StringIndexed> {
  constructor() {
    const { profileState } = store.getState();

    const { profile } = profileState;

    super({
      InputEmail: new InputContainer({
        id: 'email',
        name: 'email',
        type: 'text',
        value: profile.email,
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
      InputDisplayName: new InputContainer({
        id: 'displayName',
        name: 'displayName',
        type: 'text',
        label: 'Ник',
        value: profile.displayName,
        placeholder: 'Ник',
        onBlur: (e) => {
          if (e.target instanceof HTMLInputElement) {
            const displayName = { displayName: e.target.value };
            const messageError = validation('displayName', displayName.displayName);
            this.setProps({
              ...displayName,
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
        value: profile.firstName,
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
        value: profile.secondName,
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
        value: profile.phone,
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
        onClick: async () => {
          try {
            UserController.updateProfile({
              first_name: this.props.first_name ?? profile.firstName,
              second_name: this.props.second_name ?? profile.secondName,
              email: this.props.email ?? profile.email,
              phone: this.props.phone ?? profile.phone,
              display_name: this.props.displayName ?? profile.displayName,
            });

            if (this.props.avatar) {
              await UserController.updateAvatar(this.props.avatar);
            }

            router.go('/settings');
          } catch (e) {
            store.set('error', e);
          }
        },
      }),
      Avatar: new Avatar({
        name: profile.firstName,
        avatarUrl: profile.avatar,
        isEdit: true,
        onChange: (e) => {
          if (e.target instanceof HTMLInputElement && e.target.files) {
            const formData = new window.FormData();
            formData.append('avatar', e.target.files[0]);
            this.setProps({ avatar: formData });
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
    {{{ Avatar }}}
    </header>
    <main>
      {{{InputEmail}}}
      {{{InputDisplayName}}}
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
export default connect(ProfileEditPage);
