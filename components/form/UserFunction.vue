<template>
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
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
      <form
        accept-charset="UTF-8"
        v-on:submit.prevent="onSubmit()"
        method="GET"
      >
        <div>
          <label class="block text-white font-bold py-2">Full Name</label>
          <input
            type="text"
            v-model="userFName"
            class="rounded mr-4 mb-2 w-full xl:w-1/2"
            required="required"
            placeholder="First Name"
          />
          <input
            type="text"
            v-model="userLName"
            class="rounded w-full xl:w-1/2"
            required="required"
            placeholder="Last Name"
          />
        </div>
        <div>
          <label class="block text-white font-bold py-2">Company Name</label>
          <input
            type="text"
            v-model="company"
            class="rounded w-full xl:w-2/3"
            required="required"
            placeholder="Company Name"
          />
        </div>
        <div>
          <label class="block text-white font-bold py-2">Email</label>
          <input
            type="email"
            v-model="email"
            class="rounded w-full xl:w-2/3"
            required="required"
            placeholder="Email"
          />
        </div>
        <div>
          <label class="block text-white font-bold py-2">Password</label>
          <input
            type="password"
            v-model="password"
            class="rounded w-full xl:w-2/3"
            required="required"
            placeholder="Password"
          />
        </div>
        <div>
          <label class="block text-white font-bold py-2"
            >Confirm Password</label
          >
          <input
            type="password"
            v-model="confirmPassword"
            class="rounded w-full xl:w-2/3"
            required="required"
            placeholder="Confirm Password"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 3,
      question: "Enter your account information",
      instructions:
        "For a more personalized experience plase enter all relevant information below.",
    };
  },
};
</script>
