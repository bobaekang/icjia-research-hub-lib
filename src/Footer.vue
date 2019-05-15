<template>
  <v-footer height="auto">
    <v-layout justify-center row wrap>
      <v-flex text-xs-center>
        <span>
          <template>{{ "© " + year + " " }}</template>
          <a :href="agency.url">{{ agency.name }}</a>
        </span>
        <template>{{ " | " }}</template>
        <span>
          <a :href="github.url">
            <template>{{ github.version + " " }}</template>
            <v-icon>fa fa-github</v-icon>
          </a>
        </span>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  props: {
    agency: Object,
    github: Object
  },
  data() {
    return {
      year: new Date().getFullYear(),
      fullname: "Illinois Criminal Justice Information Authority"
    };
  }
};
</script>

<style scoped>
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
