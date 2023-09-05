<template>
  <div class="relative bottom-0 mx-auto text-center">
    <div class="grid grid-cols-2 xl:grid-cols-3 gap-0 xl:gap-8 py-0 py-4">
      <div
        v-if="questionID > 1"
        class="px-2 py-4 xl:py-0"
        :class="questionID === 16 ? 'col-span-2 text-center' : 'text-center'"
      >
        <UiButton
          text="Previous Question"
          :path="`/survey/${questionID - 1}/${questionPrevious.toLowerCase()}`"
          format="secondary"
          size="md"
        />
      </div>
      <div v-if="questionID < 16" class="px-2 py-4 xl:py-0">
        <UiButton
          text="Next Question"
          :path="`/survey/${questionID + 1}/${questionNext.toLowerCase()}`"
          format="primary"
          size="md"
        />
      </div>
      <div class="col-span-2 xl:col-span-1 py-4 xl:py-0 px-2 text-center">
        <UiButton
          text="View Dashboard"
          path="/dashboard"
          format="tertiary"
          size="md"
        />
      </div>
      <div
        v-if="questionID === 16"
        class="col-span-2 xl:col-span-1 py-4 xl:py-0 px-2 text-center"
      >
        <UiButton
          text="Generate My Report"
          path="/report"
          format="primary"
          size="md"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    questionID: { type: Number, default: 0 },
    questionPrevious: { type: String, default: "question" },
    questionNext: { type: String, default: "question" },
  },
};
</script>
