<template>
  <button
    class=" copy-my-email-button d-flex "
    :class="copied ? 'active-copy' : ''"
    @click="copyEmail"
    style="width: 100%"
  >
    <div class="copy-button">
      <v-icon>mdi-content-copy</v-icon>
    </div>
    <div  v-if="copied" class="email-button">Copied!</div>
    <div v-else class="email-button   font-corpsansrd-cnd ">mohammad@mhacd.com</div>
  </button>
</template>

<script>
export default {
  data() {
    return {
      copied: false,
    };
  },
  methods: {
    copyEmail() {
      this.copied = true;
      // window.navigator.clipboard.writeText('mohammad@mhacd.com')
      this.$copyText("mohammad@mhacd.com")
      setTimeout(() => {
        this.copied = false;
      }, 1200);
    },
  },
};
</script>

<style lang="scss">
.copy-my-email-button {
  // background: var(--v-majorelle-blue-base);
    background: var(--v-rich-black-base);
     border-radius: 15px;
        transition: all 0.3s ease-in-out 0s;
        border: none;
  // background: var(--v-chinese-black-base);
  // background: var(--v-violets-are-blue-dark-base);
  // background: var(--v-violets-are-blue-light-base);
  .copy-button {
    background: var(--v-violets-are-blue-dark-base);
  
    padding: 10px;
     height: 46px;
      border-start-start-radius: 10px;
     border-end-start-radius: 10px;
     transition: all 0.3s ease-in-out 0s;
  }
  .email-button {
    padding: 10px;
   
    width: 100%;
    height: 46px;
    transition: all 0.3s ease-in-out 0s;
    color: var(--v-fake-path-button-once-base);
  }
}
.active-copy.copy-my-email-button ,
.copy-my-email-button:hover {
         background: var(--v-majorelle-blue-base);
     .copy-button {
    background: var(--v-majorelle-blue-base);
    color: var(--v-white-base);
  }
  .email-button {
 
      color: var(--v-white-base);
      
  }
    

}
</style>
