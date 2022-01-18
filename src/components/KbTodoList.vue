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
    <b-form-input v-model="newItemName" class="ml-2" placeholder="Item name" />
    <b-button class="ml-2" variant="primary" @click="() => addTodoItem(newItemName)"
      >Add an item</b-button
    >
  </div>
</template>

<script lang="ts">
import { BButton, BFormInput } from "bootstrap-vue";
import KbTodoItem from "./KbTodoItem.vue";
import { useTodoList } from "@/store/todo-list";
import { storeToRefs } from 'pinia';
import { defineComponent } from "@vue/composition-api";

// TODO demo the store
export default defineComponent({
  name: "KbTodoList",
  components: {
    BButton,
    BFormInput,
    KbTodoItem,
  },
  setup() {
    const todoListStore = useTodoList();
    const { todoList } = storeToRefs(todoListStore);
    return { todoListStore, todoList };
  },
  data() {
    return {
      newItemName: "",
    };
  },
  methods: {
    addTodoItem(name: string) {
      const trimmedName = name.trim();
      if (!trimmedName) {
        return;
      }
      this.todoListStore.addItem(trimmedName);
      this.newItemName = "";
    },
    removeOne(id: string) {
      this.todoListStore.removeItem(id);
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
