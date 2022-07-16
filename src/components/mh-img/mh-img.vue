<template>
  <div class="mh-img" v-bind="$attrs" v-on="$listeners">
    <div
      :style="
         {
          maxWidth: `${maxWidth}px`
        }
      "
      class="mh-img-background"
    >
      <slot name="img"></slot>
    </div>
    <div class="mh-img-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "mh-img",
  props: {
    maxWidth: {
      type: [Number, String],
    },
  },
};
</script>

<style lang="scss">
.mh-img {
  position: relative;
  .mh-img-background {
    position: relative;
    display: flex;
  }
  .mh-img-content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>