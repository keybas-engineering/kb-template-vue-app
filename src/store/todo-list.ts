import { randomId } from "@/services/random";
import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";

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

export const useTodoList = defineStore("todo-list", {
  state: () => ({
    todoList: useLocalStorage("todo-list", [] as TodoItem[]),
  }),
  actions: {
    addItem(message: string) {
      this.todoList.push(new TodoItem(message));
    },
    removeItem(id: string) {
      const i = this.todoList.findIndex((item) => item.id === id);
      if (i >= 0) {
        this.todoList.splice(i, 1);
      }
    },
  },
});
