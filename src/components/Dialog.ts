import Block from '../framework/Block';

export class Dialog extends Block {
  constructor() {
    super({
      events: {
        click: () => {
          console.log(this.props.selectContact);
        },
      },
    });
  }

  render(): string {
    return `
    <div>
      <div class="messages-list-header">
        <div class="contact-avatar"></div>
        <p>{{selectContact.name}}</p>
      </div>
      <div class="messages-list-dialog">
       {{#if selectContact.dialog.length }}
          {{# each selectContact.dialog}}
            <div 
              {{#if isYou}}
                class="send"
                {{else}}
                class="receive"
              {{/if}}
              >
              <p>{{text}}</p>
              </div>
         {{/each}}
         {{else}}
            <div>С кем хотите пообщаться?</div>
        {{/if}}
         </div>
      </div>
    `;
  }
}
