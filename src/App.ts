import { AuthPage } from './pages/AuthPage';
import { MessagesPage } from './pages/MessagesPage';
import { contacts, profileData } from './mockData.js';
import { ProfilePage } from './pages/Profile';
import { ProfileEditPage } from './pages/ProfileEdit';
import { AvatarEditPage } from './pages/AvatarEdit';
import { PasswordEditPage } from './pages/PasswordEdit';
import { NotFoundPage } from './pages/NotFoundPage';
import { Pages } from './types';
import { SignInPage } from './pages/SingInPage';

interface AppState {
  currentPage: Pages;
  userState;
  dialogState;
}

export default class App {
  state: AppState;

  appElement: HTMLElement | null;

  constructor() {
    this.state = {
      currentPage: Pages.auth,
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
    if (this.state.currentPage === Pages.auth) {
      const authPage = new AuthPage({
        link: (path) => this.changePage(path),
      });
      const template = authPage.getContent();
      if (this.appElement && template) {
        this.appElement.replaceChildren(template);
      }
    } else if (this.state.currentPage === Pages.signIn) {
      const signInPage = new SignInPage({
        link: (path) => this.changePage(path),
      });
      const template = signInPage.getContent();
      if (this.appElement && template) {
        this.appElement.replaceChildren(template);
      }
    } else if (this.state.currentPage === Pages.message) {
      const messagesPage = new MessagesPage({
        contacts,
        link: (path) => this.changePage(path),
      });
      const template = messagesPage.getContent();
      if (this.appElement && template) {
        this.appElement.replaceChildren(template);
      }
    } else if (this.state.currentPage === Pages.profile) {
      const profilePage = new ProfilePage({
        profileData: this.state.userState.profileData,
        link: (path) => this.changePage(path),
      });
      const template = profilePage.getContent();
      if (this.appElement && template) {
        this.appElement.replaceChildren(template);
      }
    } else if (this.state.currentPage === Pages.profileEdit) {
      const profileEditPage = new ProfileEditPage({
        profileData: this.state.userState.profileData,
        link: (path) => this.changePage(path),
      });
      const template = profileEditPage.getContent();
      if (this.appElement && template) {
        this.appElement.replaceChildren(template);
      }
    } else if (this.state.currentPage === Pages.passwordEdit) {
      const passwordEditPage = new PasswordEditPage({
        link: (path) => this.changePage(path),
      });
      const template = passwordEditPage.getContent();
      if (this.appElement && template) {
        this.appElement.replaceChildren(template);
      }
    } else if (this.state.currentPage === Pages.avatarEdit) {
      const avatarEditPage = new AvatarEditPage();
      const template = avatarEditPage.getContent();
      if (this.appElement && template) {
        this.appElement.replaceChildren(template);
      }
    } else {
      const notFound = new NotFoundPage({
        link: (path: Pages ) => this.changePage(path),
      });
      const template = notFound.getContent();
      if (this.appElement && template) {
        this.appElement.replaceChildren(template);
        this.state.currentPage = Pages.notFound;
      }
    }
  }

  changePage = (page: Pages): void => {
    this.state.currentPage = page;
    this.render();
  };
}
