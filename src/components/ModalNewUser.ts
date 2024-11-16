import chatsController from '../controllers/ChatController';
import { Block } from '../framework/Block';
import { store } from '../framework/Store';
import { validation } from '../utils/validationField';
import { Button } from './Button';
import { ButtonSecond } from './ButtonSecond';
import { InputContainer } from './InputContainer';

interface ModalProps {
  onClick: () => void;
}

export class ModalNewUser extends Block<StringIndexed> {
  constructor(props: ModalProps) {
    super({
      ...props,
      Input: new InputContainer({
        id: 'add-user',
        name: 'add-user',
        type: 'text',
        placeholder: 'Id пользователя',
        onBlur: (e) => {
          if (e.target instanceof HTMLInputElement) {
            const userId = { userId: e.target.value };
            const messageError = validation('chatTitle', userId.userId);
            this.setProps({
              ...userId,
              disabled: !!messageError,
            });
          }
          return '';
        },
      }),
      SaveButton: new Button({
        text: 'Добавить',
        disabled: true,
        onClick: async () => {
          if (this.props.userId && this.props.selectedContact.id) {
            await chatsController.addUserToChat(this.props.selectedContact.id, this.props.userId);
            store.set('modalAddUserVisible', false);
          }
        },
      }),
      CloseButton: new ButtonSecond({
        text: 'Отмена',
        onClick: () => {
          props.onClick && props.onClick();
        },
      }),
    });
  }

  render() {
    return `
      <div class="modal-container">
        <div>
          Добавить пользователя в чат
        </div>
        <div>
          {{{Input}}}
          <div>
            {{{ SaveButton }}}
            {{{CloseButton}}}
          </div>
        </div>
      </div>
    `;
  }
}
