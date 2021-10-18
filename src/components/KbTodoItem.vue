<template>
  <li class="todo-item">
    <b-checkbox v-model="done" :class="style" size="lg" @input="toggle">{{
      message
    }}</b-checkbox>
  </li>
</template>

<script lang="ts">
import Vue from "vue";
import { BFormCheckbox as BCheckbox } from "bootstrap-vue";

export default Vue.extend({
  name: "KbTodoItem",
  components: { BCheckbox },
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
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
