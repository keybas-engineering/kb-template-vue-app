import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
import { createPinia, PiniaVuePlugin } from "pinia";
import "./style/app.scss";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { FontAwesomeIcon } from "./icons";

Vue.use(VueCompositionAPI);
Vue.use(PiniaVuePlugin);
Vue.component("FaIcon", FontAwesomeIcon);

Vue.config.productionTip = false;
const pinia = createPinia();

new Vue({
  pinia,
  router,
  render: (h) => h(App),
}).$mount("#app");
