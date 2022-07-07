<template>
  <div class="chinese-black" id="contact">
    <my-name></my-name>
    <v-container>
      <v-row class="text-center py-3 text-h5">
        <v-col class="font-BlackBones vodka--text">Let's Talk</v-col>
      </v-row>
      <v-row class="text-center py-3 text-h2">
        <v-col class="font-corpsansrd-cnd font-weight-bold">Contact</v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="5">
          <contact-form> </contact-form>
        </v-col>
        <v-col class="links-col-padding-start-once" cols="12" lg="7">
          <v-row no-gutters dense>
            <v-col class="mb-2 pt-1" cols="12" md="6" v-for="link , idx in links " :key="idx">
              <contact-link :link="link"> 
                
              </contact-link>
            </v-col>
            <v-col cols="12" style="padding-top:2px">
             <copy-my-email></copy-my-email>
            </v-col>
           
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import contactForm from "./components/contact-form/contact-form.vue";
import contactLink from "./components/contact-link/contact-link.vue";
import copyMyEmail from './components/copy-my-email/copy-my-email.vue'
// import myName from './components/my-name/my-name.vue'
export default {
  components: {
    "contact-form": contactForm,
    "contact-link": contactLink,
    "copy-my-email": copyMyEmail,
    // "my-name": myName,
  },
  data(){
    return {
      links: [
        {title: 'GitHub' , path: 'https://github.com/HBO30' , fakePath: "github.com/HBO30" ,icon: 'mdi-github'},
        {title: 'Codepen' , path: 'https://codepen.io/HBO30' , fakePath: "codepen.io/HBO30" ,icon: 'mdi-codepen'},
        {title: 'Linkedin' , path: 'https://www.linkedin.com/in/mohammad-al-hallaq1/' , fakePath: "linkedin.com/in/mohammad-al-hallaq1" ,icon: 'mdi-linkedin'},
        {title: 'Twitter' , path: 'https://twitter.com/malhallaq1' , fakePath: "twitter.com/malhallaq1" ,icon: 'mdi-twitter'},
        {title: 'Instagram' , path: 'https://www.instagram.com/mohammed.alhalaq' , fakePath: "instagram.com/mohammed.alhalaq" ,icon: 'mdi-instagram'},
        {title: 'Behance' , path: 'https://www.behance.net/edthree' , fakePath: "behance.net/edthree" ,icon: 'mdi-behance'},
      ]
    }
  }
};
</script>

<style>
#contact {
  position: relative;
  z-index: 2;
}
.links-col-padding-start-once {
  padding-inline-start: 36px !important;
}

@media (max-width: 1264px) {
  .links-col-padding-start-once {
    padding-inline-start: 12px !important;
  }
  
}
</style>