import { Button } from '../../components/Button';
import Block from '../../framework/Block';
import { router } from '../../framework/Router';

export class ErrorPage extends Block<StringIndexed> {
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
      <h1>500</h1>
      <h3>Мы уже фиксим.</h3>
  </main>
  <footer>
    {{{Button}}}
  </footer>
  </div>
</div>
`;
  }
}
