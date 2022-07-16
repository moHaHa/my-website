<template>
  <div>
    <div  >
      <mh-layers ref="wrapper" @mousemove="fun($event)" >
        <stars-layer> </stars-layer>
        <crystals-layer :x="x" :y="y" > </crystals-layer>
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
  data(){
    return {
       x: 1,
      y: 1,
    }
  },
  methods:{
    fun(e) {
      const d = this.$refs.wrapper.$el.getBoundingClientRect();
      let x = e.clientX - (d.left + Math.floor(d.width / 2));
      let y = e.clientY - (d.top + Math.floor(d.height / 2));
      x = x * -1;
      y = y * -1;
      this.x = x;
      this.y = y;
    },
  }
};
</script>

<style>
</style>