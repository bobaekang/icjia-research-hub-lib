import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@/assets/style.css";

import RHAppCard from "./RHAppCard.vue";
import RHAppView from "./RHAppView.vue";
import RHArticleCard from "./RHArticleCard.vue";
import RHArticleView from "./RHArticleView.vue";
import RHAuthorView from "./RHArticleView.vue";
import RHDatasetCard from "./RHDatasetCard.vue";
import RHDatasetView from "./RHDatasetView.vue";

Vue.use(Vuetify);

const Components = {
  RHAppCard,
  RHAppView,
  RHArticleCard,
  RHArticleView,
  RHAuthorView,
  RHDatasetCard,
  RHDatasetView
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
