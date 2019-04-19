import Vue from "vue";
import Vuetify from "vuetify";
import SocialSharing from "vue-social-sharing";
import "vuetify/dist/vuetify.min.css";
import "@/assets/style.css";

import RHAppCard from "./RHAppCard.vue";
import RHAppView from "./RHAppView.vue";
import RHArticleCard from "./RHArticleCard.vue";
import RHArticleView from "./RHArticleView.vue";
import RHAuthorView from "./RHAuthorView.vue";
import RHBaseToolbar from "./RHBaseToolbar.vue";
import RHDatasetCard from "./RHDatasetCard.vue";
import RHDatasetView from "./RHDatasetView.vue";
import RHFooter from "./RHFooter.vue";

Vue.use(Vuetify);
Vue.use(SocialSharing);

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

export default Components;
