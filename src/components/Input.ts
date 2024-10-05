import Block from '../framework/Block';

interface InputProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value?: string;
  onBlur?: (e: Event) => void;
}

export class Input extends Block {
  constructor(props: InputProps) {
    super({
      ...props,
      events: {
        blur: (e: Event) => {
          if (props.onBlur) {
            props.onBlur(e);
          }
          if (e.target instanceof HTMLInputElement) {
            this.setProps({ value: e.target.value });
          }
        },
      },
    });
  }

  render(): string {
    return `
      <input id="{{id}}" name="{{name}}" type="{{type}}" placeholder="{{placeholder}}" value="{{value}}" class="input">
      `;
  }
}