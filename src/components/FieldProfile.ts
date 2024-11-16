import { Block } from '../framework/Block';

interface FieldProfileProps {
  fieldName: string;
  fieldValue: string;
}

export class FieldProfile extends Block<StringIndexed> {
  constructor(props: FieldProfileProps) {
    super({ ...props });
  }

  render(): string {
    return '<div class="field-profile"><p>{{fieldName}}</p><p>{{fieldValue}}</p></div><hr />';
  }
}
