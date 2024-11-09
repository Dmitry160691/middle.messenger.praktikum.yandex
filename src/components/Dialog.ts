import chatsController from '../controllers/ChatController';
import Block from '../framework/Block';
import { store } from '../framework/Store';
import { ModalNewUser } from './ModalNewUser';
import { ModalDeleteUser } from './ModalDeleteUser';
import { ButtonSecond } from './ButtonSecond';

export class Dialog extends Block<StringIndexed> {
  constructor() {
    super({
      DeleteChatButton: new ButtonSecond({
        text: '- Чат',
        onClick: async () => {
          const selectedContact = store.getState().selectedContact;

          if (selectedContact) {
            await chatsController.delete(selectedContact.id);

            store.set('selectedContact', { id: 0 });
          }
        },
      }),
      NewUserButton: new ButtonSecond({
        text: '+ Собеседник',
        onClick: async () => {
          store.set('modalAddUserVisible', true);
        },
      }),
      DeleteUserButton: new ButtonSecond({
        text: '- Собеседник',
        onClick: async () => {
          store.set('modalRemoveUserVisible', true);
        },
      }),
      ModalAddUser: new ModalNewUser({
        onClick: () => {
          store.set('modalAddUserVisible', false);
        },
      }),
      ModalRemoveUser: new ModalDeleteUser({
        onClick: () => {
          store.set('modalRemoveUserVisible', false);
        },
      }),
    });
  }

  override render(): string {
    return `
    <div>
      <div class="messages-list-header">
        <div class="contact-avatar">
        <img class="chat-avatar" alt="аватар {{currentChat.title}}" src="{{#if currentChat.avatar }}https://ya-praktikum.tech/api/v2/resources{{currentChat.avatar}}{{else}}/src/assets/chat-avatar.svg{{/if}}"  />
        </div>
        <p>{{selectedContact.title}}</p>
         <div class="chat-btn">
                {{{DeleteUserButton}}}
                  {{{NewUserButton}}}
                  {{{ DeleteChatButton }}}
                </div>
      </div>
      <hr />
      {{#if activeMessages }}
      <div class="messages-list-dialog">
          {{# each activeMessages}}
           <div 
           {{#if (ifEquals user_id ../../profileState.profile.id )}}
                class="receive"
                {{else}}
                class="send"
              {{/if}}
              >
              {{content}} 
              </div>
         {{/each}}
         </div>
         {{else}}
            <div class="messages-list-dialog">Сообщений пока нет</div>
        {{/if}}
          {{#if modalAddUserVisible}} {{{ModalAddUser}}} {{/if}}
          {{#if modalRemoveUserVisible}} {{{ModalRemoveUser}}} {{/if}}
      </div>
    `;
  }
}
