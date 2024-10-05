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
      const authPage = new AuthPage({
        link: (path) => this.changePage(path),
      });
      const template = authPage.getContent();
      if (this.appElement && template) {
        this.appElement.replaceChildren(template);
      }
    } else if (this.state.currentPage === 'singIn') {
      const singInPage = new SignInPage({
        link: (path) => this.changePage(path),
      });
      const template = singInPage.getContent();
      if (this.appElement && template) {
        this.appElement.replaceChildren(template);
      }
    } else if (this.state.currentPage === 'message') {
      const messagesPage = new MessagesPage({
        contacts,
        link: (path) => this.changePage(path),
      });
      const template = messagesPage.getContent();
      if (this.appElement && template) {
        this.appElement.replaceChildren(template);
      }
    } else if (this.state.currentPage === 'profile') {
      const profilePage = new ProfilePage({
        profileData: this.state.userState.profileData,
        link: (path) => this.changePage(path),
      });
      const template = profilePage.getContent();
      if (this.appElement && template) {
        this.appElement.replaceChildren(template);
      }
    } else if (this.state.currentPage === 'profileEdit') {
      const profileEditPage = new ProfileEditPage({
        profileData: this.state.userState.profileData,
        link: (path) => this.changePage(path),
      });
      const template = profileEditPage.getContent();
      if (this.appElement && template) {
        this.appElement.replaceChildren(template);
      }
    } else if (this.state.currentPage === 'passwordEdit') {
      const passwordEditPage = new PasswordEditPage({
        link: (path) => this.changePage(path),
      });
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
      const notFound = new NotFoundPage({
        link: (path) => this.changePage(path),
      });
      const template = notFound.getContent();
      if (this.appElement && template) {
        this.appElement.replaceChildren(template);
        this.state.currentPage = 'notFound';
      }
    }
  }

  changePage = (page: string): void => {
    this.state.currentPage = page;
    this.render();
  };
}
