import { Avatar } from '../../components/Avatar';
import { ButtonSecond } from '../../components/ButtonSecond';
import { FieldProfile } from '../../components/FieldProfile';
import AuthController from '../../controllers/AuthController';
import { Block } from '../../framework/Block';
import { connect } from '../../framework/HOC';
import { router } from '../../framework/Router';
import { store } from '../../framework/Store';

export class ProfilePage extends Block<StringIndexed> {
  constructor() {
    const { profileState } = store.getState();

    const { profile } = profileState;

    super({
      FieldProfileEmail: new FieldProfile({
        fieldName: 'Почта',
        fieldValue: profile.email,
      }),
      FieldProfileLogin: new FieldProfile({
        fieldName: 'Логин',
        fieldValue: profile.login,
      }),
      FieldProfileFirstName: new FieldProfile({
        fieldName: 'Имя',
        fieldValue: profile.firstName,
      }),
      FieldProfileSecondName: new FieldProfile({
        fieldName: 'Фамилия',
        fieldValue: profile.secondName,
      }),
      FieldProfilePhone: new FieldProfile({
        fieldName: 'Телефон',
        fieldValue: profile.phone,
      }),
      Avatar: new Avatar({
        name: profile.firstName,
        avatarUrl: profile.avatar,
        isEdit: false,
      }),
      ButtonEditData: new ButtonSecond({
        id: 'edit-data',
        text: 'Изменить данные',
        onClick: () => {
          router.go('/settings/change-data');
        },
      }),
      ButtonEditPass: new ButtonSecond({
        id: 'edit-password',
        text: 'Изменить пароль',
        onClick: () => {
          router.go('/settings/change-password');
        },
      }),
      ButtonMessengGo: new ButtonSecond({
        id: '1',
        text: 'В чат',
        onClick: () => router.go('/messenger'),
      }),
      ButtonExit: new ButtonSecond({
        id: 'exit',
        text: 'Выйти',
        onClick: () => AuthController.logout(),
      }),
    });
  }

  render() {
    return `
    <div class="app">
  <div class="profile-container">
    <header>
    {{{Avatar}}}
    </header>
    <main>
      {{{FieldProfileEmail}}}
      {{{FieldProfileLogin}}}
      {{{FieldProfileFirstName}}}
      {{{FieldProfileSecondName}}}
      {{{FieldProfilePhone}}}
  </main>
  <footer>
    {{{ButtonEditData}}}
    {{{ButtonEditPass}}}
    {{{ButtonExit}}} 
    {{{ButtonMessengGo}}}
  </footer>
  </div>
</div>
`;
  }
}

export default connect(ProfilePage);
