<template>
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

<style scoped>
.chip {
  background-color: #e0e0e0 !important;
  color: #333;
  margin: 4px;
  min-width: 0;
  text-transform: uppercase;
}
</style>