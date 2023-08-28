<template>
  <UiProgressBar />
  <SurveyQuestion />
  <NavSurvey />
</template>

<script>
definePageMeta({
  layout: "survey",
});

export default {
  setup() {
    useHead({
      title: "Survey - FLASH - Enterprise Maturity Assessment",
      meta: [
        {
          name: "description",
          content: "Survey - FLASH - Enterprise Maturity Assessment",
        },
      ],
    });
  },
};
</script>
