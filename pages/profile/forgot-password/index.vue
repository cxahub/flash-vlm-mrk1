<template>
  <div
    class="xl:w-5/6 py-8 px-4 xl:p-10 bg-fs-brown bg-cover rounded-3xl border-2 border-gray-500 z-5"
  >
    <div class="p-4">
      <h1 class="text-3xl xl:text-5xl text-fs-yellow uppercase font-bold">
        Forgot Password
      </h1>
    </div>
    <div class="p-4">
      <FormForgotPassword />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "home",
});
useHead({
  title: "Forgot Password - FLASH",
  meta: [
    {
      name: "description",
      content: "FLASH - Forgot Password",
    },
  ],
});
</script>
