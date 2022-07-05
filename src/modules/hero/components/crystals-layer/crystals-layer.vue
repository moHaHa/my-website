<template>
  <mh-relative-size ref="wrapper" @mousemove="fun($event)" :height="1300">
    <mh-layer>
      <v-container class="pt-12">
        <v-row>
          <v-col cols="1">
            <mh-mouse-moveing-wrapper
              :reduceX="5"
              :reduceY="24"
              :cx="x"
              :cy="y"
              :d="50"
            >
              <mh-mouse-scale-wrapper>
                 <mh-self-up-down-wrapper :delay="'2s'" :duration="'5s'">
                <holo-crystal></holo-crystal>
                 </mh-self-up-down-wrapper>
              </mh-mouse-scale-wrapper>
            </mh-mouse-moveing-wrapper>
          </v-col>
          <v-col cols="1">
            <div class="pt-12 mt-6">
              <mh-mouse-moveing-wrapper
                :reduceX="4"
                :reduceY="24"
                :cx="x"
                :cy="y"
                :d="50"
              >
                <mh-mouse-scale-wrapper>
                  <mh-self-up-down-wrapper>
                    <sub2-crystal></sub2-crystal>
                  </mh-self-up-down-wrapper>
                </mh-mouse-scale-wrapper>
              </mh-mouse-moveing-wrapper>
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
              <mh-mouse-moveing-wrapper
                :reduceX="8"
                :reduceY="4"
                :cx="x"
                :cy="y"
                :d="50"
              >
                <mh-mouse-scale-wrapper>
                  <mh-self-up-down-wrapper :delay="'4s'" :duration="'6s'">
                    <smsm-crystal></smsm-crystal>
                  </mh-self-up-down-wrapper>
                </mh-mouse-scale-wrapper>
              </mh-mouse-moveing-wrapper>
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
              <mh-mouse-moveing-wrapper
                :reduceX="7"
                :reduceY="2"
                :cx="x"
                :cy="y"
                :d="50"
              >
                <mh-mouse-scale-wrapper>
                   <mh-self-up-down-wrapper :delay="'2s'" :duration="'7s'">
                  <rou1-crystal></rou1-crystal>
                   </mh-self-up-down-wrapper>
                </mh-mouse-scale-wrapper>
              </mh-mouse-moveing-wrapper>
            </div>
          </v-col>
          <v-col cols="3">
            <div class="">
              <mh-mouse-moveing-wrapper
                :reduceX="4"
                :reduceY="1"
                :cx="x"
                :cy="y"
                :d="50"
              >
                <mh-mouse-scale-wrapper>
                  <soso-crystal></soso-crystal>
                </mh-mouse-scale-wrapper>
              </mh-mouse-moveing-wrapper>
            </div>
          </v-col>
        </v-row>
        <v-row justify="center" class="mt-12 pt-12">
          <v-col class="mt-12 pt-12" cols="auto">
            <div class="">
              <mh-mouse-moveing-wrapper
                :reduceX="5"
                :reduceY="2"
                :cx="x"
                :cy="y"
                :d="50"
              >
                <mh-mouse-scale-wrapper>
                   <mh-self-up-down-wrapper :delay="'4s'" :duration="'4s'">
                  <tall-crystal></tall-crystal>
                   </mh-self-up-down-wrapper>
                </mh-mouse-scale-wrapper>
              </mh-mouse-moveing-wrapper>
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
              <mh-mouse-moveing-wrapper
                :reduceX="5"
                :reduceY="2"
                :cx="x"
                :cy="y"
                :d="50"
              >
                <mh-mouse-scale-wrapper>
                   <mh-self-up-down-wrapper :delay="'6s'" :duration="'5s'">
                  <roro-crystal></roro-crystal>
                   </mh-self-up-down-wrapper>
                </mh-mouse-scale-wrapper>
              </mh-mouse-moveing-wrapper>
            </div>
          </v-col>
          <v-col cols="3">
            <div>
              <mh-mouse-moveing-wrapper
                :reduceX="1"
                :reduceY="2"
                :cx="x"
                :cy="y"
                :d="50"
              >
                <mh-mouse-scale-wrapper>
                  <mh-self-up-down-wrapper :delay="'4s'" :duration="'6s'">
                    <sub-crystal></sub-crystal>
                  </mh-self-up-down-wrapper>
                </mh-mouse-scale-wrapper>
              </mh-mouse-moveing-wrapper>
            </div>
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
      let x = e.clientX - (d.left + Math.floor(d.width / 2));
      let y = e.clientY - (d.top + Math.floor(d.height / 2));
      x = x * -1;
      y = y * -1;
      this.x = x;
      this.y = y;
      document.documentElement.style.setProperty("--x", x + "px");
      document.documentElement.style.setProperty("--y", y + "px");
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