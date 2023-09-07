<template>
  <div class="text-center py-16">
    <img
      :src="`/images/icon/${icon}`"
      loading="lazy"
      class="w-8 mx-auto animate-bounce drop-shadow-lg pb-4"
      aria-label="firestarters loader"
    />
    <div class="animate-pulse font-bold">Loading...</div>
  </div>
</template>

<script>
export default {
  props: {
    icon: { type: String, default: "flash-icon.png" },
  },
};
</script>
