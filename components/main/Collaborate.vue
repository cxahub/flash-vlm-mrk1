<template>
  <div class="container mx-auto">
    <div
      class="w-5/6 p-10 bg-fs-brown bg-cover rounded-3xl border-2 border-gray-500 z-5"
    >
      <h1 class="text-5xl text-fs-yellow uppercase font-bold">
        Get the Most Value for Your Company
      </h1>
      <div class="text-white text-xl py-8">
        You'll receive the best insights from this survey if you have Profit &
        Loss (P & L) responsibility or you collaborate with someone who does.
        You can allocate questions to collaborators as you progress.
      </div>
      <div class="py-8">
        <div class="block float-left pr-8">
          <UiButton
            text="See List of Ideal Collaborators"
            path=""
            format="secondary"
            size="sm"
            @click="showCollaborators = !showCollaborators"
          />
        </div>
      </div>
      <div class="text-white text-2xl font-bold py-8 underline">
        Do you have P & L visibility or people to collaborate with?
      </div>
      <div class="py-8">
        <div class="block float-left pr-8">
          <UiButton
            text="Yes, Let's Begin"
            path="/profile/new-account"
            size="lg"
          />
        </div>
        <div class="block float-left pr-8">
          <UiButton text="Back" path="/" size="sm" />
        </div>
      </div>
    </div>
    <div
      @click="showCollaborators = !showCollaborators"
      class="absolute top-60 right-[28rem] p-14 bg-white w-fit rounded-3xl border-2 border-gray-500"
      :class="showCollaborators ? 'show-panel' : `hide-panel`"
    >
      <MainPreviewCollaborators />
    </div>
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
  transform: translateX(0);
  z-index: 0;
}

.hide-panel {
  transition-timing-function: ease-out;
  transition: 1s;
  transform: translateX(-60%);
  opacity: 0;
  z-index: 0;
}
</style>
