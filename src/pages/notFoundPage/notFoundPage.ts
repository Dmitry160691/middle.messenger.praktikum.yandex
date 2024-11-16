import { Button } from '../../components/Button';
import { Block } from '../../framework/Block';
import { router } from '../../framework/Router';

export class NotFoundPage extends Block<StringIndexed> {
  constructor() {
    super({
      Button: new Button({
        id: 'return',
        text: 'На главную',
        onClick: () => router.go('/'),
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
