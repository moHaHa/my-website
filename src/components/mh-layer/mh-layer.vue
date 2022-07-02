<template>
  <div
    class="mh-layer"
    :style="{ zIndex: zIndex, 'pointer-events': pointerEvents }"
  >
     <slot /></div>
</template>

<script>
export default {
  props: {
    zIndex: {
      type: [String, Number],
      default: () => 1,
    },
    pointerEvents: {
        type: [String, Number],
        default: ()=> 'none' 
    }
  },
};
</script>

<style>
.mh-layer {
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>