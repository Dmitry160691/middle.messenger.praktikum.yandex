import Block from '../framework/Block';
import { MessagesState } from '../types/api';

interface ContactProps {
  currentChat?: MessagesState;
  isActive?: boolean;
  selectContact?: number;
  onClick?: () => void;
}

export class Contact extends Block<StringIndexed> {
  constructor(props: ContactProps) {
    super({
      ...props,
      shortMesseng:
        props.currentChat?.last_message?.content &&
        (props.currentChat.last_message.content.length > 25
          ? props.currentChat.last_message.content.slice(0, 25) + '...'
          : props.currentChat.last_message.content),
      events: {
        click: () => {
          props.onClick && props.onClick();
        },
      },
      selectContact: props.selectContact,
      currentChat: props.currentChat,
    });
  }

  render(): string {
    return `
    <div>
    <div class="contact-container {{#if (ifEquals selectContact currentChat.id)}}contact-selected{{/if}}">
  <div class="contact-avatar">{{#if currentChat.avatar }}<img src="{{currentChat.avatar}} />"{{else}}{{/if}}</div>
  <div class="contact">
    <div class="contact-header">
      <div class="contact-name"><p>{{currentChat.title}}</p></div>
      
    </div>
    <div class="contact-text">
    {{#if currentChat.last_message }}
    <p>{{shortMesseng}}</p>
    {{else}}
    {{/if}}</div>
  </div>
</div>
<hr />
</div>`;
  }
}
