<template>
  <!-- Survey Progress -->
  <div class="flex flex-nowrap gap-4 items-center py-8">
    <div class="font-bold pr-4">0%</div>
    <div class="w-full h-8 rounded-full border-2 relative cursor-default">
      <!-- Player Ball -->
      <span
        class="absolute -ml-2.5 text-2xl text-fs-yellow text-roboto"
        :style="{ left: progress }"
      >
        <span class="relative block h-7 rounded-full bg-fs-yellow right-0">
          <span class="block float-right text-white text-base px-2 pt-1">{{
            progress
          }}</span>
        </span>
      </span>
      <!-- Player Progress Bar-->
      <span class="block h-2 rounded" :style="{ width: progress }"></span>
    </div>
    <div class="font-bold pl-4">{{ duration }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      duration: "100%",
      progress: "90%",
    };
  },
  methods: {},
  computed: {},
};
</script>
