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
      <UiButton
        text="Start Survey Now &rarr;"
        path="/survey/1/customer%20centricity"
        size="xl"
      />
    </div>
    <div class="py-10 text-center xl:text-left">
      <UiButton
        :text="!showSurveyList ? 'Show My Surveys' : 'Hide My Surveys'"
        path=""
        @click="showSurveyList = !showSurveyList"
      />
    </div>
  </div>
  <div v-if="showSurveyList">
    <DashboardSurveyList />
  </div>
  <div v-else>
    <UiProgressBar />
    <DashboardQuestions :showLink="true" />
    <ReportGenerate />
  </div>
</template>

<script setup>
import nuxtStorage from "nuxt-storage";

//Get runtime config.
const config = useRuntimeConfig();

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
const authenticated = ref(useCookie("authenticated") || false);
const token = ref();

onMounted = () => {
  tokenRequest()
    .then((result) => {
      results.value = result;
      if (results.value.success) {
        //Store token locally.
        nuxtStorage.localStorage.setData("token", auth.results.token, 12);
      }
    })
    .catch((error) => {
      console.error("Token could not be received", error);
    });
};

async function tokenRequest() {
  //Create a cookie for company name.
  const company = useCookie("company", { maxAge: 1704085200 });
  company.value = cnv;
  const authenticated = useCookie("authenticated", { maxAge: 1704085200 });
  authenticated.value = true;
  result.success = true;
  return result;
}

//Check auth.
if (!authenticated.value) {
  navigateTo("/");
}

//Fetch options.
const options = {
  method: "POST",
  body: {
    uName: "flash@sap.com",
    pass: config.public.VUE_APP_API_VLM_USER_PASSWORD,
  },
};

//Fetch data.
const { data: auth } = useFetch(
  config.public.VUE_APP_API_URL +
    "/" +
    config.public.VUE_APP_API_VLM_LOGIN_ROUTE,
  {
    method: options.method,
    body: options.body,
  }
);
</script>
