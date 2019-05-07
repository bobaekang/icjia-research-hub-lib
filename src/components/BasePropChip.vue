<template>
  <!-- <v-chip disabled small text-color="#333" class="font-lato uppercase">
    <slot></slot>
  </v-chip> -->
  <v-btn
    class="chip"
    small
    depressed
    round
    @click="$emit('chip-click', $event.target.textContent)"
  >
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  props: {
    event: Function
  }
};
</script>

<style scoped>
.chip {
  background-color: #e0e0e0 !important;
  color: #333;
  margin: 4px;
  min-width: 0;
  text-transform: uppercase;
}
</style>