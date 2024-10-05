import Block from '../framework/Block';

interface LogoProps {
  id?: string;
  src: string;
  alt: string;
  onClick?: (e: Event) => void;
}

export class Logo extends Block {
  constructor(props: LogoProps) {
    super({
      ...props,
      events: {
        click: (e: Event) => props.onClick && props.onClick(e),
      },
    });
  }

  render(): string {
    return '<div id="{{id}}" class="logo"><img src={{src}} alt={{alt}}></div>';
  }
}
