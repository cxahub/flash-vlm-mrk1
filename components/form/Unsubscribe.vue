<template>
  <div v-if="results.success" class="text-fs-yellow font-bold py-4">
    {{ unsubscribeMessage }}
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
          class="rounded w-full xl:w-1/2"
          placeholder="Email"
          required="true"
        />
      </div>
      <UiButton role="button" text="Submit" type="submit" />
    </form>
    <div class="block float-left text-sm text-white py-8">
      WARNING: Unsubscribing will delete all surveys you have taken.
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
let unsubscribeMessage = ref("You have successfully unsubscribed.");

const onSubmit = () => {
  formRequest()
    .then((result) => {
      results.value = result;
    })
    .catch((error) => {
      console.error("Unsubscribe form could not be sent", error);
    });
};

async function formRequest() {
  console.log(config.public.VUE_APP_API_VLM_UNSUBSCRIBE_ROUTE);
  return await $fetch(
    config.public.VUE_APP_API_URL +
      "/" +
      config.public.VUE_APP_API_VLM_UNSUBSCRIBE_ROUTE +
      "/" +
      email.value,
    {
      method: "GET",
    }
  );
}
</script>
