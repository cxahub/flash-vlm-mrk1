<template>
  <MainHome />
</template>

<script>
export default {
  setup() {
    definePageMeta({
      layout: "home",
    }),
      useHead({
        title: "FLASH - Enterprise Maturity Assessment",
        meta: [
          {
            name: "description",
            content: "FLASH - Enterprise Maturity Assessment",
          },
        ],
      });
  },
};
</script>
