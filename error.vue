<template>
  <NuxtLayout :name="layout">
    <div>
      <template v-if="error.statusCode === 404">
        <h1 class="text-8xl text-fs-brown font-bold pb-8">404!</h1>
        <p class="text-lg">Sorry, that page doesn't exist.</p>
      </template>
      <template v-else>
        <h1 class="text-8xl text-fs-brown font-bold pb-8">Sorry about that!</h1>
        <p>
          It looks like something broke. Our team tracks these errors, we'll
          look into it right away. Thank you.
        </p>
        <div class="py-10 font-bold">{{ error.message }}</div>
      </template>
      <p class="py-10">
        <UiButton
          text="Go back"
          path="/"
          class="block float-left pr-4"
          type="submit"
        />
      </p>
    </div>
  </NuxtLayout>
</template>

<script setup>
const error = useError();

const layout = "default";

useHead({
  title: "Error - FLASH - Enterprise Maturity Assessment",
  meta: [
    {
      name: "description",
      content: "Error - FLASH - Enterprise Maturity Assessment",
    },
  ],
});
</script>
