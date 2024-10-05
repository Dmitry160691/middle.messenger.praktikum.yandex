import { Button } from '../../components/Button';
import { Contact } from '../../components/Contact';
import { Dialog } from '../../components/Dialog';
import { Input } from '../../components/Input';
import { InputContainer } from '../../components/InputContainer';
import { Logo } from '../../components/Logo';
import Block from '../../framework/Block';
import { validation } from '../../utils/validField';

interface PageProps {
  contacts: any,
  selectContact?: any,
}

export class MessagesPage extends Block {
  constructor({ contacts, selectContact }: PageProps) {
    super({
      LogoStar:  new Logo({
        src: 'star',
        alt: 'Звезда',
      }),
      LogoSetting:  new Logo({
        id: 'logo-setting',
        src: 'cogwheel',
        alt: 'Шестеренка',
      }),
      ButtonSend:  new Button({
        id: 'send-mail-button',
        text: 'Отправить',
        onClick: () => {
          console.log({ message: this.props.message });
        },
        
      }),
      InputMessage: new InputContainer({
        id: 'message',
        name: 'message',
        type: 'text',
        placeholder:'Сообщение',
        onBlur: (e) => {
          if (e.target instanceof HTMLInputElement) {
            const message = { message: e.target.value };
            const messageError = validation('message', message.message)
            this.setProps({
              ...message,
              disabled: !!messageError
            });
            return messageError
          }
          return ''
        },
      }),
      Contacts: contacts.map(
        (item) => {
          return new Contact({
            name: item.name,
            lastDialog: item.dialog[item.dialog.length - 1 ],
            selectContact: selectContact,
            onClick: () => {
              this.setProps({
                selectContact: item,
              });
              console.log(this.props.selectContact);
            },
          });
        },
      ),
      Dialog:  new Dialog(),
    });
  }

  lastMessage(arr: any[]): any {
    if (arr.length) {
      return arr[arr.length - 1];
    }
    return [];
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
      <div class="messages-list-header">
        <div class="contact-avatar"></div>
        <p>Имя</p>
      </div>
      <hr />
      <div class="messages-list-dialog">
        {{{Dialog}}}
      </div>
      <hr />
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
