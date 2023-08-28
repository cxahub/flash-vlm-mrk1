<template>
  <div class="mx-auto">
    <h1 class="text-5xl text-fs-yellow uppercase font-bold pb-8">
      Setup Your Account: {{ step }} of 3
    </h1>
    <div class="text-3xl text-white font-bold">
      {{ question }}<br />
      <span class="text-base font-normal text-gray-400">
        {{ instructions }}
      </span>
    </div>
    <div class="block w-full">
      <div v-for="opt in options" :key="opt.id">
        <div
          class="block float-left text-lg font-bold text-white text-center uppercase border-2 border-gray-600 rounded-full hover:bg-fs-yellow hover:text-black py-4 px-4 my-5 mx-1 cursor-pointer"
        >
          {{ opt.option }}
        </div>
      </div>
    </div>
    <div class="clear-both"></div>
    <div class="block float-left w-full text-white">
      <input
        name="user-business-function"
        type="text"
        class="border-2 border-gray-600 rounded-full py-4 px-4 my-5 mx-1 text-black"
        required="true"
        placeholder="Other?"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      question: "What is the business function of your role?",
      instructions:
        'Choose multiple or enter an "Other" if option is not listed.',
      options: [
        {
          id: 1,
          option: "Commerce",
        },
        {
          id: 2,
          option: "Customer Experience",
        },
        {
          id: 3,
          option: "Data & Analytics",
        },
        {
          id: 4,
          option: "Digital",
        },
        {
          id: 5,
          option: "Information Technology",
        },
      ],
    };
  },
};
</script>
