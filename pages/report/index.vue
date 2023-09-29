<template>
  <h1 class="text-3xl xl:text-5xl uppercase font-bold py-4">Thank You</h1>
  <div class="text-lg">
    Your <span class="font-bold">FLASH&trade;</span> Report is ready for
    download!<br /><br />
    <UiButton
      class="py-4"
      text="Download"
      path="/report"
      format="primary"
      size="lg"
    /><br />
    If you are unable to download your report please contact us at:
    <NuxtLink
      :to="`mailto:flash@sap.com?subject=FLASH Download Problem - ${company}`"
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
      FLASH&trade; Report
    </NuxtLink>
    <p class="text-lg text-center xl:text-left">
      You must complete all questions to download your FLASH&trade; report.
    </p>
  </div>
  <div v-else>
    <h1
      class="text-3xl xl:text-5xl text-center xl:text-left uppercase font-bold py-4"
    >
      Thank You
    </h1>
    <p class="text-lg text-center xl:text-left">
      Your <span class="font-bold">FLASH&trade;</span> Report is ready for
      download!<br /><br />
      <NuxtLink
        to=""
        @click.prevent="getReport(); showDownload = !showDownload"
        class="max-w-max text-black font-bold uppercase rounded-lg cursor-pointer drop-shadow-lg bg-fs-yellow hover:bg-fs-yellow-light text-sm xl:text-base py-3 px-3 my-3 xl:py-4 xl:px-4 xl:my-4"
        >Download Report</NuxtLink
      >
      <div v-if="showDownload">
        <UiLoader icon="flash-icon-bg-white.png" type="download" />
      </div>
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
      >.<br /><br />
      Please provide feedback regarding your experience, request a meeting, or
      visit our
      <NuxtLink
        :to="firestartersURL"
        activeClass="text-fs-yellow"
        class="underline"
        target="_blank"
      >
        Firestarters&trade; Online Global Community</NuxtLink>
      , we'd love to hear from you.
    </p>
    <h2 class="text-4xl text-center xl:text-left uppercase font-bold py-8">
      Next Steps?
    </h2>
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
const config = useRuntimeConfig();
const firestartersURL = config.public.VUE_APP_FIRESTARTERS_WEBSITE_URL;

const company = ref(useCookie("company") || false);

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
</script>
