<template>
  <FormBusinessFunction v-if="showStep1" @disable="handleDisableBF" />
  <FormJobRole v-if="showStep2" @disable="handleDisableJR" />
  <FormUserFunction v-if="showStep3" />
  <div class="py-10">
    <div v-if="showStep3">
      <UiButton
        role="button"
        text="Previous Step"
        class="block float-left pr-4"
        format="secondary"
        @click="
          showStep3 = false;
          showStep2 = true;
        "
      />
      <UiButton
        role="button"
        text="Continue"
        path="/dashboard"
        class="block"
        type="submit"
      />
    </div>
    <div v-else-if="showStep2">
      <UiButton
        role="button"
        text="Previous Step"
        class="block float-left pr-4"
        format="secondary"
        @click="
          showStep2 = false;
          showStep1 = true;
        "
      />
      {{ showNext }}
      <UiButton
        role="button"
        text="Next Step"
        class="block float-left"
        :class="showNextJR ? 'opacity-50' : ''"
        :disabled="showNextJR"
        @click="
          showStep3 = !showStep3;
          showStep2 = false;
          showStep1 = false;
        "
      />
    </div>
    <div v-else>
      <UiButton
        role="button"
        text="Previous Step"
        class="block float-left pr-4"
        format="secondary"
        @click="$router.push('/collaborate')"
      />
      <UiButton
        role="button"
        text="Next Step"
        class="block float-left"
        :class="showNextBF ? 'opacity-50' : ''"
        :disabled="showNextBF"
        @click="
          showStep2 = !showStep2;
          showStep1 = false;
        "
      />
    </div>
  </div>
</template>

<script setup>
const showStep1 = ref(true);
const showStep2 = ref(false);
const showStep3 = ref(false);
let showNextBF = ref(true);
let showNextJR = ref(true);

const handleDisableBF = (key) => {
  showNextBF.value = key;
};

const handleDisableJR = (key) => {
  showNextJR.value = key;
};
</script>
