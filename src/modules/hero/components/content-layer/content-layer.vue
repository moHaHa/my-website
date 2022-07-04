<template>
  <mh-layer :zIndex="3">
    <v-container>
      <v-row style="padding-top: 230px">
        <v-col>
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
            <v-btn style="border-radius: 10px" dark class="me-3" color="majorelle-blue"> KNOW ME </v-btn>
            <v-btn v-ripple="false" dark plain text depressed color="white">Check My Resume </v-btn>
          </mh-fit-pointer>
        </v-col>
      </v-row>
    </v-container>
  </mh-layer>
</template>

<script>
import hiFolks from "./components/hi-folks-once/hi-folks-once.vue";
export default {
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
</style>