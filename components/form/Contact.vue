<template>
  <div class="mx-auto">
    <span class="text-base font-normal text-gray-400">
      {{ instructions }}
    </span>
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
          <label class="block text-white font-bold py-2">Message</label>
          <textarea
            v-model="message"
            class="block rounded w-2/3"
            required="required"
            placeholder="Enter your comments here..."
          >
          </textarea>
        </div>
        <div>
          <UiButton
            role="button"
            text="Send"
            class="block float-left pr-4"
            type="submit"
            @click="
              showStep3 = false;
              showStep2 = false;
              showStep1 = false;
            "
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
      instructions: "Please allow for up to 2 business days for a response.",
    };
  },
};
</script>
