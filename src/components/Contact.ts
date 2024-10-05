import Block from '../framework/Block';
import { DialogData, DialogMessage } from '../types/types';

interface ContactProps {
  name: string;
  lastDialog: DialogMessage;
  selectContact?: DialogData
  onClick?: () => void;
}

export class Contact extends Block {
  constructor(props: ContactProps) {
    super({ 
      ...props,
      events: {
        click: () => {
          props.onClick();
        },
      },
    });
  }

  render(): string {
    return `
    <div>
    <div class="contact-container">
  <div class="contact-avatar"></div>
  <div class="contact">
    <div class="contact-header">
      <div class="contact-name"><p>{{name}}</p></div>
      <div class="contact-time"><p>{{lastDialog.time}}</p></div>
    </div>
    <div class="contact-text">{{#if lastDialog.isYou}}<p>Вы: </p>{{/if}}<p>{{lastDialog.text}}</p></div>
  </div>
</div>
<hr />
</div>`;
  }
}