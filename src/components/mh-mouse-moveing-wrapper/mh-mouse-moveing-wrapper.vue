<template>
  <div
    style="width: max-content"
    :style="{
      transform: `translateX(${x}px)  translateY(${y}px)`,
      transition: transition,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "mh-mouse-moveing-wrapper",
  props: {
    cx: {
      type:  Number,
      default: () => 0,
    },
    cy: {
      type: Number,
      default: () => 0,
    },

    d: {
      type:  Number,
      default: () => 0,
    },
    reduceX: {
      type: Number,
      default: () => 1,
    },
    reduceY: {
      type: Number,
      default: () => 1,
    },
    transition: {
      type: String,
      default: () => "ease-out 5s",
    },
  },
  computed: {
    x() {
      return this.cx / this.reduceX ;
    },
    y() {
      return this.cy / this.reduceY;
    },
  },
};
</script>

<style>
</style>