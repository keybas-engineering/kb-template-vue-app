import type { VueConstructor } from "vue";
import Vue from "vue";
import Vuex, { Store } from "vuex";
import { todoList } from "./todo-list";
import createPersistedState from "vuex-persistedstate";
import pathify from "@/services/pathify";

Vue.use(Vuex);

const store = new Store({
  // All stores are loaded as modules
  // To declare an additional store, create an additional module
  modules: {
    todoList,
  },
  plugins: [createPersistedState(), pathify.plugin],
});

export default store;

// Typings
abstract class TypedVueClass extends Vue {
  public $store!: typeof store;
}
export const TypedVue = Vue as VueConstructor<TypedVueClass>;
