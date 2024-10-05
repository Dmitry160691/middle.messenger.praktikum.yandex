import { Button } from '../../components/Button';
import { FieldEditProfile } from '../../components/FieldEditProfile';
import Block from '../../framework/Block';
import { Pages, ProfileData } from '../../types';

interface PageProps {
  profileData: ProfileData,
  link?: (path: Pages) => void;
}

export class ProfileEditPage extends Block {
  constructor({ profileData, link }: PageProps) {
    super({
      FieldEditProfileEmail: new FieldEditProfile({
        fieldName: 'Почта',
        fieldValue: profileData.email,
        type: 'text',
      }),
      FieldEditProfileLogin: new FieldEditProfile({
        fieldName: 'Логин',
        fieldValue: profileData.login,
        type: 'text',
      }),
      FieldEditProfileFirstName: new FieldEditProfile({
        fieldName: 'Имя',
        fieldValue: profileData.first_name,
        type: 'text',
      }),
      FieldEditProfileSecondName: new FieldEditProfile({
        fieldName: 'Фамилия',
        fieldValue: profileData.second_name,
        type: 'text',
      }),
      FieldEditProfilePhone: new FieldEditProfile({
        fieldName: 'Телефон',
        fieldValue: profileData.phone,
        type: 'tel',
      }),
      
      ButtonSave:  new Button({
        id: 'save-profile',
        text: 'Сохранить',
        onClick: () => {
          link(Pages.profile);
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
      {{{FieldEditProfileEmail}}}
      {{{FieldEditProfileLogin}}}
      {{{FieldEditProfileFirstName}}}
      {{{FieldEditProfileSecondName}}}
      {{{FieldEditProfilePhone}}}
  </main>
  <footer>
    {{{ButtonSave}}}
  </footer>
  </div>
</div>
`;
  }
}
