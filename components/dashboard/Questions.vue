<template>
  <div class="py-6">
    <div v-if="pending">
      <UiLoader icon="flash-icon-bg-white.png" />
    </div>
    <div v-else>
      <div class="grid grid-rows-1 grid-flow-col gap-4 text-center">
        <div
          v-for="(q, index) in questions"
          :key="q.id"
          :class="index === 0 ? 'hidden' : ''"
        >
          <div v-if="index > 0">
            <div class="text-2xl text-center font-bold text-fs-yellow pb-8">
              {{ q.header.texts[0].text }}
            </div>
            <div v-for="(qq, key) in q.groups" :key="key">
              <div v-if="showLink">
                <div v-if="index > 0">
                  <NuxtLink
                    :to="`/survey/${key + 1}/${encodeURIComponent(
                      qq.header.texts[0].text.toLowerCase()
                    )}`"
                  >
                    <div
                      class="text-base xl:text-lg font-bold text-black text-center uppercase border-2 border-fs-light-brown rounded-lg hover:bg-fs-yellow hover:text-black py-2 px-4 my-4 mx-3 cursor-pointer bg-white drop-shadow-lg"
                    >
                      {{ qq.header.texts[0].text }}
                    </div></NuxtLink
                  >
                </div>
              </div>
              <div v-else>
                <div
                  class="xl:w-100 text-base xl:text-lg font-bold text-black text-center uppercase border-2 border-gray-600 rounded-full hover:bg-fs-yellow hover:text-black py-2 px-4 my-2 mx-0 bg-white drop-shadow-lg"
                >
                  {{ qq.header.texts[0].text }}
                </div>
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
    showLink: { type: Boolean },
    colWidth: { type: Boolean },
  },

  setup() {
    //Get runtime config.
    const config = useRuntimeConfig();

    const incrementIndex = (key) => {
      return key + 1;
    };

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
        groupedquestions: true,
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
      incrementIndex,
    };
  },
};
</script>
