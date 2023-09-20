<template>
  <h1 class="text-3xl xl:text-5xl font-bold text-fs-yellow">
    Survey Dashboard
  </h1>
  <div class="grid xl:grid-cols-2 gap-0 xl:gap-4">
    <div class="xl:text-xl py-8">
      <span class="font-bold"
        >We'll keep track of your progress for you on this page.<br
      /></span>
      Use the button on the right to get started with your assessment.
    </div>
    <div class="py-10 text-center xl:text-right float-right">
      <NuxtLink
        to="/survey/1/1/customer%20centricity"
        class="max-w-max text-black font-bold uppercase rounded-lg cursor-pointer drop-shadow-lg bg-fs-yellow hover:bg-fs-yellow-light text-xl xl:text-2xl py-4 px-4 my-4 xl:py-6 xl:px-6 xl:my-6"
      >
        Start Survey Now &rarr;</NuxtLink
      >
    </div>
    <!--
    <div class="py-10 text-center xl:text-left">
      <UiButton
        :text="!showSurveyList ? 'Show My Surveys' : 'Hide My Surveys'"
        path=""
        @click="showSurveyList = !showSurveyList"
      />
    </div>-->
  </div>
  <div v-if="showSurveyList">
    <DashboardSurveyList />
  </div>
  <div v-else>
    <UiProgressBar :completePercentage="complete" />
    <DashboardQuestions :showLink="true" :completePercentage="complete" />
  </div>
</template>

<script setup>
import nuxtStorage from "nuxt-storage";

//Get runtime config.
const config = useRuntimeConfig();

const token = nuxtStorage.localStorage.getData("token");

if (!token) {
  navigateTo("/profile?timeout=true");
}

definePageMeta({
  layout: "dashboard",
}),
  useHead({
    title: "Dashboard - FLASH - Enterprise Maturity Assessment",
    meta: [
      {
        name: "description",
        content: "Dashboard - FLASH - Enterprise Maturity Assessment",
      },
    ],
  });

const showSurveyList = ref(false);

const options = {
  method: "GET",
  query: {
    "x-auth-token": nuxtStorage.localStorage.getData("token"),
    customerSurveyId: useCookie("surveyID").value,
    completedpercentage: true,
  },
};

//Fetch data.
const { data: complete } = useLazyFetch(
  config.public.VUE_APP_API_URL +
    "/" +
    config.public.VUE_APP_API_VLM_SURVEY_ROUTE,
  {
    method: options.method,
    query: options.query,
  }
);
</script>
