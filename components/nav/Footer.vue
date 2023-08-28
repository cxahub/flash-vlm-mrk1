<template>
  <footer class="fixed w-full bottom-0 bg-fs-brown">
    <div class="container mx-auto z-10">
      <div class="py-4 grid grid-rows-2 gap-0 h-40">
        <div class="grid grid-cols-1">
          <div class="text-center">
            <NuxtLink
              to=""
              @click="
                showTerms = !showTerms;
                showCookiePolicy = false;
              "
              target="_blank"
              class="block float-left px-10 py-2 text-xs xl:text-base text-fs-yellow hover:text-white cursor-pointer"
              activeClass="underline decoration-solid"
              >Terms of Use</NuxtLink
            >
            <NuxtLink
              to=""
              @click="
                showCookiePolicy = !showCookiePolicy;
                showTerms = false;
              "
              target="_blank"
              class="block xl:float-left py-2 text-xs xl:text-base text-fs-yellow hover:text-white cursor-pointer"
              activeClass="underline decoration-solid"
              >Cookie Policy</NuxtLink
            >
            <div
              class="block xl:float-left px-10 py-2 text-xs xl:text-base text-white"
            >
              Survey Provided by SAP®
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 xl:grid-cols-2 text-center xl:text-left">
          <div>
            <NuxtLink :to="firestartersURL" class="block hover:text-fs-yellow">
              <img
                role="image"
                class="xl:block xl:float-left w-4 xl:w-10 mt-1 xl:mr-3 mx-auto"
                src="/images/icon/firestarters-icon.png"
                aria-label="firestarters icon"
                alt="Firestarters Icon"
              />
              <span
                class="xl:block xl:float-left font-roboto text-xs lg:text-xl text-white uppercase font-bold"
              >
                Firestarters
                <span
                  class="font-roboto-condensed block text-xs lg:text-sm text-fs-light-brown capitalize"
                  >Your Global Business Community</span
                >
              </span>
            </NuxtLink>
          </div>
          <div
            class="block text-xs xl:text-sm text-white text-center xl:text-right pt-6"
          >
            Copyright © {{ dateNowFormat(year) }} Firestarters. All rights
            reserved.
          </div>
        </div>
      </div>
    </div>
    <div
      @click="showTerms = !showTerms"
      class="absolute w-full cursor-default"
      :class="showTerms ? 'show-panel' : `hide-panel`"
    >
      <LegalTerms />
    </div>
    <div
      @click="showCookiePolicy = !showCookiePolicy"
      class="absolute w-full cursor-default"
      :class="showCookiePolicy ? 'show-panel' : `hide-panel`"
    >
      <LegalCookiePolicy />
    </div>
  </footer>
</template>

<script>
import moment from "moment";
export default {
  setup() {
    //Get runtime config.
    const config = useRuntimeConfig();

    const feedbackURL = config.public.VUE_APP_FIRESTARTERS_FEEDBACK_SURVEY_URL;
    const firestartersURL = config.public.VUE_APP_FIRESTARTERS_WEBSITE_URL;

    return {
      feedbackURL,
      firestartersURL,
    };
  },
  data() {
    return {
      showTerms: false,
      showCookiePolicy: false,
      year: new Date(),
    };
  },
  methods: {
    dateNowFormat(value) {
      return moment(value).format("yyyy");
    },
  },
};
</script>

<style scoped>
.show-panel {
  transition-timing-function: ease-in;
  opacity: 1;
  transition: 1s;
  transform: translateY(-210%);
  z-index: 5;
  visibility: visible;
}

.hide-panel {
  transition-timing-function: ease-out;
  transition: 1s;
  opacity: 0;
  transform: translateY(-200%);
  z-index: 5;
  visibility: hidden;
}

@media (min-width: 992px) {
  .show-panel {
    transform: translateY(-210%);
  }

  .hide-panel {
    transform: translateY(-100%);
  }
}
</style>
