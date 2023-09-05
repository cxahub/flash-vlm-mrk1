<template>
  <NavHeader />
  <main :style="bgImage" class="flex-grow">
    <div class="container mx-auto">
      <slot />
    </div>
  </main>
  <NavFooter />
</template>

<script>
import bgImage from "/images/bg/bg-home.jpg";
export default {
  data() {
    return {
      bgImage: {
        "background-position": "center center",
        "background-size": "cover",
        "background-image": `url(${bgImage})`,
      },
    };
  },
};
</script>
