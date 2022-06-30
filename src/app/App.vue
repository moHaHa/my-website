<template>
  <v-app id="app" class="rich-black app-mohammad-webite">
    <router-view> </router-view>
  </v-app>
</template>
<script>
import axios from 'axios'
export default {
  created() {
    this.$vuetify.theme.dark = true;
    this.postReport()
  },
  methods: {
    async postReport() {
      let response = await axios.get("https://api.ipify.org/?format=json");
      var currentdate = new Date();
      var datetime =
        "Date " +
        currentdate.getDate() +
        "/" +
        (currentdate.getMonth() + 1) +
        "/" +
        currentdate.getFullYear() +
        " | Time " +
        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds();
      console.log(datetime);
      axios.post("http://hbo30edthree-001-site1.dtempurl.com/api/report", {
        ip: response.data.ip,
        lastsync: datetime,
      });
    },
  },
};
</script>

<style>
</style>


