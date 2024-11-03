import { Button } from '../../components/Button';
import { Contact } from '../../components/Contact';
import { Dialog } from '../../components/Dialog';
import { InputContainer } from '../../components/InputContainer';
import { Logo } from '../../components/Logo';
import Block from '../../framework/Block';
import { DialogData } from '../../types';
import { validation } from '../../utils/validationField';

interface PageProps {
  contacts: DialogData[];
  selectContact?: DialogData;
}

export class MessagesPage extends Block {
  constructor({ contacts, selectContact }: PageProps) {
    super({
      LogoStar: new Logo({
        class: 'logo-star',
      }),
      LogoSetting: new Logo({
        id: 'logo-setting',
        class: 'logo-setting',
      }),
      ButtonSend: new Button({
        id: 'send-mail-button',
        text: 'Отправить',
        disabled: true,
        onClick: () => {
          if (this.props.message) {
            console.log({ message: this.props.message });
          }
        },
      }),
      InputMessage: new InputContainer({
        id: 'message',
        name: 'message',
        type: 'text',
        placeholder: 'Сообщение',
        onBlur: (e) => {
          if (e.target instanceof HTMLInputElement) {
            const message = { message: e.target.value };
            const messageError = validation('message', message.message);
            this.setProps({
              ...message,
              disabled: !!messageError,
            });
            return messageError;
          }
          return '';
        },
      }),
      Contacts: contacts.map((item) => {
        return new Contact({
          contactInfo: item,
          lastDialog: item.dialog[item.dialog.length - 1],
          selectContact: selectContact,
          onClick: () => {
            this.setProps({
              selectContact: item,
            });
          },
        });
      }),
      Dialog: new Dialog(),
    });
  }

  render() {
    return `
    <div class="app">
  <div class="messages-container">
    <sidebar class="contact-list">
      <div class="contact-list-header">
        <div class="logo-container">
          {{{LogoStar}}}
          <p>RED STAR</p>
        </div>
        {{{LogoSetting}}}
      </div>
      <hr />
      {{{Contacts}}}
    </sidebar>
    <main class="messages-list">
      {{{Dialog}}}
      <div class="messages-list-footer">
        {{{InputMessage}}}
        {{{ButtonSend}}}
      </div>
    </main>
  </div>
</div>
`;
  }
}
