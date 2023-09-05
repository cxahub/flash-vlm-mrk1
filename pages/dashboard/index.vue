<template>
  <h1 class="text-2xl xl:text-5xl uppercase font-bold">
    Your Survey Dashboard
  </h1>
  <div class="grid xl:grid-cols-2 gap-0 xl:gap-4">
    <div class="xl:text-xl py-8">
      Use the button on the right to get started with our guided assessment.
      Alternatively, you can jump to any section that interests you below. All
      questions must be completed to generate a report.
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

<script>
export default {
  setup() {
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
  },
  data() {
    return {
      showSurveyList: false,
    };
  },
};
</script>
