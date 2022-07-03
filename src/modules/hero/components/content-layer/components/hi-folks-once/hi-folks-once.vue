<template>
  <div class="d-flex align-center">
    <div style="padding-inline: 3px" class="text-h3 majorelle-blue--text hi-hover">
      👋
    </div>
    <div class="me-3"></div>
    <div
      style="padding-inline: 3px"
      class="text-h3 font-BlackBones majorelle-blue--text hi-hover"
      v-for="(l, idx) in 'Hi'"
      :key="idx"
    >
      {{ l }}
    </div>
    <div class="me-3"></div>
    <div
      style="padding-inline: 3px"
      class="text-h3 font-BlackBones majorelle-blue--text hi-hover"
      v-for="(l, idx) in 'Folks!'"
      :key="idx"
    >
      {{ l }}
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>