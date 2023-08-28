<template>
  <h1 class="text-5xl uppercase font-bold py-4">Contact Us</h1>
  <FormContact />
</template>

<script>
definePageMeta({
  layout: "default",
});

export default {
  setup() {
    useHead({
      title: "Contact - FLASH - Enterprise Maturity Assessment",
      meta: [
        {
          name: "description",
          content: "Contact - FLASH - Enterprise Maturity Assessment",
        },
      ],
    });
  },
};
</script>
