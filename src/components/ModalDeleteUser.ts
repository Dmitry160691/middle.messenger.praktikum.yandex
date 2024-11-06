import chatsController from '../controllers/ChatController';
import Block from '../framework/Block';
import { store } from '../framework/Store';
import { validation } from '../utils/validationField';
import { Button } from './Button';
import { ButtonSecond } from './ButtonSecond';
import { InputContainer } from './InputContainer';
interface ModalProps {
  onClick: () => void;
}

export class ModalDeleteUser extends Block<StringIndexed> {
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
      DeliteButton: new Button({
        text: 'Удалить',
        disabled: true,
        onClick: async () => {
          if (this.props.userId && this.props.selectedContact.id) {
            await chatsController.removeUserFromChat(
              this.props.selectedContact.id,
              this.props.userId,
            );

            store.set('modalRemoveUserVisible', false);
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
        <div >
          Удалить пользователя из чат
        </div>
        <div>
          {{{Input}}}
          <div >
            {{{ DeliteButton }}}
            {{{CloseButton}}}
          </div>
        </div>
      </div>
    `;
  }
}
