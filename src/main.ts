import Vue from "vue";
import "./style/app.scss";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store, { TypedVue } from "./store";

Vue.config.productionTip = false;

new TypedVue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
