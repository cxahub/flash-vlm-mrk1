<template>
  <!-- Survey Progress -->
  <div class="flex flex-nowrap gap-4 items-center py-8">
    <div class="font-bold pr-4">0%</div>
    <div
      class="w-full h-8 rounded-full border-2 relative cursor-default bg-white drop-shadow-md"
    >
      <!-- Player Ball -->
      <span
        class="absolute pr-6 text-2xl text-fs-yellow text-roboto"
        :style="{ left: progress }"
      >
        <span class="relative block h-7 rounded-full bg-fs-yellow right-0">
          <span class="block float-right text-white text-base px-2 pt-1">{{
            progress
          }}</span>
        </span>
      </span>
      <!-- Player Progress Bar-->
      <span
        class="block h-2 rounded-full bg-fs-yellow-light pt-4 pb-3"
        :style="{ width: progressBar }"
      ></span>
    </div>
    <div class="font-bold pl-4">{{ duration }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  questionID: { type: Number, default: 0 },
  completePercentage: { type: Number, default: 0 },
});

const duration = ref("100%");
const progressBar = ref("0%");
const completed = ref(0);
const pbValue = ref(0);
const progress = ref(0);

completed.value = props.completePercentage;
pbValue.value = parseInt(Number(completed.value) + 2);
progress.value = completed.value + "%";
progressBar.value = pbValue.value + "%";
</script>
