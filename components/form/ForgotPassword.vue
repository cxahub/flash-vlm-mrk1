<template>
  <div>
    <form accept-charset="UTF-8" v-on:submit.prevent="onSubmit()" method="POST">
      <div>
        <label class="block text-white font-bold py-2"
          ><span class="text-fs-red">*</span> Email</label
        >
        <input
          type="email"
          v-model="email"
          class="w-full rounded xl:w-1/2"
          placeholder="Email"
          required="true"
        />
      </div>
      <UiButton role="button" text="Submit" type="submit" />
    </form>
    <div class="text-white block float-left pr-4">
      <NuxtLink to="/profile" class="underline cursor-pointer"
        >Register Now</NuxtLink
      >
    </div>
    <div class="text-white">
      <NuxtLink to="/profile" class="underline cursor-pointer"
        >Sign In?</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
//Get runtime config.
const config = useRuntimeConfig();

//Cookie
const rememberUser = useCookie("rememberUser");
rememberUser.value = rememberUser.value || "";

let email = ref(rememberUser.value);

let results = ref("");

const onSubmit = () => {
  formRequest()
    .then((result) => {
      results.value = result;
      if (results.value.success) {
        navigateTo("/profile");
      }
    })
    .catch((error) => {
      console.error("Forgot Password form could not be sent", error);
    });
};

async function formRequest() {
  return await $fetch(
    config.public.VUE_APP_API_URL +
      "/" +
      config.public.VUE_APP_API_VLM_FORGOT_PASSWORD_ROUTE,
    {
      method: "POST",
      body: {
        email: email.value,
      },
    }
  );
}
</script>
