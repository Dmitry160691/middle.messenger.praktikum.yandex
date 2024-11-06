export type LoginData = {
  login: string;
  password: string;
};

export type RegisterData = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export interface User extends StringIndexed {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
  login: string;
  avatar: string | null;
  email: string;
}

export type TUserUpdateValues = Pick<
  User,
  'first_name' | 'second_name' | 'display_name' | 'phone' | 'email'
>;

export interface Message {
  chat_id: number;
  time: string;
  type: string;
  id: string;
  user_id: number;
  content: string;
  is_read: boolean;
  file?: {
    id: number;
    user_id: number;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
  };
}

export interface MessageUser {
  first_name: string;
  second_name: string;
  avatar: string;
  email: string;
  login: string;
  phone: string;
}

export interface LastMessage {
  user: MessageUser;
  time: string;
  content: string;
}

export interface MessagesState {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  created_by: number;
  last_message: LastMessage;
}
