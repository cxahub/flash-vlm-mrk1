<template>
  <NavHeader />
  <main :style="bgImage">
    <div class="container mx-auto">
      <slot />
    </div>
  </main>
  <NavFooter />
</template>

<script>
import bgImage from "/images/bg/bg-collaborate.jpg";
export default {
  data() {
    return {
      bgImage: {
        "background-position": "center center",
        "background-size": "cover",
        "background-image": `url(${bgImage})`,
        "background-repeat": "no-repeat",
        height: "80vh",
      },
    };
  },
};
</script>
