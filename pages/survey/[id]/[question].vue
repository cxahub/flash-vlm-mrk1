<template>
  <div v-if="pending">
    <UiLoader icon="flash-icon-bg-white.png" />
  </div>
  <div v-else>
    <UiProgressBar :questionID="parseInt(route.params.id)" />
    <SurveyQuestion :questionID="parseInt(route.params.id) - 1" />
    <div
      v-if="parseInt(route.params.id) > 1 && parseInt(route.params.id) <= 15"
    >
      <NavSurvey
        :questionID="parseInt(route.params.id)"
        :questionPrevious="
          questions[parseInt(route.params.id - 2)].header.texts[0].text
        "
        :questionNext="
          questions[parseInt(route.params.id)].header.texts[0].text
        "
      />
    </div>
    <div v-else-if="parseInt(route.params.id) > 15">
      <NavSurvey
        :questionID="parseInt(route.params.id)"
        :questionPrevious="
          questions[parseInt(route.params.id - 2)].header.texts[0].text
        "
      />
    </div>
    <div v-else>
      <NavSurvey
        :questionID="parseInt(route.params.id)"
        :questionNext="
          questions[parseInt(route.params.id)].header.texts[0].text
        "
      />
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const route = useRoute();
    //Get runtime config.
    const config = useRuntimeConfig();
    definePageMeta({
      layout: "survey",
    }),
      useHead({
        title: "Survey - FLASH - Enterprise Maturity Assessment",
        meta: [
          {
            name: "description",
            content: "Survey - FLASH - Enterprise Maturity Assessment",
          },
        ],
      });
    //Fetch data.
    const { pending, data: questions } = useLazyFetch(
      config.public.VUE_APP_API_URL +
        "/" +
        config.public.VUE_APP_API_VLM_ENROLL_ROUTE,
      {
        query: {
          questions: true,
        },
      }
    );
    return {
      route,
      questions,
      pending,
    };
  },
};
</script>
