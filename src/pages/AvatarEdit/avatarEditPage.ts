import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import Block from '../../framework/Block';



export class AvatarEditPage extends Block {
  constructor() {
    super({
      InputAvatar: new Input({
        id: 'avatar',
        name: 'avatar',
        type: 'file',
        placeholder:'Аватар',
        // onClick: (event: Event) => {
        //   console.log('CLICK');
        //   event.preventDefault();
        //   event.stopPropagation();
        // },
      }),
      ButtonSave:  new Button({
        id: 'save-avatar',
        text: 'Поменять',
        // onClick: () => {
        //   nav('singIn');
        // },
      }),
    });
  }

  render() {
    return `
   <div class="app">
  <div class="profile-container">
    <main>
      {{{InputAvatar}}}
    </main>
    <footer>
     {{{ButtonSave}}}
    </footer>
  </div>
</div>`;
  }
}
