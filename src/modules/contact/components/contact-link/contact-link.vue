<template>
  <a :href="link.path"  target="_blanck" class="font-corpsansrd-cnd  d-block py-4 rounded-lg px-4 text-decoration-none contact-link" >
    <div class="d-flex align-center">
      <div class="me-3"><v-icon x-large >{{link.icon}}</v-icon></div>
      <div class="d-flex flex-column">
        <div class="white--text text-h6 font-corpsansrd-cnd  font-weight-bold">{{link.title}}</div>
        <div class=" text-caption fake-path-button-once--text font-corpsansrd-cnd font-weight-light">{{link.fakePath}}</div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    link:{
      type: Object
    }
  }
}
</script>

<style>

</style>