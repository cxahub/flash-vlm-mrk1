<template>
  <div class="mx-auto">
    <FormBusinessFunction v-if="showStep1" />
    <FormJobRole v-if="showStep2" />
    <FormUserFunction v-if="showStep3" />
    <div class="py-10">
      <div v-if="showStep3">
        <!--Waiting on form logic-->
        <!--
        <UiButton
          role="button"
          text="Continue to Survey"
          class="block float-left pr-4 -my-9"
          type="submit"
          @click="
            showStep3 = false;
            showStep2 = false;
            showStep1 = false;
          "
        />-->
        <UiButton
          text="Previous Step"
          class="block float-left pr-4"
          format="secondary"
          @click="
            showStep3 = false;
            showStep2 = true;
          "
        />
        <UiButton
          text="Continue"
          path="/dashboard"
          class="block"
          type="submit"
        />
      </div>
      <div v-else-if="showStep2">
        <UiButton
          text="Previous Step"
          class="block float-left pr-4"
          format="secondary"
          @click="
            showStep2 = false;
            showStep1 = true;
          "
        />
        <UiButton
          text="Next Step"
          class="block float-left"
          @click="
            showStep3 = !showStep3;
            showStep2 = false;
            showStep1 = false;
          "
        />
      </div>
      <div v-else>
        <UiButton
          text="Previous Step"
          path="/collaborate"
          class="block float-left pr-4"
          format="secondary"
        />
        <UiButton
          text="Next Step"
          class="block float-left"
          @click="
            showStep2 = !showStep2;
            showStep1 = false;
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showStep1: true,
      showStep2: false,
      showStep3: false,
    };
  },
};
</script>
