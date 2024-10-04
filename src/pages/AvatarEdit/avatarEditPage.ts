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
        onBlur: (e) => {
          if (e.target instanceof HTMLInputElement) {
            const avatar = { avatar: e.target.value };
            this.setProps({
              ...avatar,
            });
          }
        },
      }),
      ButtonSave:  new Button({
        id: 'save-avatar',
        text: 'Поменять',
        onClick: () => {
          console.log(
            {
              avatar: this.props.avatar,
            },
          );
        },
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
