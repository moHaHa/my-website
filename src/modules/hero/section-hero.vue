<template>
  <div>
    <div>
      <mh-layers>
        <stars-layer> </stars-layer>
        <crystals-layer > </crystals-layer>
        <content-layer > </content-layer>
        
      </mh-layers>
    </div>
  </div>
</template>

<script>
import crystalsLayer from "./components/crystals-layer/crystals-layer.vue";
import starsLayer from "./components/stars-layer/stars-layer.vue";
import contentLayer from "./components/content-layer/content-layer.vue";
export default {
  components: {
    "stars-layer": starsLayer,
    "crystals-layer": crystalsLayer,
    "content-layer": contentLayer,
  },
};
</script>

<style>
</style>