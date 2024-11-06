import Block from '../framework/Block';

interface LogoProps {
  id?: string;
  class: string;
  onClick?: (e: Event) => void;
}

export class Logo extends Block<StringIndexed> {
  constructor(props: LogoProps) {
    super({
      ...props,
      events: {
        click: (e: Event) => props.onClick && props.onClick(e),
      },
    });
  }

  render(): string {
    return '<div id="{{id}}" class="{{class}}"></div>';
  }
}
