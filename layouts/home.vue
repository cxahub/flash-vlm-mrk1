<template>
  <NavHeader />
  <main :style="bgImage" class="px-4 xl:px-0">
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
        "background-repeat": "no-repeat",
        height: "100%",
      },
    };
  },
};
</script>
