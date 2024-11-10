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

export class ModalNewChat extends Block<StringIndexed> {
  constructor(props: ModalProps) {
    super({
      ...props,
      Input: new InputContainer({
        id: 'create-chat',
        name: 'create-chat',
        type: 'text',
        placeholder: 'Придумайте название',
        onBlur: (e) => {
          if (e.target instanceof HTMLInputElement) {
            const chatTitle = { chatTitle: e.target.value };
            const messageError = validation('chatTitle', chatTitle.chatTitle);
            this.setProps({
              ...chatTitle,
              disabled: !!messageError,
            });
            return messageError;
          }
          return '';
        },
      }),
      SaveButton: new Button({
        id: 'create-chat',
        text: 'Создать',
        disabled: true,
        onClick: async () => {
          if (this.props.chatTitle) {
            await chatsController.create(this.props.chatTitle);

            store.set('modalIsVisible', false);
          }
        },
      }),
      CloseButton: new ButtonSecond({
        id: 'ca',
        class: 'create-chat-cancel',
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
          Создать чат
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
