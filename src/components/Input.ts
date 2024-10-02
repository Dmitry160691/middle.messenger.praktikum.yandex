import Block from '../framework/Block';

interface InputProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  onClick?: (e: Event) => void;
}

export class Input extends Block {
  constructor(props: InputProps) {
    super({
      ...props,
      events: {
        click: (e: Event) => props.onClick && props.onClick(e),
      },
    });
  }

  render(): string {
    return '<input id="{{id}}" name="{{name}}" type="{{type}}" placeholder="{{placeholder}}" value="{{value}}" class="input">';
  }
}