import './styles/main.pcss';
import { router } from './framework/Router';
import { AuthPage } from './pages/authPage/authPage';
import MessagesPage from './pages/messagesPage/messagesPage';
import { NotFoundPage } from './pages/notFoundPage/notFoundPage';
import { PasswordEditPage } from './pages/PasswordEdit/passwordEditPage';
import { ProfilePage } from './pages/Profile/profilePage';
import { SignInPage } from './pages/singInPage/signInPage';
import Handlebars from 'handlebars';
import { ProfileEditPage } from './pages/ProfileEdit';
import { ErrorPage } from './pages/errorPage/errorPage';

Handlebars.registerHelper('ifEquals', function (arg1, arg2) {
  return arg1 === arg2;
});

const routes: Record<string, string> = {
  SignInPage: '/sign-up',
  AuthPage: '/',
  ProfilePage: '/settings',
  MessagesPage: '/messenger',
  NotFoundPage: '/404',
  ErrorPage: '/500',
  PasswordEditPage: '/settings/change-password',
  ProfileEditPage: '/settings/change-data',
};

const pages: StringIndexed = {
  SignInPage,
  AuthPage,
  ProfilePage,
  MessagesPage,
  NotFoundPage,
  ErrorPage,
  PasswordEditPage,
  ProfileEditPage,
};

document.addEventListener('DOMContentLoaded', () => {
  Object.keys(pages).forEach((page) => {
    router.use(routes[page], pages[page]);
  });
  router.start();
});
