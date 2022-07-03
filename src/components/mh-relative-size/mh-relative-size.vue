<template>
  <div class="relative-size" :style="screen ? screenObj : sizeObj">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'mh-relative-size',
  props: {
    screen: {
      type: Boolean,
      default: () => false,
    },

    height: {
      type: [Number, String],
      default: () => "100%",
    },
    width: {
      type: [Number, String],
      default: () => "100%",
    },
  },
  methods: {
    slice(str){
        if(str) {
            return  str.slice(-1)

        }
    }
  },
  computed: {
    screenObj() {
      return { height: "100vh", width: "100vw" };
    },
    sizeObj() {
      return {
        height: this.height + "px",
        width:  this.width + "px",
      };
    },
  },
};
</script>

<style>
.relative-size {
  position: relative;
}
</style>