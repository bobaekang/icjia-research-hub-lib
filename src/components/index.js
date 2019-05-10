import Vue from "vue";
import "../plugins/vuetify";
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
