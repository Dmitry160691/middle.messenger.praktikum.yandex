import { MessagesState } from './api';
import { ChatState, Message, ProfileState } from './profile';

export type StoreState = {
  profileState: ProfileState;
  messages: {
    [key in number]: Message[];
  };
  chats: MessagesState[];
  error: string | null;
  selectedContact?: ChatState;
};
