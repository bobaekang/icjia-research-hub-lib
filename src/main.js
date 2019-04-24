import Vue from "vue";
import Router from "vue-router";
import Vuetify from "vuetify";
import SocialSharing from "vue-social-sharing";
import "vuetify/dist/vuetify.min.css";
import "@/assets/style.css";

import App from "./App.vue";
import RHAppCard from "@/components/RHAppCard.vue";
import RHAppView from "@/components/RHAppView.vue";
import RHArticleCard from "@/components/RHArticleCard.vue";
import RHArticleView from "@/components/RHArticleView.vue";
import RHAuthorView from "@/components/RHAuthorView.vue";
import RHBaseToolbar from "@/components/RHBaseToolbar.vue";
import RHDatasetCard from "@/components/RHDatasetCard.vue";
import RHDatasetView from "@/components/RHDatasetView.vue";
import RHFooter from "@/components/RHFooter.vue";

Vue.config.productionTip = false;
Vue.use(Router);
Vue.use(Vuetify);
Vue.use(SocialSharing);

const router = new Router({
  mode: "history"
});

const Components = {
  RHAppCard,
  RHAppView,
  RHArticleCard,
  RHArticleView,
  RHAuthorView,
  RHBaseToolbar,
  RHDatasetCard,
  RHDatasetView,
  RHFooter
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

new Vue({
  router,
  render: h => h(App)
}).$mount(`#app`);
