import type { StoreOptions } from "vuex";
import { randomId } from "@/services/random";

export class TodoItem {
  id: string;
  message: string;
  done: boolean;

  constructor(message: string) {
    this.message = message;
    this.done = false;
    this.id = randomId();
  }
}

export const todoList: StoreOptions<TodoItem[]> = {
  state: () => [],
  mutations: {
    append(state, item: TodoItem) {
      state.push(item);
    }
  },
  actions: {
    addItem({ dispatch }, message: string) {
      dispatch("append", new TodoItem(message));
    }
  },
};
