import Block from '../framework/Block';

interface ContactProps {
  name: string;
  time: string;
  you: boolean;
  text: string;
}

export class Contact extends Block {
  constructor(props: ContactProps) {
    super({ ...props });
  }

  render(): string {
    
    return `
    <div>
    <div class="contact-container">
  <div class="contact-avatar"></div>
  <div class="contact">
    <div class="contact-header">
      <div class="contact-name"><p>{{name}}</p></div>
      <div class="contact-time"><p>{{time}}</p></div>
    </div>
    <div class="contact-text">{{#if you}}<p>Вы: </p>{{/if}}<p>{{text}}</p></div>
  </div>
</div>
<hr />
</div>`;
  }
}