import Vue from "vue";
// import Vuetify, {
//   VApp,
//   VBtn,
//   VContainer,
//   VCard,
//   VCardActions,
//   VCardText,
//   VCardTitle,
//   VDivider,
//   VFlex,
//   VFooter,
//   VIcon,
//   VLayout,
//   VList,
//   VSpacer,
//   VToolbar,
//   VToolbarTitle
// } from "vuetify/lib";
import "../plugins/vuetify";
import SocialSharing from "vue-social-sharing";
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

// Vue.use(Vuetify, {
//   components: {
//     VApp,
//     VBtn,
//     VContainer,
//     VCard,
//     VCardActions,
//     VCardText,
//     VCardTitle,
//     VDivider,
//     VFlex,
//     VFooter,
//     VIcon,
//     VLayout,
//     VList,
//     VSpacer,
//     VToolbar,
//     VToolbarTitle
//   }
// });
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
