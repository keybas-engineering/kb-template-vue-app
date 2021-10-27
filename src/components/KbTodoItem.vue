<template>
  <li class="todo-item">
    <b-checkbox v-model="done" :class="style" size="lg" @input="toggle">{{
      message
    }}</b-checkbox>
    <b-button-close @click="remove" />
  </li>
</template>

<script lang="ts">
import { TypedVue } from "@/store";
import { BButtonClose, BFormCheckbox as BCheckbox } from "bootstrap-vue";

export default TypedVue.extend({
  name: "KbTodoItem",
  components: {
    BButtonClose,
    BCheckbox,
  },
  props: {
    message: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      done: this.value,
    };
  },
  computed: {
    style(): Record<string, boolean> {
      return { "text-muted": this.done };
    },
  },
  methods: {
    toggle() {
      this.$emit("input", this.done);
    },
    remove() {
      this.$emit("remove");
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
li.todo-item {
  display: inline-grid;
  grid-template-columns: auto 30px;
}
</style>
