import { Contact } from '../components/Contact';
import Block from './Block';
import { store, StoreEvents } from './Store';

export function connect(Component: typeof Block<StringIndexed>) {
  return class extends Component {
    constructor(...args: any) {
      super({ ...args });

      const storeState = store.getState();

      store.on(StoreEvents.Updated, () => {
        this.setProps({ ...storeState });

        const { chats, selectedContact } = storeState;
        if (!!chats.length) {
          const newContacts = chats.map(
            (currentChat) =>
              new Contact({
                selectContact: selectedContact?.id,
                currentChat,
                onClick: () => {
                  store.set('selectedContact', currentChat);

                  const AllMessages = store.getState().messages;

                  const messages = Object.entries(AllMessages).find(
                    (item) => Number(item[0]) === selectedContact?.id,
                  );

                  if (messages && !!messages.length) {
                    store.set('activeMessages', messages[1]);
                  }
                },
              }),
          );

          this.setLists({
            Contacts: newContacts,
          });
        }
      });
    }
  };
}
