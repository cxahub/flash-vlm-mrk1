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
      <div class="w-full">
        <div v-for="bf in businessfunction" :key="bf.id">
          <div
            class="xl:block xl:float-left text-sm xl:text-lg font-bold text-white text-center uppercase border-2 border-gray-600 rounded-full hover:bg-fs-yellow hover:text-black py-2 px-4 my-2 mx-1 cursor-pointer"
            :class="
              bfSelected.includes(bf.bf_name.toUpperCase())
                ? '{ !text-black bg-fs-yellow }'
                : ''
            "
            @click="updateList(bf.bf_name)"
          >
            {{ bf.bf_name }}
          </div>
        </div>
      </div>
      <div class="clear-both"></div>
      <div class="w-full text-white">
        <input
          name="user-business-function"
          type="text"
          class="border-2 border-gray-600 rounded-full py-2 px-4 my-2 mx-1 text-black uppercase"
          @focusout="updateList(otherField)"
          v-model="otherField"
          required="true"
          placeholder="Other?"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    //Get runtime config.
    const config = useRuntimeConfig();

    //Fetch data.
    const { pending, data: businessfunction } = useLazyFetch(
      config.public.VUE_APP_API_URL +
        "/" +
        config.public.VUE_APP_API_BUSINESS_FUNCTION_ROUTE,
      {
        query: {
          status_id: 1,
          order_by: "sort_id, bf_name",
        },
      }
    );
    return {
      config,
      businessfunction,
      pending,
    };
  },
  data() {
    return {
      step: 1,
      question: "What is the business function of your role?",
      instructions:
        'Choose multiple or enter an "Other" if option is not listed.',
      bfSelected: [],
      otherField: "",
    };
  },
  methods: {
    updateList(value) {
      value = value.toUpperCase();
      if (this.bfSelected.includes(value)) {
        this.bfSelected.splice(this.bfSelected.indexOf(value), 1);
      } else {
        this.bfSelected.push(value);
      }
      console.log(this.bfSelected);
    },
  },
};
</script>
