<template>
  <MainHome />
</template>

<script>
definePageMeta({
  layout: "home",
});

export default {
  setup() {
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
