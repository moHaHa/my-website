<template>
  <v-form>
    <v-row dense no-gutters>
      <v-col cols="12"  >
        <v-text-field color="majorelle-blue" label="name"></v-text-field>
      </v-col>
      <v-col cols="12" >
        <v-text-field color="majorelle-blue" label="email"></v-text-field>
      </v-col>
      <v-col cols="12" >
        <v-textarea :rows="4"  color="majorelle-blue" label="message"></v-textarea>
      </v-col>
      <v-col cols="12" >
        <div class="d-flex">
          <v-spacer></v-spacer>
        <v-btn color="majorelle-blue">
          Send Message  
        </v-btn>
        </div>
</v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
    created(){
        console.log(this.$vuetify);
    }
};
</script>

<style>
</style>