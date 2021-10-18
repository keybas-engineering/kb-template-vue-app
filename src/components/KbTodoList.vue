<template>
  <div class="text-left">
    <h3 class="mb-1 ml-2">Todo list</h3>
    <ul class="list-group">
      <kb-todo-item
        v-for="item in todoList"
        :key="item.id"
        v-model="item.done"
        :message="item.message"
        class="list-group-item"
      ></kb-todo-item>
    </ul>
  </div>
</template>

<script lang="ts">
import KbTodoItem from "./KbTodoItem.vue";
import { TodoItem } from "@/store/todo-list";
import { TypedVue } from "@/store";

// TODO demo the store
export default TypedVue.extend({
  name: "KbTodoList",
  components: { KbTodoItem },
  data() {
    return {
      todoList: [new TodoItem("A new TODO item")] as TodoItem[],
    };
  },
});
</script>

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
