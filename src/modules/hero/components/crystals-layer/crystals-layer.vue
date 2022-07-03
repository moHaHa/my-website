<template>
  <mh-relative-size :height="1300">
    <mh-layer v-if="false">
      <v-row justify="space-between">
        <v-col cols="1">
          <sub2-crystal></sub2-crystal>
        </v-col>
        <v-col cols="1">
          <sub2-crystal></sub2-crystal>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col cols="1">
          <smsm-crystal></smsm-crystal>
        </v-col>
        <v-col cols="1">
          <smsm-crystal></smsm-crystal>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col cols="1">
          <roro-crystal></roro-crystal>
        </v-col>
        <v-col cols="1">
          <roro-crystal></roro-crystal>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col cols="1">
          <soso-crystal></soso-crystal>
        </v-col>
        <v-col cols="1">
          <soso-crystal></soso-crystal>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col cols="1">
          <holo-crystal></holo-crystal>
        </v-col>
        <v-col cols="1">
          <holo-crystal></holo-crystal>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col cols="1">
          <sub-crystal></sub-crystal>
        </v-col>
        <v-col cols="1">
          <sub-crystal></sub-crystal>
        </v-col>
      </v-row>

      <v-row justify="space-between">
        <v-col cols="1">
          <sub2-crystal></sub2-crystal>
        </v-col>
        <v-col cols="1">
          <sub2-crystal></sub2-crystal>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col cols="1">
          <rou1-crystal></rou1-crystal>
        </v-col>
        <v-col cols="1">
          <rou1-crystal></rou1-crystal>
        </v-col>
      </v-row>
    </mh-layer>
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
      

      <v-container  class="pt-8 mt-12">
        
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
      

      <v-container  style="margin-top: 800px;">
        
        <v-row  justify="space-around" >
         
          <v-col offset="1" cols="3">
            <div class="pt-10">
           <rou1-crystal></rou1-crystal>
            </div>
          </v-col>
          <v-col  cols="3">
            <div class="">
           <soso-crystal></soso-crystal>
            </div>
          </v-col>
        </v-row>
        <v-row  justify="center" class="mt-12 pt-12" >
         
        
          <v-col   class="mt-12 pt-12" cols="auto">
            <div class="">
           <tall-crystal></tall-crystal>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </mh-layer>
    <mh-layer>
      

      <v-container  style="margin-top: 500px;">
        
        <v-row  >
         
          <v-col offset="1" cols="3">
            <div class="pt-10">
           <roro-crystal></roro-crystal>
            </div>
          </v-col>
          <v-col  cols="3">
            <div class="">
           <sub-crystal></sub-crystal>
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
};
</script>

<style>
.pt-90 {
  padding-top: 120px;
}
</style>