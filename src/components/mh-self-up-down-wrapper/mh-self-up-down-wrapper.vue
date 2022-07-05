<template>
  <mh-fit-pointer>
    <div
      style="width: max-content"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
      class="hi"
      :style="{
        'animation-duration': `${duration}`,
        'animation-delay': `${delay}`,
        'animation-timing-function' : `${timing}`,
        animation: `animation: 4s ease-in  1s infinite alternate  move_eye`,
      }"
    >
      <slot></slot>
    </div>
  </mh-fit-pointer>
</template>

<script>
export default {
  name: "mh-self-up-down-wrapper",
  data() {
    return {
      hover: false,
    };
  },
  methods: {
    fun() {
      console.log("d");
      this.hover = true;
    },
  },
  props: {
    duration: {
      type: String,
      default: () =>  '4s',
    },
    delay: {
      type: String,
      default: () =>  '1s',
    },
    timing: {
      type: String,
      default: () => "ease",
    },
  },
};
</script>

<style>
@keyframes move_eye {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(30px);
  }
}
.hi {
  /* animation-duration: 4s;
  animation-delay: 1s; */
  /* animation-timing-function: ease; */
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: move_eye;
}
</style>