<template>
  <div class="mx-auto">
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
            <th class="text-left py-2">Company</th>
            <th class="text-left py-2">Date</th>
            <th class="text-left py-2">Options</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="s in surveys[1]" :key="s.customersurveyid">
            <td class="py-2">
              <a
                :href="`/?sID=${s[0].customersurveyid}`"
                class="font-fs-yellow"
                >{{ s[0].surveyData.org_info.corporate }}</a
              >
            </td>
            <td class="py-2">{{ dateFormat(s[0].createdDate) }}</td>
            <td class="py-2">
              <i class="fa fa-file-text pr-2 xl:pr-4" aria-hidden="true"></i>
              <i
                class="fa fa-pencil-square pr-2 xl:pr-4"
                aria-hidden="true"
              ></i>
              <i class="fa fa-trash pr-2 xl:pr-4" aria-hidden="true"></i>
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  setup() {
    //Get runtime config.
    const config = useRuntimeConfig();

    //Fetch options.
    const options = {
      method: "POST",
      body: {
        Response: {
          userInfo: {
            email: "chad.fraser@sap.com",
          },
        },
      },
    };

    //Fetch data.
    const { pending, data: surveys } = useLazyFetch(
      config.public.VUE_APP_API_URL +
        "/" +
        config.public.VUE_APP_API_VLM_SURVEY_LIST_ROUTE,
      {
        method: options.method,
        body: {
          email: options.body,
        },
      }
    );
    return {
      config,
      surveys,
      pending,
    };
  },
  methods: {
    dateFormat(value) {
      return moment(value).format("DD-MM-yyyy");
    },
  },
};
</script>
