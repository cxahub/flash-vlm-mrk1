<template>
  <div
    class="w-5/6 p-10 bg-fs-brown bg-cover rounded-3xl border-2 border-gray-500 z-5"
  >
    <h1 class="text-5xl text-fs-yellow uppercase font-bold">Forgot Password</h1>
    <div class="p-10">
      <FormForgotPassword />
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    definePageMeta({
      layout: "home",
    }),
      useHead({
        title: "Forgot Password - FLASH",
        meta: [
          {
            name: "description",
            content: "FLASH - Forgot Password",
          },
        ],
      });
  },
};
</script>
