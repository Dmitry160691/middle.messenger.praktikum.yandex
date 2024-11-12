import { Block } from '../framework/Block';
import { Input } from './Input';

interface InputContainerProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value?: string;
  label?: string;
  onBlur: (e: Event) => string;
}

export class InputContainer extends Block<StringIndexed> {
  constructor(props: InputContainerProps) {
    super({
      Input: new Input({
        ...props,
        onBlur: (e: Event) => {
          if (props.onBlur) {
            const error = props.onBlur(e);
            const messageError = !!error ? error : undefined;
            this.setProps({
              messageError: messageError,
            });
          }
        },
      }),
    });
  }

  render(): string {
    return `<div class="inputContainer">
              {{# if label }}<p>{{ label }}</p>{{/if}}
              {{{ Input }}}
              {{# if messageError }}<div class="helper-message">{{ messageError }}</div>{{/if}}
          </div>`;
  }
}
