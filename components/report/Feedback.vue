<template>
  <div class="mx-auto text-center xl:text-left">
    <NuxtLink :to="feedbackURL" activeClass="text-fs-yellow" target="_blank">
      <div :style="bgImage" class="h-60 rounded-3xl text-center shadow-xl">
        <div
          class="h-full text-8xl font-bold text-white bg-fs-brown bg-opacity-50 rounded-3xl"
        >
          <span class="opacity- relative top-[30%]">2</span>
        </div>
      </div>
    </NuxtLink>
    <p class="text-lg py-4">
      <span class="font-bold">Share your experience</span> and how we can do
      better!
    </p>
    <UiButton
      class="py-4"
      text="Provide Feedback"
      :path="feedbackURL"
      format="primary"
      size="lg"
    />
  </div>
</template>

<script setup>
import bgImageFile from "/images/banner/feedback-banner.jpg";

const config = useRuntimeConfig();
const feedbackURL = config.public.VUE_APP_FLASH_FEEDBACK_SURVEY_URL;
const bgImage = {
  "background-position": "center center",
  "background-size": "cover",
  "background-image": `url(${bgImageFile})`,
};
</script>
