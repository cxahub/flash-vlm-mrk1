<template>
  <div class="relative bottom-0 flex mx-auto">
    <div class="flex mx-auto py-8">
      <div v-if="questionID > 1" class="px-2">
        <UiButton
          text="&xlarr; Previous Question"
          :path="`/survey/${questionID - 1}/${questionPrevious.toLowerCase()}`"
          format="secondary"
          size="lg"
        />
      </div>
      <div class="px-2">
        <UiButton
          text="View Dashboard"
          path="/dashboard"
          format="tertiary"
          size="lg"
        />
      </div>
      <div v-if="questionID < 16" class="px-2">
        <UiButton
          text="Next Question &xrarr;"
          :path="`/survey/${questionID + 1}/${questionNext.toLowerCase()}`"
          format="primary"
          size="lg"
        />
      </div>
      <div v-if="questionID === 16" class="px-2">
        <UiButton
          text="Generate My Report"
          path="/report"
          format="primary"
          size="lg"
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
