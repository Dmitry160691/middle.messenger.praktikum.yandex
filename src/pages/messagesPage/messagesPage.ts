import { Button } from '../../components/Button';
import { Contact } from '../../components/Contact';
import { Dialog } from '../../components/Dialog';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
import Block from '../../framework/Block';

interface PageProps {
  contacts: any,
  dialog?: any,
}

export class MessagesPage extends Block {
  constructor(props: PageProps) {
    super({
      LogoStar:  new Logo({
        src: 'star',
        alt: 'Звезда',
      }),
      LogoSetting:  new Logo({
        id: 'logo-setting',
        src: 'cogwheel',
        alt: 'Шестеренка',
        onClick: () => {
          console.log('nav -> profile');
        },
      }),
      InputMessage: new Input({
        id: 'message',
        name: 'message',
        type: 'text',
        placeholder:'Сообщение',
        onClick: () => {
          console.log('message');
        },
      }),
      ButtonSend:  new Button({
        id: 'send-mail-button',
        text: 'Отправить',
        onClick: () => {
          console.log('puff', props.contacts);
        },
      }),
      Contacts: props.contacts.map(
        (i) =>
          new Contact({
            name: i.name,
            time: i.time,
            you: i.you,
            text: i.text,
          }),
      ),
      Dialog: props.dialog.map(
        (item) =>
          new Dialog({
            text: item.text,
            isYou: item.isYou,
            // onClick: () => {
            //   this.setProps({
            //     selectedChat: currentChat,
            //   });
            // },
          }),
      ),
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
