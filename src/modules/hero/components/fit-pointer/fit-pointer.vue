<template>
  <div class="fit-pointer" :style="{width : block?  'max-content' : '100%'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    block: {
      type: [String, Boolean],
      default: () => false,
    },
  },
};
</script>

<style>
.fit-pointer {

  pointer-events: fill;
}
</style>