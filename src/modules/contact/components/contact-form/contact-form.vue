<template>
  <v-form>
    <v-row>
      <v-col cols="12">
        <v-text-field color="majorelle-blue" label="name"></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field color="violets-are-blue-dark" label="name"></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field color="vodka" label="name"></v-text-field>
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