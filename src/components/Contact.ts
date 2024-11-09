import Block from '../framework/Block';
import { MessagesState } from '../types/api';

interface ContactProps {
  currentChat: MessagesState;
  selectContact?: number;
  onClick?: () => void;
}

export class Contact extends Block<StringIndexed> {
  constructor(props: ContactProps) {
    super({
      ...props,
      selectContact: props.selectContact,
      currentChat: props.currentChat,
      events: {
        click: () => {
          props.onClick && props.onClick();
        },
      },
    });
  }

  render(): string {
    return `
    <div>
          <div class="contact-container {{#if (ifEquals selectContact currentChat.id)}}contact-selected{{/if}}">
                <div class="contact-avatar">
                <img class="chat-avatar" alt="аватар {{currentChat.title}}" src="{{#if currentChat.avatar }}https://ya-praktikum.tech/api/v2/resources{{currentChat.avatar}}{{else}}/src/assets/chat-avatar.svg{{/if}}"  />
                </div>
                  <div class="contact">
                    <div class="contact-header">
                      <div class="contact-name"><p>{{currentChat.title}}</p></div>
                      
                    </div>
                    
                  </div>
      </div>
      <hr />
</div>`;
  }
}
