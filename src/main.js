import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import Navbar from "./components/Navbar.vue";
Vue.use(Navbar);

import Vuetify from "vuetify";

Vue.use(Vuetify);

Vue.config.productionTip = false;
Vue.use(axios);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
