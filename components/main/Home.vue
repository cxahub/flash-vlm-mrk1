<template>
  <div
    class="w-full xl:w-5/6 p-8 bg-fs-brown bg-cover rounded-3xl border-2 border-gray-500 z-5 drop-shadow-lg"
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
      <div class="pb-8 xl:pb-0 xl:block xl:float-left xl:pr-8">
        <UiButton
          text="Review Sample insights Report"
          path="/report/flash-report-example.pdf"
          format="secondary"
          target="_blank"
          size="sm"
        />
      </div>
    </div>
    <div class="text-white text-sm xl:text-base py-8 text-center xl:text-left">
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
      <div class="block xl:float-left text-center">
        <UiButton text="Start Now" path="/collaborate" size="lg" />
      </div>
    </div>
  </div>
  <div
    @click="showTopics = !showTopics"
    class="absolute right-4 left-4 -top-24 xl:top-60 xl:left-[60%] xl:w-[20%] h-[50%] overflow-x-hidden rounded-3xl border-2 p-8 bg-white border-gray-500"
    :class="showTopics ? 'show-panel-topic' : `hide-panel-topic`"
  >
    <MainPreviewTopics />
  </div>
  <div
    @click="showTerms = !showTerms"
    class="absolute right-4 left-4 -top-24 xl:top-60 xl:left-[60%] xl:w-[20%] h-[50%] overflow-x-hidden rounded-3xl border-2 p-8 bg-white border-gray-500"
    :class="showTerms ? 'show-panel-bottom' : `hide-panel-bottom`"
  >
    <LegalTerms />
  </div>
  <div
    @click="showPrivacy = !showPrivacy"
    class="absolute right-4 left-4 -top-24 xl:top-60 xl:left-[60%] xl:w-[20%] h-[50%] overflow-x-hidden rounded-3xl border-2 p-8 bg-white border-gray-500"
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
.show-panel-topic {
  transition-timing-function: ease-in;
  opacity: 1;
  transition: 1s;
  transform: translateY(55%);
  z-index: 0;
  visibility: visible;
}

.hide-panel-topic {
  transition-timing-function: ease-out;
  transition: 1s;
  transform: translateY(200%);
  opacity: 0;
  z-index: 0;
  visibility: hidden;
}

.show-panel-bottom {
  transition-timing-function: ease-in;
  opacity: 1;
  transition: 1s;
  transform: translateY(45%);
  z-index: 5;
  visibility: visible;
}

.hide-panel-bottom {
  transition-timing-function: ease-out;
  transition: 1s;
  opacity: 0;
  transform: translateY(100%);
  z-index: 5;
  visibility: hidden;
}

@media (min-width: 992px) {
  .show-panel-topic {
    transition: 1s;
    transform: translateX(10%);
    visibility: visible;
  }

  .hide-panel-topic {
    transition: 1s;
    transform: translateX(-150%);
    visibility: hidden;
  }

  .show-panel-bottom {
    transition: 1s;
    transform: translateY(0%);
    visibility: visible;
  }

  .hide-panel-bottom {
    transition: 1s;
    opacity: 0;
    transform: translateY(100%);
    visibility: hidden;
  }
}
</style>
