<template>
  <mh-relative-size  :height="1700" >
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
    <mh-layer>
      <v-container style="margin-top: 200px">
        <v-row>
          <v-col offset="7">
            <v-row justify="center">
              <v-col cols="6">
                <div class="py-9"></div>
                <mh-mouse-moveing-wrapper
                  :reduceX="10"
                  :reduceY="18"
                  :transition="'ease-out .7s'"
                  :cx="x"
                  :cy="y"
                  :d="50"
                >
                  <v-img :src="back" max-height="175" contain> </v-img>
                </mh-mouse-moveing-wrapper>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </mh-layer>
    <mh-layer>
      <v-container style="margin-top: 100px">
        <v-row>
          <v-col offset="7">
            <v-row>
              <v-col cols="6" class="d-flex flex-column align-center">
                <div class="py-9"></div>
                <mh-mouse-moveing-wrapper
                  :reduceX="9"
                  :reduceY="9"
                  :transition="'ease-out .7s'"
                  :cx="x"
                  :cy="y"
                  :d="50"
                >
                  <mh-mouse-scale-wrapper :scale="1.1">
                    <v-img
                      :src="topLeft"
                      style="border-radius: 22px"
                      class="elevation-24"
                      max-width="160"
                      contain
                    >
                    <template v-slot>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-col cols="auto">
                            <div><v-img :src="topLeftIcon" contain :max-height="60"> </v-img></div>
                            <div class="text-center pt-4 text-h5 font      font-corpsansrd-cnd">
                              Web
                            </div>
                            <div class="text-center  text-h5 font      font-corpsansrd-cnd">
                              Animation 
                            </div>
                          </v-col>
                        </v-row>
                      </template>
                    </v-img>
                  </mh-mouse-scale-wrapper>
                </mh-mouse-moveing-wrapper>
              </v-col>
              <v-col cols="6" class="d-flex flex-column align-center">
                <mh-mouse-moveing-wrapper
                  :reduceX="10"
                  :reduceY="9"
                  :transition="'ease-out .7s'"
                  :cx="x"
                  :cy="y"
                  :d="50"
                >
                  <mh-mouse-scale-wrapper :scale="1.1">
                    <v-img :src="topRight" max-width="210 " contain>
                      <template v-slot>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-col cols="auto">
                            <div><v-img :src="topRightIcon" contain :max-height="80"> </v-img></div>
                            <div class="text-center pt-4 text-h5 font      font-corpsansrd-cnd">
                              Front End 
                            </div>
                            <div class="text-center  text-h5 font      font-corpsansrd-cnd">
                              Development 
                            </div>
                          </v-col>
                        </v-row>
                      </template>
                    </v-img>
                  </mh-mouse-scale-wrapper>
                </mh-mouse-moveing-wrapper>
              </v-col>
              <v-col cols="6">
                <div class="py-3"></div>
                <mh-mouse-moveing-wrapper
                  :reduceX="10"
                  :reduceY="9"
                  :transition="'ease-out .7s'"
                  :cx="x"
                  :cy="y"
                  :d="50"
                >
                  <mh-mouse-scale-wrapper :scale="1.1">
                    <v-img :src="bottomLeft" max-width="220" contain>
                    <template v-slot>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-col cols="auto">
                            <div><v-img :src="bottomLeftIcon" contain :max-height="80"> </v-img></div>
                            <div class="text-center pt-4 text-h5 font      font-corpsansrd-cnd">
                              Web Apps 
                            </div>
                          
                          </v-col>
                        </v-row>
                      </template>
                       </v-img>
                  </mh-mouse-scale-wrapper>
                </mh-mouse-moveing-wrapper>
              </v-col>
              <v-col cols="6">
                <mh-mouse-moveing-wrapper
                  :reduceX="12"
                  :reduceY="9"
                  :transition="'ease-out .7s'"
                  :cx="x"
                  :cy="y"
                  :d="50"
                >
                  <mh-mouse-scale-wrapper :scale="1.1">
                    <v-img
                      :src="bottomRight"
                      style="border-radius: 28px"
                      max-width="150"
                      class="elevation-24"
                      contain
                    >
                    <template v-slot>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-col cols="auto">
                            <div><v-img :src="bottomRightIcon" contain :max-height="40"> </v-img></div>
                            <div class="text-center pt-4 text-h6       font-corpsansrd-cnd">
                             Interaction 
                            </div>
                            <div class="text-center  text-h6       font-corpsansrd-cnd">
                              Design 
                            </div>
                          </v-col>
                        </v-row>
                      </template>
                    </v-img>
                  </mh-mouse-scale-wrapper>
                </mh-mouse-moveing-wrapper>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </mh-layer>
  </mh-relative-size>
</template>

<script>
import topLeft from "./assets/web-animation.svg";
import topRight from "./assets/front.svg";
import bottomLeft from "./assets/web-app.svg";
import bottomRight from "./assets/des.svg";
import topLeftIcon from './assets/web-animation-icon.svg'
import topRightIcon from './assets/fe-dev-icon.svg'
import bottomLeftIcon from './assets/web-app-icon.svg'
import bottomRightIcon from './assets/interaction_design-icon.svg'

import back from "./assets/back.svg";
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
  props: {
    x: {
      type: [String, Number]
    },
    y: {
      type: [String, Number]
    }
  },
  data() {

    return {
      topLeft,
      topLeftIcon,
      topRight,
      topRightIcon,
      bottomLeft,
      bottomLeftIcon,
      bottomRight,
      bottomRightIcon,
      back,
      // x: undefined,
      // y: undefined,
    };
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