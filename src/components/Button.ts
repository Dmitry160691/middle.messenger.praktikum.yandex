import { Block } from '../framework/Block';

interface ButtonProps {
  id?: string;
  text: string;
  class?: string;
  onClick?: (e: Event) => void;
  disabled?: boolean;
}

export class Button extends Block<StringIndexed> {
  constructor(props: ButtonProps) {
    super({
      ...props,
      events: {
        click: (e: Event) => props.onClick && props.onClick(e),
      },
    });
  }

  render(): string {
    return '<button id="{{id}}" {{#if disabled}}disabled{{/if}} class="button">{{text}}</button>';
  }
}
