import Block from '../framework/Block';

interface ButtonProps {
  id: string;
  text: string;
  class?: string;
  onClick?: (e: Event) => void;
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super({
      ...props,
      events: {
        click: (e: Event) => props.onClick && props.onClick(e),
      },
    });
  }

  render(): string {
    return '<button id="{{id}}" class="button">{{text}}</button>';
  }
}