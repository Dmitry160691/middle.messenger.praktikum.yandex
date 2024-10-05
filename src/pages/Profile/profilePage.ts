import { ButtonSecond } from '../../components/ButtonSecond';
import { FieldProfile } from '../../components/FieldProfile';
import Block from '../../framework/Block';

interface PageProps {
  profileData: any,
  link?: (path: string) => void;
}

export class ProfilePage extends Block {
  constructor({ profileData, link }: PageProps) {
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
      
      ButtonEditData:  new ButtonSecond({
        id: 'edit-data',
        text: 'Изменить данные',
        onClick: () => {
          link('profileEdit');
        },
      }),
      ButtonEditPass:  new ButtonSecond({
        id: 'edit-password',
        text: 'Изменить пароль',
        onClick: () => {
          link('passwordEdit');
        },
      }),
      ButtonExit:  new ButtonSecond({
        id: 'exit',
        text: 'Выйти',
        onClick: () => {
          link('auth');
        },
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
