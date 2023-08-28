<template>
  <div class="relative bottom-0 flex mx-auto">
    <div class="flex mx-auto py-8">
      <div class="px-2">
        <UiButton
          text="&xlarr; Previous Question"
          path="/survey/1/question"
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
      <div class="px-2">
        <UiButton
          text="Next Question &xrarr;"
          path="/survey/2/question"
          format="primary"
          size="lg"
        />
      </div>
    </div>
  </div>
</template>
