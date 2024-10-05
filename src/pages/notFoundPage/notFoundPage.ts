import { Button } from '../../components/Button';
import Block from '../../framework/Block';

interface PageProps {
  link?: (path: string) => void;
}

export class NotFoundPage extends Block {
  constructor({ link }: PageProps) {
    super({
      Button:  new Button({
        id: 'return',
        text: 'На главную',
        onClick: () => {
          link('singIn');
        },
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