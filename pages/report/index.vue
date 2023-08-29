<template>
  <h1 class="text-5xl uppercase font-bold py-4">Thank You</h1>
  <p class="text-lg">
    Your <span class="font-bold">FLASH&trade;</span> Report is processing and
    will be emailed to
    <span class="text-fs-yellow font-bold underline">{{ userEmail }}</span>
    shortly.<br /><br />
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
  <div class="grid grid-cols-3 gap-8">
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
</template>

<script>
export default {
  setup() {
    const config = useRuntimeConfig();
    const firestartersURL = config.public.VUE_APP_FIRESTARTERS_WEBSITE_URL;

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

    return {
      firestartersURL,
    };
  },
  data() {
    return {
      userEmail: "m.helle@sap.com",
    };
  },
};
</script>
