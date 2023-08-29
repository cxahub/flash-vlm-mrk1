<template>
  <MainCollaborate />
</template>

<script>
export default {
  setup() {
    definePageMeta({
      layout: "collaborate",
    }),
      useHead({
        title: "Collaborate - FLASH - Enterprise Maturity Assessment",
        meta: [
          {
            name: "description",
            content: "Collaborate - FLASH - Enterprise Maturity Assessment",
          },
        ],
      });
  },
};
</script>
