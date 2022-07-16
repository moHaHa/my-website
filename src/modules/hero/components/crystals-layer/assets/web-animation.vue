<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 214 252"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="214"
      height="252"
      rx="33"
      fill="url(#paint0_linear_271_1341)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_271_1341"
        x1="214"
        y1="227"
        x2="2.8104"
        y2="-95.6571"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#957CFF" />
        <stop offset="1" stop-color="#C0B1FF" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: [Number, String],
      default: () => 214,
    },
    height: {
      type: [Number, String],
      default: () => '',
    },
    
  },
};
</script>

<style>
</style>