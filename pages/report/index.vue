<template>
  <div v-if="complete >= 100">
    <h1 class="text-3xl xl:text-5xl uppercase font-bold py-4">
      FLASH&trade; Report
    </h1>
    <p class="text-lg">
      You must complete all questions to download your FLASH&trade; report.
    </p>
  </div>
  <div v-else>
    <h1 class="text-3xl xl:text-5xl uppercase font-bold py-4">Thank You</h1>
    <p class="text-lg">
      Your <span class="font-bold">FLASH&trade;</span> Report is ready for
      download!<br /><br />
      <NuxtLink
        to=""
        @click="getReport()"
        class="max-w-max text-black font-bold uppercase rounded-lg cursor-pointer drop-shadow-lg bg-fs-yellow hover:bg-fs-yellow-light text-sm xl:text-base py-3 px-3 my-3 xl:py-4 xl:px-4 xl:my-4"
        >Download Report</NuxtLink
      >
      <br />
      <br />
      <br />
      If you are unable to download your report please contact us at:
      <NuxtLink
        :to="`mailto:flash@sap.com?subject=FLASH Download Problem - ${companyName}`"
        activeClass="text-fs-yellow"
        class="underline"
        target="_blank"
        >flash@sap.com</NuxtLink
      ><br /><br />
      Please provide feedback regarding your experience, request a meeting, or
      visit our
      <NuxtLink
        :to="firestartersURL"
        activeClass="text-fs-yellow"
        class="underline"
        target="_blank"
      >
        Firestarters&trade; Online Global Community
      </NuxtLink>
      site, we'd love to hear from you.
    </p>
    <h2 class="text-4xl uppercase font-bold py-8">Next Steps?</h2>
    <div class="grid xl:grid-cols-3 gap-8">
      <div>
        <ReportRequest />
      </div>
      <div>
        <ReportFeedback />
      </div>
      <div>
        <ReportFirestarters />
      </div>
    </div>
  </div>
</template>

<script setup>
import nuxtStorage from "nuxt-storage";

const token = nuxtStorage.localStorage.getData("token");

if (!token) {
  navigateTo("/profile?timeout=true");
}

const config = useRuntimeConfig();
const firestartersURL = config.public.VUE_APP_FIRESTARTERS_WEBSITE_URL;
const companyName = useCookie("companyName").value;

definePageMeta({
  layout: "default",
}),
  useHead({
    title: "Report - FLASH - Enterprise Maturity Assessment",
    meta: [
      {
        name: "description",
        content: "Report - FLASH - Enterprise Maturity Assessment",
      },
    ],
  });

function getReport() {
  getDownload()
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error("Get report could not be sent", error);
    });
}

async function getDownload() {
  return await $fetch(
    config.public.VUE_APP_API_URL +
      "/" +
      config.public.VUE_APP_API_VLM_REPORT_ROUTE,
    {
      method: "GET",
      query: {
        "x-auth-token": nuxtStorage.localStorage.getData("token"),
        surveyId: useCookie("surveyID").value,
      },
    }
  );
}

const options = {
  method: "GET",
  query: {
    "x-auth-token": nuxtStorage.localStorage.getData("token"),
    customerSurveyId: useCookie("surveyID").value,
    completedpercentage: true,
  },
};

//Fetch data.
const { pending, data: complete } = await useLazyFetch(
  config.public.VUE_APP_API_URL +
    "/" +
    config.public.VUE_APP_API_VLM_SURVEY_ROUTE,
  {
    method: options.method,
    query: options.query,
  }
);
</script>
