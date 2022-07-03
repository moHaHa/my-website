<template>
  <div>
    <div>
      <mh-layers>
        <crystals-layer> </crystals-layer>
        <content-layer> </content-layer>
        
      </mh-layers>
    </div>
  </div>
</template>

<script>
import crystalsLayer from "./components/crystals-layer/crystals-layer.vue";
import contentLayer from "./components/content-layer/content-layer.vue";
export default {
  components: {
    "crystals-layer": crystalsLayer,
    "content-layer": contentLayer,
  },
};
</script>

<style>
</style>