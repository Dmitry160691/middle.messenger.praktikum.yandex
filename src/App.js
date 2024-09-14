import Handlebars from "handlebars";
import * as Pages from "./pages";
import { contacts, dialog, profileData } from "./mockData.js";

import Input from "./components/Input.js";
import Button from "./components/Button.js";
import Logo from "./components/Logo.js";
import Contact from "./components/Contact.js";
import Dialog from "./components/Dialog.js";
import FieldProfile from "./components/FieldProfile.js";
import FieldEditProfile from "./components/FieldEditProfile.js";

Handlebars.registerPartial("Input", Input);
Handlebars.registerPartial("Button", Button);
Handlebars.registerPartial("Logo", Logo);
Handlebars.registerPartial("Contact", Contact);
Handlebars.registerPartial("Dialog", Dialog);
Handlebars.registerPartial("FieldProfile", FieldProfile);
Handlebars.registerPartial("FieldEditProfile", FieldEditProfile);

export default class App {
  constructor() {
    this.state = {
      currentPage: "auth",
    };
    this.appElement = document.getElementById("app");
  }

  render() {
    let template;
    if (this.state.currentPage === "auth") {
      template = Handlebars.compile(Pages.AuthPage);
      this.appElement.innerHTML = template();
    } else if (this.state.currentPage === "singIn") {
      template = Handlebars.compile(Pages.SingInPage);
      this.appElement.innerHTML = template();
    } else if (this.state.currentPage === "message") {
      template = Handlebars.compile(Pages.MessagesPage);
      this.appElement.innerHTML = template({
        contacts,
        dialog,
      });
    } else if (this.state.currentPage === "profile") {
      template = Handlebars.compile(Pages.ProfilePage);
      this.appElement.innerHTML = template(profileData);
    } else if (this.state.currentPage === "profileEdit") {
      template = Handlebars.compile(Pages.ProfileEditPage);
      this.appElement.innerHTML = template(profileData);
    } else if (this.state.currentPage === "passwordEdit") {
      template = Handlebars.compile(Pages.PasswordEditPage);
      this.appElement.innerHTML = template();
    } else if (this.state.currentPage === "avatarEdit") {
      template = Handlebars.compile(Pages.AvatarEditPage);
      this.appElement.innerHTML = template();
    } else {
      template = Handlebars.compile(Pages.NotFoundPage);
      this.appElement.innerHTML = template();
    }
    this.attachEventListeners();
  }

  attachEventListeners() {
    if (this.state.currentPage === "auth") {
      const authButton = document.getElementById("auth-button");
      const singInButton = document.getElementById("sign-in-button");
      authButton.addEventListener("click", (e) => {
        e.preventDefault();
        this.changePage("message");
      });

      singInButton.addEventListener("click", (e) => {
        e.preventDefault();
        this.changePage("singIn");
      });
    }
    if (this.state.currentPage === "singIn") {
      const registerButton = document.getElementById("register-button");
      const enterButton = document.getElementById("enter-button");
      registerButton.addEventListener("click", (e) => {
        e.preventDefault();
        this.changePage("auth");
      });

      enterButton.addEventListener("click", (e) => {
        e.preventDefault();
        this.changePage("auth");
      });
    }
    if (this.state.currentPage === "message") {
      const settingButton = document.getElementById("logo-setting");
      settingButton.addEventListener("click", (e) => {
        e.preventDefault();
        this.changePage("profile");
      });
    }
    if (this.state.currentPage === "profile") {
      const exitButton = document.getElementById("exit");
      const editDataButton = document.getElementById("edit-data");
      const editPasswordButton = document.getElementById("edit-password");
      const editAvatarButton = document.getElementById("profile-avatar");
      exitButton.addEventListener("click", (e) => {
        e.preventDefault();
        this.changePage("auth");
      });
      editDataButton.addEventListener("click", (e) => {
        e.preventDefault();
        this.changePage("profileEdit");
      });
      editPasswordButton.addEventListener("click", (e) => {
        e.preventDefault();
        this.changePage("passwordEdit");
      });
      editAvatarButton.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("avatarEdit");
        this.changePage("avatarEdit");
      });
    }
    if (this.state.currentPage === "profileEdit") {
      const saveButton = document.getElementById("save-profile");
      saveButton.addEventListener("click", (e) => {
        e.preventDefault();
        this.changePage("profile");
      });
    }
    if (this.state.currentPage === "passwordEdit") {
      const saveButton = document.getElementById("save-password");
      saveButton.addEventListener("click", (e) => {
        e.preventDefault();
        this.changePage("profile");
      });
    }
  }

  changePage(page) {
    this.state.currentPage = page;
    this.render();
  }
}
