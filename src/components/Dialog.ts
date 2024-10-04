import Block from '../framework/Block';

export class Dialog extends Block {
  constructor() {
    super();
  }

  render(): string {
    return `
<div 
{{#if isYou}}
  class="send"
  {{else}}
  class="receive"
{{/if}}
>
{{text}}
</div>
`;
  }
}
