<template>
  <mh-relative-size :height="800">
    <mh-layer>
      <v-row class="mt-9">
        <v-col> <soso-crystal></soso-crystal> </v-col>
        <v-col>
          <smsm-crystal></smsm-crystal>
        </v-col>
        <v-col>
          <roro-crystal></roro-crystal>
        </v-col>
        <v-col>
          <holo-crystal></holo-crystal>
        </v-col>
        <v-col>
          <sub-crystal></sub-crystal>
        </v-col>
        <v-col>
          <sub2-crystal></sub2-crystal>
        </v-col>
        <v-col>
          <rou1-crystal></rou1-crystal>
        </v-col>
        <v-col>
          <rou2-crystal></rou2-crystal>
        </v-col>
      </v-row>
    </mh-layer>
   
  </mh-relative-size>
</template>

<script>
import soso from "./crystals/soso-crystal.vue";
import smsm from "./crystals/smsm-crystal.vue";
import sub from "./crystals/sub-crystal.vue";
import sub2 from "./crystals/sub2-crystal.vue";
import roro from "./crystals/roro-crystal.vue";
import holo from "./crystals/holo-crystal.vue";
import rou1 from "./crystals/rou1-crystal.vue";
import rou2 from "./crystals/rou2-crystal.vue";
export default {
  components: {
    "sub2-crystal": sub2,
    "sub-crystal": sub,
    "soso-crystal": soso,
    "rou1-crystal": rou1,
    "rou2-crystal": rou2,
    "holo-crystal": holo,
    "roro-crystal": roro,
    "smsm-crystal": smsm,
  },
};
</script>

<style>
</style>