import Api, { ChatsAPI } from '../api/ChatsApi';
import { store } from '../framework/Store';
import { MessagesState } from '../types/api';
import MessagesController from './MessagesController';

class ChatsController {
  private readonly api: ChatsAPI;

  constructor() {
    this.api = Api;
  }

  async create(title: string) {
    await this.api
      .create(title)
      .catch((error) => store.set('error', error))
      .finally(async () => {
        if (!store.getState().error) {
          await this.getChats();
        }
      });
  }

  async getChats() {
    const chats = (await this.api.read()).response;

    (chats as unknown as MessagesState[]).map(async (chat: MessagesState) => {
      const token = await this.getToken(chat.id);
      await MessagesController.connect(chat?.id, token);
    });
    console.log('chats', chats);
    store.set('chats', chats as unknown as MessagesState[]);
  }

  async addUserToChat(id: number, userId: number) {
    console.log({ id, userId });
    try {
      await this.api.addUsers(id, [userId]);
    } catch (error) {
      store.set('error', error);
    } finally {
      store.set('modalAddUserVisible', false);
    }
  }

  async removeUserFromChat(id: number, userId: number) {
    try {
      await this.api.removeUsers(id, [userId]);
    } catch (error) {
      store.set('error', error);
    } finally {
      store.set('modalAddUserVisible', false);
    }
  }

  async delete(id: number) {
    try {
      await this.api.delete(id);
    } catch (error) {
      store.set('error', error);
    } finally {
      if (!store.getState().error) {
        this.getChats();
      }
    }
  }

  getToken(id: number) {
    return this.api.getToken(id);
  }
}

const chatsController = new ChatsController();

export default chatsController;
