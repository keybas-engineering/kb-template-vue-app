import type { VueConstructor } from "vue";
import Vue from "vue";
import Vuex, { Store } from "vuex";
import { todoList } from "./todo-list";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

// All stores are loaded as modules
// To declare an additional store, create an additional module
const store = new Store({
  modules: {
    todoList,
  },
  plugins: [createPersistedState()],
});

export default store;

// Typings
abstract class TypedVueClass extends Vue {
  public $store!: typeof store;
}
export const TypedVue = Vue as VueConstructor<TypedVueClass>;
