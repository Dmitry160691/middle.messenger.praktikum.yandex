import { MessagesState } from './api';

export interface ProfileState {
  isDraft: boolean;
  profile: Profile;
  chatsState: MessagesState[];
}

export interface Profile {
  id: number;
  firstName: string;
  secondName: string;
  email: string;
  login: string;
  displayName: string;
  phone: string;
  avatar: string | null;
  password: string;
}

export interface ChatState {
  id: number;
  partner: {
    name: string;
    avatar: string | null;
  };
  messages: Message[];
}

export interface Message {
  sender: ESender;
  message: string;
  timeSend: string;
  isReading: boolean;
}

export interface ChatState {
  id: number;
  partner: {
    name: string;
    avatar: string | null;
  };
  messages: Message[];
}

export enum ESender {
  Me = 'me',
  Partner = 'partner',
}

export interface Message {
  sender: ESender;
  message: string;
  timeSend: string;
  isReading: boolean;
}
