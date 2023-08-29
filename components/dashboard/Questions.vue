<template>
  <div class="mx-auto">
    <div class="py-8 text-center">
      <div class="w-full">
        <div v-for="(q, index) in questions" :key="q.id">
          <div class="inline-block w-1/3 float-left">
            <NuxtLink
              :to="`/survey/${
                index + 1
              }/${q.header.texts[0].text.toLowerCase()}`"
            >
              <div
                class="w-100 text-lg font-bold text-black text-center uppercase border-2 border-gray-600 rounded-full hover:bg-fs-yellow hover:text-black py-2 px-4 my-2 mx-3 cursor-pointer"
              >
                {{ q.header.texts[0].text }}
              </div></NuxtLink
            >
          </div>
        </div>
      </div>
      <div class="clear-both"></div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    //Get runtime config.
    const config = useRuntimeConfig();

    //Fetch data.
    const { pending, data: questions } = useLazyFetch(
      config.public.VUE_APP_API_URL +
        "/" +
        config.public.VUE_APP_API_VLM_ENROLL_ROUTE,
      {
        query: {
          questions: true,
        },
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
