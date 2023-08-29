<template>
  <div v-if="pending">
    <UiLoader icon="flash-icon-bg-white.png" />
  </div>
  <div v-else>
    <div class="mx-auto">
      <div class="grid grid-cols-3 gap-8 px-8 py-6 mb-8 border-2 rounded-3xl">
        <div>
          <h1 class="text-4xl font-bold uppercase pb-10">
            {{ question.header.texts[0].text }}
          </h1>
          <h2 class="text-2xl font-bold">
            {{ question.questions[0].body.texts[0].text }}
          </h2>
        </div>
        <div class="col-span-2">
          <div class="text-fs-yellow text-xl font-bold px-4 pb-8">
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
                class="rounded mt-2"
                required="required"
                placeholder="%"
              />
              <div class="text-xl font-bold ml-4">
                {{ q.header.texts[0].text }}
              </div>
            </div>
          </div>
          <div v-else>
            <div
              class="flex p-4"
              v-for="q in question.questions[0].answers[0].body.texts"
              :key="q.id"
            >
              <input
                type="checkbox"
                class="rounded mt-2 focus:outline-none focus:border-gray-300 focus:ring-none focus:ring-gray-300 text-fs-brown"
                required="required"
              />
              <div class="text-xl font-bold ml-4">
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

    //Fetch data.
    const { pending, data: question } = useLazyFetch(
      config.public.VUE_APP_API_URL +
        "/" +
        config.public.VUE_APP_API_VLM_ENROLL_ROUTE,
      {
        query: {
          question: parseInt(props.questionID),
        },
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
