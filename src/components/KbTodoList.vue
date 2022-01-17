<template>
  <div class="text-left">
    <h3 class="mb-1 ml-2">Todo list</h3>
    <ul class="list-group mb-2">
      <kb-todo-item
        v-for="item in todoList"
        :key="item.id"
        v-model="item.done"
        :message="item.message"
        class="list-group-item"
        @remove="removeOne(item.id)"
      ></kb-todo-item>
    </ul>
    <b-button class="ml-2" variant="primary" @click="addTodoItem"
      >Add an item</b-button
    >
  </div>
</template>

<script lang="ts">
import { BButton } from "bootstrap-vue";
import KbTodoItem from "./KbTodoItem.vue";
import { TodoItem } from "@/store/todo-list";
import { TypedVue } from "@/store";

// TODO demo the store
export default TypedVue.extend({
  name: "KbTodoList",
  components: {
    BButton,
    KbTodoItem,
  },
  data() {
    return {
      todoList: [new TodoItem("A new TODO item")] as TodoItem[],
    };
  },
  methods: {
    addTodoItem() {
      this.todoList.push(new TodoItem("Another TODO item"));
    },
    removeOne(id: string) {
      const i = this.todoList.findIndex((item) => item.id === id);
      this.todoList.splice(i, 1);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/app.scss";

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: $primary;
}
</style>
