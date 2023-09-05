<template>
  <div class="py-6">
    <div v-if="pending">
      <UiLoader icon="flash-icon-bg-white.png" />
    </div>
    <div v-else>
      <div class="w-full">
        <div v-for="(q, index) in questions" :key="q.id">
          <div :class="colWidth ? 'xl:inline-block xl:float-left' : ''">
            <div v-if="showLink">
              <NuxtLink
                :to="`/survey/${
                  index + 1
                }/${q.header.texts[0].text.toLowerCase()}`"
              >
                <div
                  class="w-100 text-base xl:text-lg font-bold text-black text-center uppercase border-2 border-gray-600 rounded-full hover:bg-fs-yellow hover:text-black py-2 px-4 my-2 mx-3 cursor-pointer"
                >
                  {{ q.header.texts[0].text }}
                </div></NuxtLink
              >
            </div>
            <div v-else>
              <div
                class="xl:w-100 text-base xl:text-lg font-bold text-black text-center uppercase border-2 border-gray-600 rounded-full hover:bg-fs-yellow hover:text-black py-2 px-4 my-2 mx-0"
              >
                {{ q.header.texts[0].text }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clear-both"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showLink: { type: Boolean },
    colWidth: { type: Boolean },
  },
  setup() {
    //Get runtime config.
    const config = useRuntimeConfig();

    //Fetch options.
    const options = {
      method: "POST",
      body: {
        Response: {
          userInfo: {
            firstName: "Chad",
            lastName: "Fraser",
            userType: "Employee",
            userId: "140256",
            email: "chad.fraser@sap.com",
          },
          surveyInfo: {
            surveyTemplateId: 77,
            surveyAreaId: 4,
          },
        },
      },
      query: {
        questions: true,
      },
    };

    //Fetch data.
    const { pending, data: questions } = useLazyFetch(
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
      questions,
      pending,
    };
  },
};
</script>
