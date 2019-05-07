import Vue from "vue";
import Router from "vue-router";
import Vuetify from "vuetify";
import SocialSharing from "vue-social-sharing";
import "vuetify/dist/vuetify.min.css";
import "@/assets/style.css";

import App from "./App.vue";
import RHAppCard from "@/components/AppCard.vue";
import RHAppView from "@/components/AppView.vue";
import RHArticleCard from "@/components/ArticleCard.vue";
import RHArticleView from "@/components/ArticleView.vue";
import RHAuthorView from "@/components/AuthorView.vue";
import RHBaseToolbar from "@/components/BaseToolbar.vue";
import RHDatasetCard from "@/components/DatasetCard.vue";
import RHDatasetView from "@/components/DatasetView.vue";
import RHFooter from "@/components/Footer.vue";

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
