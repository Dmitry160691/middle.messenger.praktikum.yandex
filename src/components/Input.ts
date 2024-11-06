import Block from '../framework/Block';

export interface InputProps {
  id: string;
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
  onBlur?: (e: Event) => void;
  onClick?: (e: Event) => void;
  onChange?: (e: Event) => void;
}

export class Input extends Block<StringIndexed> {
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
        change: (e: Event) => props.onChange && props.onChange(e),
        click: (e: Event) => props.onClick && props.onClick(e),
      },
    });
  }

  render() {
    return '<input id="{{id}}" {{#if readonly }}readonly{{/if}} type="{{#if type }}{{type}}{{else}}text{{/if}}" name="{{name}}" value="{{value}}" placeholder="{{placeholder}}" class="hidden-border {{#if class }}{{class}}{{else}}input{{/if}}"/>';
  }
}
