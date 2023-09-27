<template>
  <div class="grid grid-rows-3 grid-col-2 gap-8 xl:gap-16 pb-8 xl:py-4">
    <div
      v-if="groupID > 1 || questionID > 1"
      class="row-start-1"
      :class="questionID === 16 ? 'col-span-2 text-center' : 'text-center'"
    >
      <!--Handle index of questions.-->
      <div v-if="props.questionID === 1">
        <NuxtLink
          :to="`/survey/${parseInt(groupID - 1)}/5/${encodeURIComponent(
            questionPrevious.toLowerCase()
          )}`"
          class="max-w-max text-black font-bold uppercase rounded-lg cursor-pointer drop-shadow-lg bg-white border border-fs-brown hover:bg-fs-brown hover:text-white text-sm xl:text-base py-3 px-3 my-3 xl:py-4 xl:px-4 xl:my-4"
          >Previous Question</NuxtLink
        >
      </div>
      <div v-else>
        <NuxtLink
          :to="`/survey/${parseInt(groupID)}/${parseInt(
            questionID - 1
          )}/${encodeURIComponent(questionPrevious.toLowerCase())}`"
          class="max-w-max text-black font-bold uppercase rounded-lg cursor-pointer drop-shadow-lg bg-white border border-fs-brown hover:bg-fs-brown hover:text-white text-sm xl:text-base py-3 px-3 my-3 xl:py-4 xl:px-4 xl:my-4"
          >Previous Question</NuxtLink
        >
      </div>
    </div>
    <div
      v-if="groupID * questionID < 15"
      class="row-start-1"
      :class="questionID === 1 ? 'col-span-2 text-center' : 'text-center'"
    >
      <NuxtLink
        to=""
        @click="setSurveyAnswer(surveyAnswerID, surveyQuestionAnswer)"
        class="max-w-max text-black font-bold uppercase rounded-lg cursor-pointer drop-shadow-lg bg-fs-yellow hover:bg-fs-yellow-light text-sm xl:text-base py-3 px-3 my-3 xl:py-4 xl:px-4 xl:my-4"
        >Next Question</NuxtLink
      >
    </div>
    <div
      v-if="groupID * questionID == 15"
      class="row-start-1"
      :class="questionID === 1 ? 'col-span-2 text-center' : 'text-center'"
    >
      <NuxtLink
        to=""
        @click="setSurveyAnswer(surveyAnswerID, surveyQuestionAnswer, true)"
        class="max-w-max text-black font-bold uppercase rounded-lg cursor-pointer drop-shadow-lg bg-fs-yellow hover:bg-fs-yellow-light text-sm xl:text-base py-3 px-3 my-3 xl:py-4 xl:px-4 xl:my-4"
        >Last Question</NuxtLink
      >
    </div>
    <div
      class="row-start-2 col-span-2 xl:row-start-1 xl:col-start-1 xl:col-span-1 text-center"
      :class="questionID === 16 ? 'xl:col-span-2 text-center' : ''"
    >
      <NuxtLink
        to="/dashboard"
        class="max-w-max font-bold uppercase rounded-lg cursor-pointer drop-shadow-lg bg-fs-brown border border-fs-yellow text-white hover:bg-white hover:text-fs-brown text-sm xl:text-base py-3 px-3 my-3 xl:py-4 xl:px-4 xl:my-4"
        >View Dashboard</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
import nuxtStorage from "nuxt-storage";

//Get runtime config.
const config = useRuntimeConfig();

const results = ref("");

const props = defineProps({
  groupID: { type: Number, default: 0 },
  questionID: { type: Number, default: 0 },
  surveyAnswerID: { type: Number, default: 0 },
  surveyQuestionAnswer: { type: Array, default: [] },
  questionPrevious: { type: String, default: "question" },
  questionNext: { type: String, default: "question" },
});

function setSurveyAnswer(id, answer, lastQuestion) {
  formRequest(id, answer, lastQuestion)
    .then((result) => {
      results.value = result;
      if (results.value.status) {
        //Account for group change.
        if (props.questionID === 5 && !lastQuestion) {
          navigateTo(
            `/survey/${parseInt(props.groupID + 1)}/1/${encodeURIComponent(
              props.questionNext.toLowerCase()
            )}`
          );
        } else if (lastQuestion) {
          navigateTo(`/dashboard`);
        } else {
          navigateTo(
            `/survey/${parseInt(props.groupID)}/${parseInt(
              props.questionID + 1
            )}/${encodeURIComponent(props.questionNext.toLowerCase())}`
          );
        }
      }
    })
    .catch((error) => {
      console.error("Survey answer form could not be sent", error);
    });
}

//Fetch options.
const options = {
  query: {
    "x-auth-token": nuxtStorage.localStorage.getData("token"),
    userId: useCookie("userId").value,
  },
};

async function formRequest(id, answer) {
  return await $fetch(
    config.public.VUE_APP_API_URL +
      "/" +
      config.public.VUE_APP_API_VLM_SURVEY_SAVE_RESPONSE_ROUTE,
    {
      method: "POST",
      body: {
        Response: [
          {
            response_value: answer.toString(),
            unique_id: parseInt(id),
            assignee_id: null,
            assignee_email: null,
            emailpayload: null,
          },
        ],
      },
      query: options.query,
    }
  );
}
</script>
