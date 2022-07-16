<template>
  <mh-layer :zIndex="3">
    <v-container>
      <v-row style="padding-top: 230px">
        <v-col cols="6">
          <div>
            <mh-fit-pointer>
              <hi-folks-once />
            </mh-fit-pointer>
          </div>
          <div>
            <mh-fit-pointer>
              <div
                class="
                  text-h3
                  mt-5
                  font-corpsansrd-cnd font-weight-bold
                  white--text
                "
              >
                I'm Mohammad Al Hallaq
              </div>
              <div
                class="
                  text-h5
                  mt-5
                  font-corpsansrd-cnd
                  majorelle-blue--text
                  font-weight-light
                "
              >
                Front End Developer
              </div>
            </mh-fit-pointer>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <div>
            <mh-fit-pointer>
              <div
                class="
                  text-body
                  font-corpsansrd-cnd
                  white--text
                  font-weight-light
                "
              >
                Specialized in front-end development but also like trying out
                other technologies in order to become more flexible.
              </div>
            </mh-fit-pointer>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="auto">
          <mh-fit-pointer>
            <v-btn
              style="border-radius: 10px"
              dark
              class="me-3"
              color="majorelle-blue"
            >
              KNOW ME
            </v-btn>
            <v-btn v-ripple="false" dark plain text depressed color="white"
              >Check My Resume
            </v-btn>
          </mh-fit-pointer>
        </v-col>
      </v-row>
    </v-container>
    
    <div style="margin-top: 300px;    backdrop-filter: blur(1px);">
      <v-container >
      <v-row class="text-center py-3 text-h4">
        <v-col class="font-BlackBones vodka--text">
          <mh-fit-pointer> Know Me </mh-fit-pointer>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="5">
          <div class="">
            <v-img :src="imageFrame" :lazy-src="imageFrame" contain>
              <template v-slot>
                <div
                  style="
                    position: relative;
                    pointer-events: fill;
                    padding: 12% 12% 12% 12%;
                    width: 100%;
                    height: 100%;
                  "
                >
                  <div style="width: 100%; height: 100%">
                    <v-img
                      :src="person"
                      aspect-ratio=".77"
                      style="border-radius: 16px"
                    >
                    </v-img>
                  </div>
                  <div style="position: absolute; bottom: 10px; right: 1px">
                    <div class="d-flex flex-col justify-end fill-height">
                      <div class="mt-auto">
                        <v-img contain :lazy-src="hobies"  :src="hobies">
                          <template v-slot> </template>
                        </v-img>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </v-img>
          </div>
        </v-col>
        <v-col class="ps-8 d-flex flex-column ">
          <div
            class="
              text-h2
              mb-3
              font-corpsansrd-cnd font-weight-bold
              white--text
            "
          >
            <mh-fit-pointer> About </mh-fit-pointer>
          </div>
          <div class="mb-3">
            <mh-fit-pointer
              class="font-corpsansrd-cnd  font-weight-light white--text mh-font-size-25"
            >
              I'm a Front-End Developer located in Turkey. I have a serious
              passion for UI effects, animations and creating intuitive, dynamic
              user experiences.
            </mh-fit-pointer>
          </div>
          <div class="mb-3">
            <mh-fit-pointer
              class="font-corpsansrd-cnd white--text mh-font-size-25"
            >
              My main experience is in front-end development but I also have a
              passion for design. Given that producing a modern website requires
              the combination of design, server technology, and the layer that
              users interacts with. I believe having experience in both design
              and development allows for making the most optimal user
              experiences.
            </mh-fit-pointer>
          </div>
          <div class="mb-3">
            <mh-fit-pointer
              class="font-corpsansrd-cnd white--text mh-font-size-25"
            >
              I've built products for companies and businesses around the globe
              ranging from marketing websites to complex solutions and
              enterprise apps with focus on fast, elegant and accessible user
              experiences.
            </mh-fit-pointer>
          </div>
          <div class="  mt-auto pb-12">
            <div class="mt-12 text-h4 font-corpsansrd-cnd font-weight-bold">
              <mh-fit-pointer > Best Skills </mh-fit-pointer>
            </div>
            <div class="mt-5">
              
              <mh-fit-pointer>
                <v-btn rounded color="violets-are-blue-dark"  class="me-3">Vue</v-btn>
              <v-btn rounded color="violets-are-blue-dark"  class="me-3">Vuex</v-btn>
              <v-btn rounded color="violets-are-blue-dark"  class="me-3">Vuetify</v-btn>
            </mh-fit-pointer>
              </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    </div>
  </mh-layer>
</template>

<script>
import hiFolks from "./components/hi-folks-once/hi-folks-once.vue";
import imageFrame from "./assets/photo-frame.svg";
import imageFrame2 from "./assets/photo-frame-2.svg";

import person from "./assets/m-p.jpeg";
import hobies from "./assets/hobbies.svg";
export default {
  data() {
    return {
      imageFrame,
      imageFrame2,
      person,
      hobies,
    };
  },
  components: {
    "hi-folks-once": hiFolks,
  },
};
</script>

<style lang="scss">
div.hi-hover:hover {
  transform: scale(1.5);
  transition: all 0.3s cubic-bezier(0.7, -0.5, 0.3, 1.5) 0s;
  cursor: pointer;
}
.mh-font-size-25 {
  font-size: 21px;
  letter-spacing: .8px;
}

</style>