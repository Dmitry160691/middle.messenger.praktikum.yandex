import { Button } from '../../components/Button';
import { Contact } from '../../components/Contact';
import { Dialog } from '../../components/Dialog';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
import Block from '../../framework/Block';

interface PageProps {
  contacts: any,
  selectContact?: any,
}

export class MessagesPage extends Block {
  constructor({ contacts, selectContact }: PageProps) {
    super({
      LogoStar:  new Logo({
        src: 'star',
        alt: 'Звезда',
      }),
      LogoSetting:  new Logo({
        id: 'logo-setting',
        src: 'cogwheel',
        alt: 'Шестеренка',
      }),
      ButtonSend:  new Button({
        id: 'send-mail-button',
        text: 'Отправить',
        onClick: () => {
          console.log({ message: this.props.message });
          this.addMessage(this.props.message);
        },
        
      }),
      InputMessage: new Input({
        id: 'message',
        name: 'message',
        type: 'text',
        placeholder:'Сообщение',
        onBlur: (e) => {
          if (e.target instanceof HTMLInputElement) {
            const message = { message: e.target.value };
            this.setProps({
              ...message,
            });
          }
          return '';
        },
      }),
      Contacts: contacts.map(
        (item) => {
          return new Contact({
            name: item.name,
            lastDialog: item.dialog[item.dialog.length - 1 ],
            selectContact: selectContact,
            onClick: () => {
              this.setProps({
                selectContact: item,
              });
              console.log(this.props.selectContact);
            },
          });
        },
      ),
      // Dialog:  new Dialog({text:'Добрый день! Я в своем познании настолько преисполнился, что я как будто бы уже сто триллионов миллиардов лет проживаю на триллионах и триллионах таких же планет, как эта Земля, мне этот мир абсолютно понятен, и я здесь ищу только одного - покоя, умиротворения и вот этой гармонии, от слияния с бесконечно вечным...', isYou: true})
      Dialog:  new Dialog(),
    });
  }

  addMessage(value: string): void {
    // let di = (this.lists.Dialog as Array<Dialog>).concat(
    //   new Dialog({text: value, isYou: true})
    // );
    // this.setLists({ Dialog: di });
  }

  lastMessage(arr: any[]): any {
    if (arr.length) {
      return arr[arr.length - 1];
    }
    return [];
  }

  render() {
    return `
    <div class="app">
  <div class="messages-container">
    <sidebar class="contact-list">
      <div class="contact-list-header">
        <div class="logo-container">
          {{{LogoStar}}}
          <p>RED STAR</p>
        </div>
        {{{LogoSetting}}}
      </div>
      <hr />
      {{{Contacts}}}
    </sidebar>
    <main class="messages-list">
      <div class="messages-list-header">
        <div class="contact-avatar"></div>
        <p>Имя</p>
      </div>
      <hr />
      <div class="messages-list-dialog">
        {{{Dialog}}}
      </div>
      <hr />
      <div class="messages-list-footer">
        {{{InputMessage}}}
        {{{ButtonSend}}}
      </div>
    </main>
  </div>
</div>
`;
  }
}
