<template>
  <div class="mx-auto">
    <NuxtLink
      :to="firestartersURL"
      activeClass="text-fs-yellow"
      target="_blank"
    >
      <div :style="bgImage" class="h-60 rounded-3xl text-center shadow-xl">
        <div
          class="h-full text-8xl font-bold text-white bg-fs-brown bg-opacity-50 rounded-3xl"
        >
          <span class="opacity- relative top-[30%]">3</span>
        </div>
      </div></NuxtLink
    >
    <p class="text-lg py-4">
      <span class="font-bold">Explore the Firestarters&trade; Community</span>
      with insights, events, and tools like this FLASH&trade; Enterprise
      Assessment. Unlock value and drive your business forward.
    </p>
    <UiButton
      class="py-4"
      text="Learn More"
      :path="firestartersURL"
      format="primary"
      size="lg"
    />
  </div>
</template>

<script>
import bgImage from "/images/banner/firestarters-banner.jpg";
export default {
  setup() {
    const config = useRuntimeConfig();
    const firestartersURL = config.public.VUE_APP_FIRESTARTERS_WEBSITE_URL;

    return {
      firestartersURL,
    };
  },
  data() {
    return {
      bgImage: {
        "background-position": "center center",
        "background-size": "cover",
        "background-image": `url(${bgImage})`,
      },
    };
  },
};
</script>
