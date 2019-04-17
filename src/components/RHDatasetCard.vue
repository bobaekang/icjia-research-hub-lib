<template>
  <v-card class="ma-3">
    <v-card-title primary-title>
      <v-layout row wrap>
        <BaseTitleDisplay :to="dataset.slug | path('datasets')">
          <template>{{ dataset.title }}</template>
        </BaseTitleDisplay>

        <div v-if="dataset.tags">
          <BasePropChip v-for="tag in dataset.tags" :key="tag">
            <template>{{ tag }}</template>
          </BasePropChip>
        </div>
      </v-layout>
    </v-card-title>

    <v-divider />

    <v-container class="py-2">
      <BasePropDisplay name="Updated">
        <template>{{ dataset.date | formatDate }}</template>
      </BasePropDisplay>

      <BasePropDisplay v-if="dataset.sources" name="Sources">
        <span v-for="(source, i) in dataset.sources" :key="i">
          <template v-if="i > 0">{{
            dataset.sources.length > i + 1 ? ", " : " and "
          }}</template>

          <a v-if="source.url" :href="source.url" target="_blank">
            <template>{{ source.title }}</template>
          </a>

          <template v-else>{{ source.title }}</template>
        </span>
      </BasePropDisplay>

      <BasePropDisplay v-if="dataset.categories" name="Categories">
        <span v-for="(category, i) in dataset.categories" :key="i">
          <template v-if="i > 0">{{ ", " }}</template>
          <template>{{ category | capitalize }}</template>
        </span>
      </BasePropDisplay>
    </v-container>

    <v-container class="pa-0 text-xs-right">
      <BaseButton :to="dataset.slug | path('datasets')" icon="more_horiz">
        <template>{{ "more" }}</template>
      </BaseButton>
    </v-container>
  </v-card>
</template>

<script>
import { allContentMixin, datasetMixin } from "@/mixins/contentMixin";
import BaseButton from "@/components/BaseButton";
import BasePropChip from "@/components/BasePropChip";
import BasePropDisplay from "@/components/BasePropDisplay";
import BaseTitleDisplay from "@/components/BaseTitleDisplay";

export default {
  mixins: [allContentMixin, datasetMixin],
  components: {
    BaseButton,
    BasePropChip,
    BasePropDisplay,
    BaseTitleDisplay
  },
  props: {
    item: Object
  },
  computed: {
    dataset() {
      return this.item;
    }
  }
};
</script>
