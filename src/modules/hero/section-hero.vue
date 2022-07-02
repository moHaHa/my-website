<template>
  <div>
    <div>
      <mh-layers>
       
     

          <relative-size :height="800">
            <mh-layer>
              <v-row v-for="i in 12" :key="i">
                <v-col>
                  <fit-pointer class="ms-6" block>
                   
                  </fit-pointer>
                </v-col>
              </v-row>
            </mh-layer>
          </relative-size>
      </mh-layers>
    </div>
    <div class="">d</div>
  </div>
</template>

<script>
import mhLayers from "./components/mh-layers/mh-layers.vue";
import mhLayer from "./components/mh-layer/mh-layer.vue";
import relativeSize from "./components/relative-size/relative-size.vue";
import fitPointer from "./components/fit-pointer/fit-pointer.vue";
export default {
  components: {
    "mh-layers": mhLayers,
    "mh-layer": mhLayer,
    "relative-size": relativeSize,
    "fit-pointer": fitPointer,
  },
};
</script>

<style>
</style>