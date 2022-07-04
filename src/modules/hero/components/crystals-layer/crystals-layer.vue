<template>
  <mh-relative-size ref="wrapper" @mousemove="fun($event)" :height="1300">
    <mh-layer>
      <v-container class="pt-12 mt-12">
        <v-row>
          <v-col cols="1">
            <holo-crystal></holo-crystal>
          </v-col>
          <v-col cols="1">
            <div class="pt-12 mt-6">
              <sub2-crystal></sub2-crystal>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </mh-layer>
    <mh-layer>
      <v-container class="pt-8 mt-12">
        <v-row justify="end">
          <v-col cols="3">
            <div class="pe-2">
              <smsm-crystal></smsm-crystal>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </mh-layer>
    <mh-layer>
      <v-container style="margin-top: 800px">
        <v-row justify="space-around">
          <v-col offset="1" cols="3">
            <div class="pt-10">
              <rou1-crystal></rou1-crystal>
            </div>
          </v-col>
          <v-col cols="3">
            <div class="">
              <soso-crystal></soso-crystal>
            </div>
          </v-col>
        </v-row>
        <v-row justify="center" class="mt-12 pt-12">
          <v-col class="mt-12 pt-12" cols="auto">
            <div class="">
              <tall-crystal></tall-crystal>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </mh-layer>
    <mh-layer>
      <v-container style="margin-top: 500px">
        <v-row>
          <v-col offset="1" cols="3">
            <div class="pt-10">
              <roro-crystal></roro-crystal>
            </div>
          </v-col>
          <v-col cols="3">
            <div class="">
              <sub-crystal></sub-crystal>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </mh-layer>
    <mh-layer>
      <v-container style="margin-top: 500px">
        <v-row justify="end">
          <v-col class="white--text" offset="1" cols="3">
            <div>x : {{ x }}</div>
            <div>y : {{ y }}</div>
        

          </v-col>
        </v-row>
      </v-container>
    </mh-layer>
  </mh-relative-size>
</template>

<script>
import soso from "./crystals/soso-crystal.vue";
import smsm from "./crystals/smsm-crystal.vue";
import tall from "./crystals/tall-crystal.vue";
import sub from "./crystals/sub-crystal.vue";
import sub2 from "./crystals/sub2-crystal.vue";
import roro from "./crystals/roro-crystal.vue";
import holo from "./crystals/holo-crystal.vue";
import rou1 from "./crystals/rou1-crystal.vue";
export default {
  components: {
    "sub2-crystal": sub2,
    "sub-crystal": sub,
    "soso-crystal": soso,
    "rou1-crystal": rou1,
    "holo-crystal": holo,
    "roro-crystal": roro,
    "smsm-crystal": smsm,
    "tall-crystal": tall,
  },
  data() {
    return {
      x: undefined,
      y: undefined,
      dx: undefined,
      dy: undefined,
    };
  },
  methods: {
    fun(e) {
      const d = this.$refs.wrapper.$el.getBoundingClientRect();
      let x = e.screenX - (d.left + Math.floor(d.width / 2));
      let y = e.screenY - (d.top + Math.floor(d.height / 2));
      x = x * -1
      y = y * -1
      this.x = x;
      this.y = y ;
      
      if (x > 70) {
        document.documentElement.style.setProperty("--x", 70 / 2 + "px");
      }
      if (x < -70) {
        document.documentElement.style.setProperty("--x", -70 / 8 + "px");
      } else {
        document.documentElement.style.setProperty("--x", x / 8 + "px");
      }
      if (y > 70) {
        document.documentElement.style.setProperty("--y", 70 / 8 + "px");
      }
      if (y < -70) {
        document.documentElement.style.setProperty("--y", -70 / 8 + "px");
      } else {
        document.documentElement.style.setProperty("--y", y / 8 + "px");
      }
    },
  },
};
</script>

<style>
.pt-90 {
  padding-top: 120px;
}

#wrapper {
  pointer-events: fill;
}
</style>