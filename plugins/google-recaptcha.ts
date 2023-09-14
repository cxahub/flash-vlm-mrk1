import { VueReCaptcha } from "vue-recaptcha-v3";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueReCaptcha, {
    siteKey: "6LcOExooAAAAADzxm4Ue4itAOsLU1tUO36_7ZxSW",
    loaderOptions: {
      autoHideBadge: true,
      explicitRenderParameters: {
        badge: "bottomleft",
      },
    },
  });
});
