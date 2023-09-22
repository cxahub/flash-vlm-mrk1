<template>
  <div class="mx-auto text-center xl:text-left">
    <div v-if="pending">
      <UiLoader icon="flash-icon-bg-white.png" />
    </div>
    <div v-else class="pb-16">
      <h1 class="text-xl xl:text-3xl uppercase font-bold py-8">
        My Surveys ({{ surveys[0].tabs[0].TotalCount }})
      </h1>
      <table class="table-auto w-full">
        <thead>
          <tr class="border-b-2">
            <th class="text-center xl:text-left py-2">Company</th>
            <th class="text-center xl:text-left py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="s in surveys[1]" :key="s.customersurveyid">
            <td class="py-2 font-bold">
              {{ s[0].surveyData.org_info.corporate }}
            </td>
            <td class="py-2">{{ $dateFormat(s[0].createdDate) }}</td>
          </tr>
        </tbody>
      </table>
      <hr />
    </div>
  </div>
</template>

<script setup>
import nuxtStorage from "nuxt-storage";

//Get runtime config.
const config = useRuntimeConfig();

//Fetch options.
const options = {
  method: "POST",
  body: {
    Response: {
      userInfo: {
        email: useCookie("email").value,
      },
    },
  },
  query: {
    "x-auth-token": nuxtStorage.localStorage.getData("token"),
  },
};

//Fetch data.
const { pending, data: surveys } = await useLazyFetch(
  config.public.VUE_APP_API_URL +
    "/" +
    config.public.VUE_APP_API_VLM_SURVEY_LIST_ROUTE,
  {
    method: options.method,
    body: options.body,
    query: options.query,
  }
);
</script>
