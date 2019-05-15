<template>
  <div class="py-1 font-lato small">
    <span v-if="name" class="bold pr-2">{{ name }}</span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ""
    }
  }
};
</script>
