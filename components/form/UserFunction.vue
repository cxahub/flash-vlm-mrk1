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
            class="block float-left rounded w-auto mr-4"
            required="required"
            placeholder="First Name"
          />
          <input
            type="text"
            v-model="userLName"
            class="block rounded w-1/3"
            required="required"
            placeholder="Last Name"
          />
        </div>
        <div>
          <label class="block text-white font-bold py-2">Company Name</label>
          <input
            type="text"
            v-model="company"
            class="block rounded w-2/3"
            required="required"
            placeholder="Company Name"
          />
        </div>
        <div>
          <label class="block text-white font-bold py-2">Email</label>
          <input
            type="email"
            v-model="email"
            class="block rounded w-2/3"
            required="required"
            placeholder="Email"
          />
        </div>
        <div>
          <label class="block text-white font-bold py-2">Password</label>
          <input
            type="password"
            v-model="password"
            class="block rounded w-2/3"
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
            class="block rounded w-2/3"
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
      options: [
        {
          id: 1,
          option: "C-Suite",
        },
        {
          id: 2,
          option: "SVP/VP",
        },
        {
          id: 3,
          option: "Sr Dir/Director",
        },
        {
          id: 4,
          option: "Sr Mgr/Manager",
        },
        {
          id: 5,
          option: "Individual Contributor",
        },
      ],
    };
  },
};
</script>
