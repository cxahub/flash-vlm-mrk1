<template>
  <MainCollaborate />
</template>

<script>
definePageMeta({
  layout: "collaborate",
});

export default {
  setup() {
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
