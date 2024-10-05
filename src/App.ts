import { AuthPage } from './pages/authPage/authPage';
import { MessagesPage } from './pages/messagesPage/messagesPage';
import { SignInPage } from './pages/singInPage/signInPage';
import { contacts, profileData } from './mockData.js';
import { ProfilePage } from './pages/Profile/profilePage';
import { ProfileEditPage } from './pages/ProfileEdit/profileEditPage';
import { AvatarEditPage } from './pages/AvatarEdit/avatarEditPage';
import { PasswordEditPage } from './pages/PasswordEdit/passwordEditPage';
import { NotFoundPage } from './pages/notFoundPage/notFoundPage';
// import star from "./assets/red-star.svg";
// import cogwheel from "./assets/cogwheel.svg";

interface AppState {
  currentPage: string;
  userState;
  dialogState;
}

export default class App {
  state: AppState;

  appElement: HTMLElement | null;

  constructor() {
    this.state = {
      currentPage: 'auth',
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
    } else if (this.state.currentPage === 'singIn') {
      const singInPage = new SignInPage();
      const template = singInPage.getContent();
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
      authButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.changePage('message');
      });

      singInButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.changePage('singIn');
      });
    }
    if (this.state.currentPage === 'singIn') {
      const registerButton = document.getElementById('register-button');
      const enterButton = document.getElementById('enter-button');
      registerButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.changePage('auth');
      });

      enterButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.changePage('auth');
      });
    }
    if (this.state.currentPage === 'message') {
      const settingButton = document.getElementById('logo-setting');
      settingButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.changePage('profile');
      });
    }
    if (this.state.currentPage === 'profile') {
      const exitButton = document.getElementById('exit');
      const editDataButton = document.getElementById('edit-data');
      const editPasswordButton = document.getElementById('edit-password');
      const editAvatarButton = document.getElementById('profile-avatar');
      exitButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.changePage('auth');
      });
      editDataButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.changePage('profileEdit');
      });
      editPasswordButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.changePage('passwordEdit');
      });
      editAvatarButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('avatarEdit');
        this.changePage('avatarEdit');
      });
    }
    if (this.state.currentPage === 'profileEdit') {
      const saveButton = document.getElementById('save-profile');
      saveButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.changePage('profile');
      });
    }
    if (this.state.currentPage === 'passwordEdit') {
      const saveButton = document.getElementById('save-password');
      saveButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.changePage('profile');
      });
    }
    if (this.state.currentPage === 'notFound') {
      const returnButton = document.getElementById('return');
      returnButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.changePage('auth');
      });
    }
  }

  changePage = (page: string) :void => {
    this.state.currentPage = page;
    this.render();
  };
}
