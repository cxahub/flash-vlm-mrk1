<template>
  <!-- Survey Progress -->
  <div v-if="pending"></div>
  <div v-else class="flex flex-nowrap gap-4 items-center py-8">
    <div class="font-bold pr-4">0%</div>
    <div
      class="w-full h-8 rounded-full border-2 relative cursor-default bg-white drop-shadow-md"
    >
      <!-- Player Ball -->
      <span
        v-if="showProgressBall"
        class="absolute pr-6 text-2xl text-fs-yellow text-roboto -ml-10"
        :style="{ left: progress }"
      >
        <span class="relative block h-7 rounded-full bg-fs-yellow right-0">
          <span class="block float-right text-white text-base px-2 pt-1">{{
            progress
          }}</span>
        </span>
      </span>
      <!-- Player Progress Bar-->
      <span
        class="block h-2 rounded-full bg-fs-yellow-light pt-4 pb-3"
        :style="{ width: progressBar }"
      ></span>
    </div>
    <div class="font-bold pl-4">{{ duration }}</div>
  </div>
</template>

<script setup>
import nuxtStorage from "nuxt-storage";
//Get runtime config.
const config = useRuntimeConfig();

const props = defineProps({
  questionID: { type: Number, default: 0 },
});

const showProgressBall = ref(false);

const duration = ref("100%");
const progressBar = ref("0%");
const completed = ref(0);
const pbValue = ref(0);
const progress = ref(0);

onNuxtReady(() => {
  setTimeout(function () {
    completed.value = complete.value;
    pbValue.value = Number(completed.value);
    progress.value = completed.value + "%";
    progressBar.value = pbValue.value + "%";
    showProgressBall.value = true;
  }, 500);
});

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
