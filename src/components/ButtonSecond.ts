import Block from '../framework/Block';

interface ButtonSecondProps {
  id: string;
  text: string;
  class?: string;
  onClick?: (e: Event) => void;
}

export class ButtonSecond extends Block {
  constructor(props: ButtonSecondProps) {
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
