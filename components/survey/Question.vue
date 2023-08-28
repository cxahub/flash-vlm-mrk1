<template>
  <div class="mx-auto">
    <div class="grid grid-cols-3 gap-8 px-8 py-6 mb-8 border-2 rounded-3xl">
      <div class="">
        <h1 class="text-4xl font-bold uppercase pb-10">
          {{ questionGroup }}
        </h1>
        <h2 class="text-3xl font-bold">{{ question }}</h2>
      </div>
      <div class="col-span-2">
        <div class="text-fs-yellow text-xl font-bold px-4 pb-8">
          Select one or more that apply to your enterprise:
        </div>
        <div class="flex p-4" v-for="opt in options" :key="opt.id">
          <div class="w-6 h-4 border-2 rounded border-black mt-2">&nbsp;</div>
          <div class="text-xl font-bold ml-4">{{ opt.option }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questionGroup: "Customer Centricity",
      question: "My Question is to be placed here for an answer?",
      options: [
        {
          id: 1,
          option:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
          id: 2,
          option:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
          id: 3,
          option:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
          id: 4,
          option:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
          id: 5,
          option:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
      ],
    };
  },
};
</script>
