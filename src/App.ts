import { contacts, profileData } from './mockData';
import { AuthPage } from './pages/authPage/authPage';
import { AvatarEditPage } from './pages/AvatarEdit/avatarEditPage';
import { MessagesPage } from './pages/messagesPage/messagesPage';
import { NotFoundPage } from './pages/notFoundPage/notFoundPage';
import { PasswordEditPage } from './pages/PasswordEdit/passwordEditPage';
import { ProfilePage } from './pages/Profile/profilePage';
import { ProfileEditPage } from './pages/ProfileEdit/profileEditPage';
import { SignInPage } from './pages/singInPage/signInPage';
import { DialogData, ProfileData } from './types';

interface AppState {
  currentPage: string;
  userState: {
    profileData: ProfileData;
  };
  dialogState: {
    contacts: DialogData[];
  };
}

export default class App {
  state: AppState;

  appElement: HTMLElement | null;

  constructor() {
    this.state = {
      currentPage: 'message',
      userState: {
        profileData,
      },
      dialogState: {
        contacts,
      },
    };
    this.appElement = document.getElementById('app');
  }

  render() {
    if (this.state.currentPage === 'auth') {
      const authPage = new AuthPage();
      const template = authPage.getContent();
      if (this.appElement && template) {
        this.appElement.replaceChildren(template);
      }
    } else if (this.state.currentPage === 'signIn') {
      const signInPage = new SignInPage();
      const template = signInPage.getContent();
      if (this.appElement && template) {
        this.appElement.replaceChildren(template);
      }
    } else if (this.state.currentPage === 'message') {
      const messagesPage = new MessagesPage({
        contacts,
      });
      const template = messagesPage.getContent();
      if (this.appElement && template) {
        this.appElement.replaceChildren(template);
      }
    } else if (this.state.currentPage === 'profile') {
      const profilePage = new ProfilePage({
        profileData: this.state.userState.profileData,
      });
      const template = profilePage.getContent();
      if (this.appElement && template) {
        this.appElement.replaceChildren(template);
      }
    } else if (this.state.currentPage === 'profileEdit') {
      const profileEditPage = new ProfileEditPage({
        profileData: this.state.userState.profileData,
      });
      const template = profileEditPage.getContent();
      if (this.appElement && template) {
        this.appElement.replaceChildren(template);
      }
    } else if (this.state.currentPage === 'passwordEdit') {
      const passwordEditPage = new PasswordEditPage();
      const template = passwordEditPage.getContent();
      if (this.appElement && template) {
        this.appElement.replaceChildren(template);
      }
    } else if (this.state.currentPage === 'avatarEdit') {
      const avatarEditPage = new AvatarEditPage();
      const template = avatarEditPage.getContent();
      if (this.appElement && template) {
        this.appElement.replaceChildren(template);
      }
    } else {
      const notFound = new NotFoundPage();
      const template = notFound.getContent();
      if (this.appElement && template) {
        this.appElement.replaceChildren(template);
        this.state.currentPage = 'notFound';
      }
    }
    this.attachEventListeners();
  }

  attachEventListeners() {
    if (this.state.currentPage === 'auth') {
      const authButton = document.getElementById('auth-button');
      const singInButton = document.getElementById('sign-in-button');
      authButton?.addEventListener('click', (e) => {
        e.preventDefault();
        this.changePage('message');
      });
      singInButton?.addEventListener('click', (e) => {
        e.preventDefault();
        this.changePage('signIn');
      });
    }
    if (this.state.currentPage === 'signIn') {
      const registerButton = document.getElementById('register-button');
      const enterButton = document.getElementById('enter-button');
      registerButton?.addEventListener('click', (e) => {
        e.preventDefault();
        this.changePage('auth');
      });
      enterButton?.addEventListener('click', (e) => {
        e.preventDefault();
        this.changePage('auth');
      });
    }
    if (this.state.currentPage === 'message') {
      const settingButton = document.getElementById('logo-setting');
      settingButton?.addEventListener('click', (e) => {
        e.preventDefault();
        this.changePage('profile');
      });
    }
    if (this.state.currentPage === 'profile') {
      const exitButton = document.getElementById('exit');
      const editDataButton = document.getElementById('edit-data');
      const editPasswordButton = document.getElementById('edit-password');
      const editAvatarButton = document.getElementById('profile-avatar');
      exitButton?.addEventListener('click', (e) => {
        e.preventDefault();
        this.changePage('auth');
      });
      editDataButton?.addEventListener('click', (e) => {
        e.preventDefault();
        this.changePage('profileEdit');
      });
      editPasswordButton?.addEventListener('click', (e) => {
        e.preventDefault();
        this.changePage('passwordEdit');
      });
      editAvatarButton?.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('avatarEdit');
        this.changePage('avatarEdit');
      });
    }
    if (this.state.currentPage === 'profileEdit') {
      const saveButton = document.getElementById('save-profile');
      saveButton?.addEventListener('click', (e) => {
        e.preventDefault();
        this.changePage('profile');
      });
    }
    if (this.state.currentPage === 'passwordEdit') {
      const saveButton = document.getElementById('save-password');
      saveButton?.addEventListener('click', (e) => {
        e.preventDefault();
        this.changePage('profile');
      });
    }
    if (this.state.currentPage === 'notFound') {
      const returnButton = document.getElementById('return');
      returnButton?.addEventListener('click', (e) => {
        e.preventDefault();
        this.changePage('auth');
      });
    }
  }

  changePage = (page: string): void => {
    this.state.currentPage = page;
    this.render();
  };
}
