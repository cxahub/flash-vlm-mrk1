<template>
  <h1 class="text-5xl uppercase font-bold">Your Survey Dashboard</h1>
  <div class="grid grid-cols-2">
    <div class="text-xl py-8">
      Use the button on the right to get started with our guided assessment.
      Alternatively, you can jump to any section that interests you below. All
      questions must be completed to generate a report.
    </div>
    <div class="py-10 text-right float-right">
      <UiButton
        text="Start Survey Now &rarr;"
        path="/survey/1/customer%20centricity"
        size="xl"
      />
    </div>
    <div class="py-10">
      <UiButton
        text="Show My Surveys"
        path=""
        @click="showSurveyList = !showSurveyList"
      />
    </div>
  </div>
  <div v-if="showSurveyList">
    <DashboardSurveyList />
  </div>
  <div v-else>
    <DashboardQuestions />
    <UiProgressBar />
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
