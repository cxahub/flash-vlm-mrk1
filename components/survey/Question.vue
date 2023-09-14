<template>
  <div v-if="pending">
    <UiLoader icon="flash-icon-bg-white.png" />
  </div>
  <div v-else>
    <div class="mx-auto">
      <div
        class="grid grid-cols-1 xl:grid-cols-3 gap-0 xl:gap-8 px-8 py-6 mb-8 border-2 rounded-3xl bg-white drop-shadow-lg"
      >
        <div>
          <h1
            class="text-2xl xl:text-4xl text-center xl:text-left font-bold uppercase pb-4 xl:pb-10"
          >
            {{ question.header.texts[0].text }}
          </h1>
          <h2 class="xl:text-2xl xl:font-bold text-center xl:text-left pb-4">
            {{ question.questions[0].body.texts[0].text }}
          </h2>
        </div>
        <div class="xl:col-span-2">
          <div
            class="text-fs-yellow drop-shadow-sm xl:text-xl font-semibold xl:font-bold text-center xl:text-left px-4 xl:pb-8"
          >
            {{ question.body.texts[0].text }}
          </div>
          <div v-if="questionID > 14">
            <div
              class="flex p-4"
              v-for="q in question.questions[0].answers"
              :key="q.id"
            >
              <input
                type="number"
                min="1"
                max="100"
                class="rounded mt-1 xl:mt-2 h-10"
                required="required"
                placeholder="%"
              />
              <div class="xl:text-xl xl:font-bold ml-4">
                {{ q.header.texts[0].text }}
              </div>
            </div>
          </div>
          <div v-else>
            <div
              class="flex p-4"
              v-for="(q, index) in question.questions[0].answers[0].body.texts"
              :key="q.id"
            >
              <input
                :name="q.id"
                :value="index + 1"
                type="checkbox"
                class="rounded mt-1 xl:mt-1.5 ring-0 focus:ring-0 ring-transparent ring-offset-0 shadow-none focus:ring-transparent bg-white text-fs-brown"
                required="required"
              />
              <div class="xl:text-xl xl:font-bold ml-4">
                {{ q.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    questionID: { type: Number, default: 0 },
  },
  setup(props) {
    //Get runtime config.
    const config = useRuntimeConfig();

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
        question: parseInt(props.questionID),
      },
    };

    //Fetch data.
    const { pending, data: question } = useLazyFetch(
      config.public.VUE_APP_API_URL +
        "/" +
        config.public.VUE_APP_API_VLM_ENROLL_ROUTE,
      {
        method: options.method,
        body: options.body,
        query: options.query,
      }
    );

    return {
      config,
      question,
      pending,
    };
  },
};
</script>
