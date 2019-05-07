import Vue from "vue";
import Vuetify from "vuetify";
import SocialSharing from "vue-social-sharing";
import "vuetify/dist/vuetify.min.css";
import "@/assets/style.css";

import RHAppCard from "./AppCard.vue";
import RHAppView from "./AppView.vue";
import RHArticleCard from "./ArticleCard.vue";
import RHArticleView from "./ArticleView.vue";
import RHAuthorView from "./AuthorView.vue";
import RHBasePropChip from "./BasePropChip.vue";
import RHBaseToolbar from "./BaseToolbar.vue";
import RHDatasetCard from "./DatasetCard.vue";
import RHDatasetView from "./DatasetView.vue";
import RHFooter from "./Footer.vue";

Vue.use(Vuetify);
Vue.use(SocialSharing);

const Components = {
  RHAppCard,
  RHAppView,
  RHArticleCard,
  RHArticleView,
  RHAuthorView,
  RHBasePropChip,
  RHBaseToolbar,
  RHDatasetCard,
  RHDatasetView,
  RHFooter
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
