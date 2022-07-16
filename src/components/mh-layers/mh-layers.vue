<template>
  <div v-bind="$attrs"
      v-on="$listeners"  class="mh-layers" :style="{ zIndex: zIndex }">
    <slot />
  </div>
</template>
  
<script>
export default {
  name: "mh-layers",
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