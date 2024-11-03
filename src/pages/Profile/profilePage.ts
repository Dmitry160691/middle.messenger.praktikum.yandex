import { ButtonSecond } from '../../components/ButtonSecond';
import { FieldProfile } from '../../components/FieldProfile';
import Block from '../../framework/Block';
import { ProfileData } from '../../types';

export interface PageProps {
  profileData: ProfileData;
}

export class ProfilePage extends Block {
  constructor({ profileData }: PageProps) {
    super({
      FieldProfileEmail: new FieldProfile({
        fieldName: 'Почта',
        fieldValue: profileData.email,
      }),
      FieldProfileLogin: new FieldProfile({
        fieldName: 'Логин',
        fieldValue: profileData.login,
      }),
      FieldProfileFirstName: new FieldProfile({
        fieldName: 'Имя',
        fieldValue: profileData.first_name,
      }),
      FieldProfileSecondName: new FieldProfile({
        fieldName: 'Фамилия',
        fieldValue: profileData.second_name,
      }),
      FieldProfilePhone: new FieldProfile({
        fieldName: 'Телефон',
        fieldValue: profileData.phone,
      }),

      ButtonEditData: new ButtonSecond({
        id: 'edit-data',
        text: 'Изменить данные',
      }),
      ButtonEditPass: new ButtonSecond({
        id: 'edit-password',
        text: 'Изменить пароль',
      }),
      ButtonExit: new ButtonSecond({
        id: 'exit',
        text: 'Выйти',
      }),
    });
  }

  render() {
    return `
    <div class="app">
  <div class="profile-container">
    <header>
    <div id="profile-avatar" class="contact-avatar"></div>
    <h2>Имя</h2>
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
  </footer>
  </div>
</div>
`;
  }
}
