import Block from '../framework/Block';
import { Input } from './Input';

interface InputContainerProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value?: string;
  onBlur: (e: Event) => string;
}

export class InputContainer extends Block {
  constructor(props: InputContainerProps) {
    super({
      ...props,
      Input: new Input({
        ...props,
        onBlur: (e: Event) => {
          if (props.onBlur) {
            const error = props.onBlur(e);
            const message = !!error ? error : undefined
            this.setProps({
              message: message,
            });
          }
        },
      }),
    });
  }

  render(): string {
    return `<div class="inputContainer">
              {{{ Input }}}
              {{# if message }}<div class="helper-message">{{ message }}</div>{{/if}}
          </div>`;
  }
}

