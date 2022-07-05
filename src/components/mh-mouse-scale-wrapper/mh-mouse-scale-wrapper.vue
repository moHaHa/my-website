<template>
  <mh-fit-pointer>

    <div
    style="width: max-content"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    :style="{
      transform: `scale(${hover ? scale : 1})`,
      transition: transition,
    }"
  >
    <slot></slot>
  </div>
      </mh-fit-pointer>
</template>

<script>
export default {
  name: "mh-mouse-scale-wrapper",
  data() {
    return {
      hover: false,
    };
  },
  methods:{
    fun(){
      console.log('d');
      this.hover = true
    }
  },
  props: {
    scale: {
      type: Number,
      default: () => 1.2,
    },
    transition: {
      type: String,
      default: () => "all 0.5s cubic-bezier(0.7, -0.5, 0.3, 1.5) 0s",
    },
  },
};
</script>

<style>
</style>