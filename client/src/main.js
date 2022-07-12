import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import '@/plugins/apexcharts'
import VueSpinners from 'vue-spinners'

Vue.use(VueSpinners)




// Import the Auth0 configuration
import { domain, clientId, audience } from "../auth_config.json";
// Import the plugin here
import { Auth0Plugin } from "./auth";
// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
