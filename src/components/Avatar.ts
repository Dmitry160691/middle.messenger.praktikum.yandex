import Block from '../framework/Block';
import { Input } from './Input';

interface IAvatarProps {
  isEdit?: boolean;
  avatarUrl: string | null;
  name: string;
  onChange?: (e: Event) => void;
}

export class Avatar extends Block<StringIndexed> {
  constructor(props: IAvatarProps) {
    super({
      ...props,
      Input: new Input({
        type: 'file',
        name: 'avatar',
        id: 'avatar',
        onClick: (e) => {
          if (!props.isEdit) {
            e.preventDefault();
            return;
          }
        },
        onChange: (e) => {
          if (props.onChange) {
            props.onChange(e);
          }
        },
      }),
    });
  }

  override render(): string {
    return `
      <div>
        <label for="avatar">
          <img class="avatar" alt="аватар {{name}}" src="{{#if avatarUrl }}https://ya-praktikum.tech/api/v2/resources{{avatarUrl}}{{else}}/src/assets/avatar.svg{{/if}}"  />
          {{{ Input }}}
        </label>
      </div>
    `;
  }
}
