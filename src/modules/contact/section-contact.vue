<template>
  <div id="contact">
    <v-container>
      <v-row class="text-center py-3 text-h5">
        <v-col>Let's Talk</v-col>
      </v-row>
      <v-row class="text-center py-3 text-h3">
        <v-col>Contact</v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="5">
          <contact-form> </contact-form>
        </v-col>
        <v-col cols="12" lg="7"> </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import contactForm from './components/contact-form/contact-form.vue'

export default {
  components:{
    'contact-form': contactForm
  }
};
</script>

<style>
</style>