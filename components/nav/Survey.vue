<template>
  <div class="grid grid-rows-3 grid-col-2 gap-8 xl:gap-16 pb-8 xl:py-4">
    <div
      v-if="questionID > 1"
      class="row-start-1"
      :class="questionID === 16 ? 'col-span-2 text-center' : 'text-center'"
    >
      <UiButton
        text="Previous Question"
        :path="`/survey/${questionID - 1}/${questionPrevious.toLowerCase()}`"
        format="secondary"
        size="md"
      />
    </div>
    <div
      v-if="questionID < 16"
      class="row-start-1"
      :class="questionID === 1 ? 'col-span-2 text-center' : 'text-center'"
    >
      <UiButton
        text="Next Question"
        :path="`/survey/${questionID + 1}/${questionNext.toLowerCase()}`"
        format="primary"
        size="md"
      />
    </div>
    <div
      class="row-start-2 col-span-2 xl:row-start-1 xl:col-start-1 xl:col-span-1 text-center"
      :class="questionID === 16 ? 'xl:col-span-2 text-center' : ''"
    >
      <UiButton
        text="View Dashboard"
        path="/dashboard"
        format="tertiary"
        size="md"
      />
    </div>
    <div
      v-if="questionID === 16"
      class="row-start-3 col-span-2 xl:col-span-4 xl:row-start-2 text-center"
    >
      <UiButton
        text="Generate My Report"
        path="/report"
        format="primary"
        size="lg"
      />
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
