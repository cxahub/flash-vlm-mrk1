<template>
  <div v-if="route.query.registration" class="text-fs-yellow font-bold py-4">
    {{ registrationMessage }}
  </div>
  <div v-if="route.query.timeout" class="text-fs-yellow font-bold py-4">
    {{ timeoutMessage }}
  </div>
  <div v-if="!results.success" class="text-fs-yellow font-bold">
    {{ results.err }}
  </div>
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
        />
      </div>
      <div>
        <label class="block text-white font-bold py-2"
          ><span class="text-fs-red">*</span> Password</label
        >
        <input
          type="password"
          v-model="password"
          class="w-full rounded xl:w-1/2"
          required="required"
          placeholder="Password"
        />
      </div>
      <UiButton role="button" text="Sign In" type="submit" />
    </form>
    <div class="text-white block float-left pr-4">
      <NuxtLink to="/" class="underline cursor-pointer">Register Now</NuxtLink>
    </div>
    <div class="text-white">
      <NuxtLink to="/profile/forgot-password" class="underline cursor-pointer"
        >Forgot Password?</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
import nuxtStorage from "nuxt-storage";

const route = useRoute();

//Get runtime config.
const config = useRuntimeConfig();

//Cookie
const rememberUser = useCookie("rememberUser", { maxAge: 36000 });
rememberUser.value = rememberUser.value || "";

//Form vars.
let email = ref(rememberUser.value);
let password = ref("");

let results = ref("");
let registrationMessage = ref(
  "You have successfully registered. Please Sign In once you have activated your account."
);
let timeoutMessage = ref("Your session has timed out. Please Sign In again.");

const onSubmit = () => {
  formRequest()
    .then((result) => {
      results.value = result;
      console.log(results.value.success);
      if (results.value.success) {
        setCookies(results.value.results[0]);
        nuxtStorage.localStorage.setData(
          "authenticated",
          true,
          config.public.VUE_APP_COOKIE_EXPIRES
        );
        navigateTo("/dashboard");
      }
    })
    .catch((error) => {
      console.error("Sign In form could not be sent", error);
    });
};

async function formRequest() {
  return await $fetch(
    config.public.VUE_APP_API_URL +
      "/" +
      config.public.VUE_APP_API_VLM_LOGIN_ROUTE,
    {
      method: "POST",
      body: {
        uName: email.value,
        pass: password.value,
      },
    }
  );
}

function setCookies(user) {
  //Update rememberUser cookie
  rememberUser.value = user.email;

  //Create user cookies for use throughout the site.
  const userID = useCookie("userID", { maxAge: 36000 });
  const firstName = useCookie("firstName", { maxAge: 36000 });
  const lastName = useCookie("lastName", { maxAge: 36000 });
  userID.value = user.userId;
  firstName.value = user.firstName;
  lastName.value = user.lastName;
}
</script>
