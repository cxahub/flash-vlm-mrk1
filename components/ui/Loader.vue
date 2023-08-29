<template>
  <div class="text-center">
    <img
      :src="`/images/icon/${icon}`"
      loading="lazy"
      class="w-8 mx-auto animate-bounce"
      aria-label="firestarters loader"
    />
    <div class="animate-pulse">Loading</div>
  </div>
</template>

<script>
export default {
  props: {
    icon: { type: String, default: "flash-icon.png" },
  },
};
</script>
