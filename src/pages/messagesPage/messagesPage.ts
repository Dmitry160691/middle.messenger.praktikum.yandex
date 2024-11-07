import { Button } from '../../components/Button';
import { ButtonSecond } from '../../components/ButtonSecond';
import { Contact } from '../../components/Contact';
import { Dialog } from '../../components/Dialog';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
import { ModalNewChat } from '../../components/ModalNewChat';
import chatsController from '../../controllers/ChatController';
import MessagesController from '../../controllers/MessagesController';
import Block from '../../framework/Block';
import { connect } from '../../framework/HOC';
import { router } from '../../framework/Router';
import { store } from '../../framework/Store';

class MessagesPage extends Block<StringIndexed> {
  constructor() {
    const { chats, selectedContact } = store.getState();
    super({
      Contacts: chats.map(
        (currentChat) =>
          new Contact({
            selectContact: selectedContact?.id,
            currentChat,
            onClick: () => {
              store.set('selectedContact', currentChat);
            },
          }),
      ),
      LogoStar: new Logo({
        class: 'logo-star',
      }),
      LogoSetting: new Logo({
        id: 'logo-setting',
        class: 'logo-setting',
        onClick: () => {
          router.go('/settings');
        },
      }),
      ButtonSend: new Button({
        id: 'send-mail-button',
        text: 'Отправить',
        disabled: true,
        onClick: async () => {
          const selectedContact = store.getState().selectedContact;

          if (selectedContact && this.props.messageForSend) {
            await MessagesController.postMessage(selectedContact?.id, this.props.messageForSend);
          }

          const AllMessages = store.getState().messages;

          console.log(store.getState().messages);

          const messages = Object.entries(AllMessages).find(
            (item) => Number(item[0]) === selectedContact?.id,
          );

          if (messages && !!messages.length) {
            store.set('activeMessages', messages[1]);
          }
        },
      }),
      InputMessage: new Input({
        id: 'message',
        name: 'message',
        type: 'text',
        placeholder: 'Сообщение',
        onBlur: (e) => {
          if (e.target instanceof HTMLInputElement) {
            const messageSend = e.target.value;
            store.set('messageForSend', messageSend);
            this.setProps({
              disabled: false,
            });
          }
        },
      }),
      Dialog: new Dialog(),
      ButtonNewChat: new ButtonSecond({
        id: 'new-chat-button',
        text: 'Новый чат',
        onClick: () => {
          store.set('modalIsVisible', true);

          const input = document.getElementById('createChatInput');

          if (input instanceof HTMLInputElement) {
            input.value = '';
          }
        },
      }),
      Modal: new ModalNewChat({
        onClick: () => {
          store.set('modalIsVisible', false);
        },
      }),
    });
    chatsController.getChats();
  }

  override render() {
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
      <div>
        {{{ButtonNewChat}}}
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
    {{#if modalIsVisible}} {{{Modal}}} {{/if}}
  </div>
</div>
`;
  }
}

export default connect(MessagesPage);
