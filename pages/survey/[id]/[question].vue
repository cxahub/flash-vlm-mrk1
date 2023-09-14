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

<script setup>
import nuxtStorage from "nuxt-storage";

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

//Fetch options.
const options = {
  method: "POST",
  body: {
    Response: {
      userInfo: {
        firstName: "John",
        lastName: "McCoy",
        userType: "Employee",
        userId: "140302",
        email: "flash@sap.com",
      },
      surveyInfo: {
        surveyTemplateId: 77,
        surveyAreaId: 4,
      },
    },
  },
  query: {
    questions: true,
  },
};

//Fetch data.
const { pending, data: questions } = useLazyFetch(
  config.public.VUE_APP_API_URL +
    "/" +
    config.public.VUE_APP_API_VLM_ENROLL_ROUTE,
  {
    method: options.method,
    body: options.body,
    query: options.query,
  }
);

const authenticated = ref(
  nuxtStorage.localStorage.getData("authenticated") || false
);

if (!authenticated.value) {
  console.log("Auth: " + nuxtStorage.localStorage.getData("authenticated"));
  //navigateTo("/");
}
</script>
