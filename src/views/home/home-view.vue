<template>
  <div>
    <heroSection />
    <contactSection />
  </div>
</template>

<script>
import heroSection from "../../modules/hero/section-hero.vue";
import contactSection from "../../modules/contact/section-contact.vue";
export default {
  components: {
    heroSection,
    contactSection,
  },
};
</script>

<style>
</style>