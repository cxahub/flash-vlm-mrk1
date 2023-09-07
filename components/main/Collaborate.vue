<template>
  <div
    class="w-full xl:w-5/6 p-8 bg-fs-brown bg-cover rounded-3xl border-2 border-gray-500 z-5 drop-shadow-lg"
  >
    <h1 class="text-2xl xl:text-5xl text-fs-yellow uppercase font-bold">
      Get the Most Value for Your Company
    </h1>
    <div class="text-white xl:text-xl py-8">
      You'll receive the best insights from this survey if you have Profit &
      Loss (P & L) responsibility or you collaborate with someone who does. You
      can allocate questions to collaborators as you progress.
    </div>
    <div class="xl:py-8 text-center">
      <div class="pb-8 xl:pb-0 xl:block xl:float-left xl:pr-8">
        <UiButton
          text="See List of Ideal Collaborators"
          path=""
          format="secondary"
          size="sm"
          @click="
            showCollaborators = !showCollaborators;
            $scrollTop();
          "
        />
      </div>
    </div>
    <div
      class="text-white xl:text-2xl text-center xl:text-left font-bold py-8 underline"
    >
      Do you have P & L visibility or people to collaborate with?
    </div>
    <div class="py-8">
      <div class="xl:block xl:float-left xl:pr-8 text-center">
        <UiButton
          text="Yes, Let's Begin"
          path="/profile/new-account"
          size="lg"
        />
      </div>
      <div class="xl:block xl:float-left xl:pr-8 text-center mt-10 xl:mt-0">
        <UiButton text="Back" path="/" size="sm" format="secondary" />
      </div>
    </div>
  </div>
  <div
    @click="showCollaborators = !showCollaborators"
    class="absolute mr-4 -top-24 xl:top-60 xl:left-[60%] xl:w-[20%] h-[50%] overflow-x-hidden rounded-3xl border-2 p-8 bg-white border-gray-500"
    :class="showCollaborators ? 'show-panel' : `hide-panel`"
  >
    <MainPreviewCollaborators />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCollaborators: false,
    };
  },
};
</script>

<style scoped>
.show-panel {
  transition-timing-function: ease-in;
  opacity: 1;
  transition: 1s;
  transform: translateY(45%);
  z-index: 0;
  visibility: visible;
}

.hide-panel {
  transition-timing-function: ease-out;
  transition: 1s;
  transform: translateY(200%);
  opacity: 0;
  z-index: 0;
  visibility: hidden;
}

@media (min-width: 1280px) {
  .show-panel {
    transition: 1s;
    transform: translateX(10%);
    visibility: visible;
  }

  .hide-panel {
    transition: 1s;
    transform: translateX(-150%);
    visibility: hidden;
  }
}
</style>
