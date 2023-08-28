<template>
  <div
    class="w-5/6 p-10 bg-fs-brown bg-cover rounded-3xl border-2 border-gray-500 z-5"
  >
    <h1 class="text-5xl text-fs-yellow uppercase font-bold">Sign In</h1>
    <div class="p-10">
      <FormSignIn />
    </div>
  </div>
</template>

<script>
definePageMeta({
  layout: "home",
});

export default {
  setup() {
    useHead({
      title: "Profile - FLASH",
      meta: [
        {
          name: "description",
          content: "FLASH - User Profile",
        },
      ],
    });
  },
};
</script>
