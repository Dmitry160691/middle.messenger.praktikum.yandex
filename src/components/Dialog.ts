import Block from '../framework/Block';

interface DialogProps {
  text: string;
  isYou: boolean;
}

export class Dialog extends Block {
  constructor(props: DialogProps) {
    super({ ...props });
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
