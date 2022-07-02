<template>
  <div class="mh-layers" :style="{zIndex: zIndex}">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    zIndex: {
      type: [String, Number],
      default: () => 1,
    },
  },
};
</script>

<style>
.mh-layers {
  position: relative;
}
</style>