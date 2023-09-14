<template>
  <div v-if="pending">
    <UiLoader />
  </div>
  <div v-else>
    <div class="mx-auto">
      <h1 class="text-3xl xl:text-5xl text-fs-yellow uppercase font-bold">
        Setup Your Account: {{ step }} of 3
      </h1>
      <div class="text-lg xl:text-3xl text-white font-bold py-4">
        {{ question }}<br />
        <div class="text-xs xl:text-base font-normal text-gray-400 leading-5">
          {{ instructions }}
        </div>
      </div>

      <div class="block w-full">
        <div v-for="jr in jobrole" :key="jr.id">
          <div
            class="xl:block xl:float-left text-sm xl:text-lg font-bold text-white text-center uppercase border-2 border-gray-600 rounded-full hover:bg-fs-yellow hover:text-black py-2 px-4 my-2 mx-1 cursor-pointer"
            :class="
              jrSelected.includes(jr.jr_name.toUpperCase())
                ? '{ !text-black bg-fs-yellow }'
                : ''
            "
            @click="updateList(jr.jr_name)"
          >
            {{ jr.jr_name }}
          </div>
        </div>
      </div>
      <div class="clear-both"></div>
      <div class="w-full text-white">
        <input
          name="user-job-role"
          type="text"
          class="border-2 border-gray-600 rounded-full py-2 px-4 my-2 mx-1 text-black"
          @focusout="updateList(otherField)"
          v-model="otherField"
          required="true"
          placeholder="Other?"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import nuxtStorage from "nuxt-storage";

//Get runtime config.
const config = useRuntimeConfig();
const emit = defineEmits(["disable"]);

//Fetch data.
const { pending, data: jobrole } = useLazyFetch(
  config.public.VUE_APP_API_URL +
    "/" +
    config.public.VUE_APP_API_JOB_ROLE_ROUTE,
  {
    query: {
      status_id: 1,
      order_by: "sort_id, jr_name",
    },
  }
);

const step = ref(2);
const question = ref("What is your job role?");
const instructions = ref(
  'Choose multiple or enter an "Other" if option is not listed.'
);
const jrSelected = ref([]);
const otherField = ref("");

function updateList(value) {
  value = value.toUpperCase();
  if (this.jrSelected.includes(value)) {
    this.jrSelected.splice(this.jrSelected.indexOf(value), 1);
  } else {
    this.jrSelected.push(value);
    emit("disable", true);
  }
  nuxtStorage.localStorage.setData("jobrole", this.jrSelected, 5);
  if (this.jrSelected === undefined || this.jrSelected.length == 0) {
    emit("disable", true);
  } else {
    emit("disable", false);
  }
}
</script>
