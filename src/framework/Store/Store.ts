import { StoreState } from '../../types/store';
import set from '../../utils/set';
import EventBus from '../EventBus';

export enum StoreEvents {
  Updated = 'updated',
}

type Nullable<T> = T | null | {};

class Store extends EventBus {
  private state: Nullable<StoreState> = {
    profileState: {
      profile: {
        firstName: '',
        secondName: '',
        email: '',
        phone: '',
        displayName: '',
        login: '',
        avatar: '',
        password: '',
      },
    },
    chats: [],
    selectedContact: {},
    error: null,
  };

  constructor() {
    super();
    this.on(StoreEvents.Updated, () => null);
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);

    this.emit(StoreEvents.Updated);
  }

  public resetError() {
    this.set('error', null);
  }

  public getState(): StoreState {
    return this.state as StoreState;
  }
}

export default new Store();
