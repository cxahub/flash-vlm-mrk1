<template>
  <div class="mx-auto">
    <NuxtLink to="/contact" activeClass="text-fs-yellow" target="_blank">
      <div :style="bgImage" class="h-60 rounded-3xl text-center shadow-xl">
        <div
          class="h-full text-8xl font-bold text-white bg-fs-brown bg-opacity-50 rounded-3xl"
        >
          <span class="opacity- relative top-[30%]">1</span>
        </div>
      </div>
    </NuxtLink>
    <p class="text-lg py-4">
      <span class="font-bold">Connect with an expert</span> to review the
      results with you, and dive deeper into best practices.
    </p>
    <UiButton
      class="py-4"
      text="Request Meeting"
      path="/contact"
      format="primary"
      size="lg"
    />
  </div>
</template>

<script>
import bgImage from "/images/banner/request-banner.jpg";

export default {
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
