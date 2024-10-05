import { Button } from '../../components/Button';
import Block from '../../framework/Block';

export class NotFoundPage extends Block {
  constructor() {
    super({
      Button: new Button({
        id: 'return',
        text: 'На главную',
      }),
    });
  }

  render() {
    return `
    <div class="app">
  <div class="profile-container">
    <main>
      <h1>404</h1>
      <h3>Не туда попали</h3>
  </main>
  <footer>
    {{{Button}}}
  </footer>
  </div>
</div>
`;
  }
}
