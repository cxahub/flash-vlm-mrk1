<template>
  <div
    class="w-full xl:w-5/6 p-10 bg-fs-brown bg-cover rounded-3xl border-2 border-gray-500 z-5"
  >
    <h1 class="text-2xl xl:text-5xl text-fs-yellow uppercase font-bold">
      Welcome to Your Flash&trade; "Retail" Enterprise Maturity Assessment
    </h1>
    <div class="text-white xl:text-xl py-8">
      This on-demand survey helps you gather personalized insights for
      accelerated positive business outcomes across 16 end-to-end capabilities.
    </div>
    <div class="xl:py-8 text-center">
      <div class="pb-8 xl:pb-0 xl:block xl:float-left xl:pr-8">
        <UiButton
          text="Preview Survey Topics"
          path=""
          format="secondary"
          size="sm"
          @click="showTopics = !showTopics"
        />
      </div>
      <div class="xl:block xl:float-left">
        <UiButton
          text="Review Sample insights Report"
          path="/report/flash-report-example.pdf"
          format="secondary"
          target="_blank"
          size="sm"
        />
      </div>
    </div>
    <div class="text-white text-sm xl:text-base py-8">
      I have read & accepted the
      <NuxtLink
        to=""
        activeClass="text-fs-yellow"
        class="underline cursor-pointer"
        @click="
          showTerms = !showTerms;
          showPrivacy = false;
          showCookiePolicy = false;
        "
        >Terms & Conditions</NuxtLink
      >
      &
      <NuxtLink
        to=""
        activeClass="text-fs-yellow"
        class="underline cursor-pointer"
        @click="
          showPrivacy = !showPrivacy;
          showTerms = false;
          showCookiePolicy = false;
        "
        >Privacy Policy</NuxtLink
      >
    </div>
    <div class="py-8">
      <div class="block float-left pr-8">
        <UiButton text="Start Now" path="/collaborate" size="lg" />
      </div>
    </div>
  </div>
  <div
    @click="showTopics = !showTopics"
    class="absolute top-60 right-[28rem] p-10 bg-white w-fit rounded-3xl border-2 border-gray-500"
    :class="showTopics ? 'show-panel-left' : `hide-panel-left`"
  >
    <MainPreviewTopics />
  </div>
  <div
    @click="showTerms = !showTerms"
    class="absolute -bottom-60 left-[0] right-[0] w-full cursor-default"
    :class="showTerms ? 'show-panel-bottom' : `hide-panel-bottom`"
  >
    <LegalTerms />
  </div>
  <div
    @click="showPrivacy = !showPrivacy"
    class="absolute -bottom-60 left-[0] right-[0] w-full cursor-default"
    :class="showPrivacy ? 'show-panel-bottom' : `hide-panel-bottom`"
  >
    <LegalPrivacy />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTopics: false,
      showTerms: false,
      showPrivacy: false,
    };
  },
};
</script>

<style scoped>
.show-panel-left {
  transition-timing-function: ease-in;
  opacity: 1;
  transition: 1s;
  transform: translateX(0%);
  z-index: 0;
  visibility: visible;
}

.hide-panel-left {
  transition-timing-function: ease-out;
  transition: 1s;
  transform: translateX(-90%);
  opacity: 0;
  z-index: 0;
  visibility: hidden;
}

.show-panel-bottom {
  transition-timing-function: ease-in;
  opacity: 1;
  transition: 1s;
  transform: translateY(-180%);
  z-index: 5;
  visibility: visible;
}

.hide-panel-bottom {
  transition-timing-function: ease-out;
  transition: 1s;
  opacity: 0;
  transform: translateY(-100%);
  z-index: 5;
  visibility: hidden;
}

@media (min-width: 992px) {
  .show-panel-bottom {
    transform: translateY(-180%);
  }

  .hide-panel-bottom {
    transform: translateY(-100%);
  }

  .show-panel {
    transform: translateY(-210%);
  }

  .hide-panel {
    transform: translateY(-100%);
  }
}
</style>
