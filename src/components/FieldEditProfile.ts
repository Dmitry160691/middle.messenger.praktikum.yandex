import Block from '../framework/Block';

interface FieldEditProfileProps {
  fieldName: string;
  fieldValue: string;
  type: string;
}

export class FieldEditProfile extends Block {
  constructor(props: FieldEditProfileProps) {
    super({ ...props });
  }

  render(): string {
    return '<div class="field-edit"><p>{{fieldName}}</p><input type={{type}} name={{name}} value={{fieldValue}}></input></div><hr />';
  }
}
