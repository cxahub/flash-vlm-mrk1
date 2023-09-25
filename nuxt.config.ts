// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: { transpile: ["yup", "@vee-validate/rules"] },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/image"],
  devServer: {
    port: 4000,
  },
  image: {
    dir: "public",
  },
  ssr: false,
  css: ["~/assets/styles/main.css"],
  app: {
    head: {
      meta: [{ name: "theme-color", content: "#363031" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      VUE_APP_BASE_PATH: process.env.VUE_APP_BASE_PATH,
      VUE_APP_API_HOST: process.env.VUE_APP_API_HOST,
      VUE_APP_API_PORT: process.env.VUE_APP_API_PORT,
      VUE_APP_API_ROOT: process.env.VUE_APP_API_ROOT,
      VUE_APP_API_VER: process.env.VUE_APP_API_VER,
      VUE_APP_COOKIE_EXPIRES: process.env.VUE_APP_COOKIE_EXPIRES,
      VUE_APP_LOCAL_STORAGE_EXPIRES: process.env.VUE_APP_LOCAL_STORAGE_EXPIRES,
      VUE_APP_DATEFORMAT: process.env.VUE_APP_DATEFORMAT,
      VUE_APP_COMPANY_TEL: process.env.VUE_APP_COMPANY_TEL,
      VUE_APP_NOREPLY_EMAIL: process.env.VUE_APP_NOREPLY_EMAIL,
      VUE_APP_COMPANY_EMAIL: process.env.VUE_APP_COMPANY_EMAIL,
      VUE_APP_SMTP_EMAIL: process.env.VUE_APP_SMTP_EMAIL,
      VUE_APP_API_URL: process.env.VUE_APP_API_URL,
      VUE_APP_CDN_URL: process.env.VUE_APP_CDN_URL,
      VUE_APP_CDN_REPOSITORY_PATH: process.env.VUE_APP_CDN_REPOSITORY_PATH,
      VUE_APP_FLASH_WEBSITE_URL: process.env.VUE_APP_FLASH_WEBSITE_URL,
      VUE_APP_FLASH_FEEDBACK_SURVEY_URL:
        process.env.VUE_APP_FLASH_FEEDBACK_SURVEY_URL,
      VUE_APP_FIRESTARTERS_WEBSITE_URL:
        process.env.VUE_APP_FIRESTARTERS_WEBSITE_URL,
      VUE_APP_FIRESTARTERS_FEEDBACK_SURVEY_URL:
        process.env.VUE_APP_FIRESTARTERS_FEEDBACK_SURVEY_URL,
      VUE_APP_FIRESTARTERS_LINKEDIN_URL:
        process.env.VUE_APP_FIRESTARTERS_LINKEDIN_URL,
      VUE_APP_API_BUSINESS_FUNCTION_ROUTE:
        process.env.VUE_APP_API_BUSINESS_FUNCTION_ROUTE,
      VUE_APP_API_EMAIL_ROUTE: process.env.VUE_APP_API_EMAIL_ROUTE,
      VUE_APP_API_JOB_ROLE_ROUTE: process.env.VUE_APP_API_JOB_ROLE_ROUTE,
      VUE_APP_API_VLM_ACTIVATE_ROUTE:
        process.env.VUE_APP_API_VLM_ACTIVATE_ROUTE,
      VUE_APP_API_VLM_ENROLL_ROUTE: process.env.VUE_APP_API_VLM_ENROLL_ROUTE,
      VUE_APP_API_VLM_FORGOT_PASSWORD_ROUTE:
        process.env.VUE_APP_API_VLM_FORGOT_PASSWORD_ROUTE,
      VUE_APP_API_VLM_LOGIN_ROUTE: process.env.VUE_APP_API_VLM_LOGIN_ROUTE,
      VUE_APP_VLM_REGISTRATION_REDIRECT_URL:
        process.env.VUE_APP_VLM_REGISTRATION_REDIRECT_URL,
      VUE_APP_API_VLM_REGISTRATION_ROUTE:
        process.env.VUE_APP_API_VLM_REGISTRATION_ROUTE,
      VUE_APP_API_VLM_REPORT_ROUTE: process.env.VUE_APP_API_VLM_REPORT_ROUTE,
      VUE_APP_API_VLM_RESET_PASSWORD_ROUTE:
        process.env.VUE_APP_API_VLM_RESET_PASSWORD_ROUTE,
      VUE_APP_API_VLM_SURVEY_LIST_ROUTE:
        process.env.VUE_APP_API_VLM_SURVEY_LIST_ROUTE,
      VUE_APP_API_VLM_SURVEY_SAVE_RESPONSE_ROUTE:
        process.env.VUE_APP_API_VLM_SURVEY_SAVE_RESPONSE_ROUTE,
      VUE_APP_API_VLM_SURVEY_ROUTE: process.env.VUE_APP_API_VLM_SURVEY_ROUTE,
      VUE_APP_API_VLM_UNSUBSCRIBE_ROUTE:
        process.env.VUE_APP_API_VLM_UNSUBSCRIBE_ROUTE,
    },
  },

  googleFonts: {
    families: {
      Roboto: {
        wght: [100, 300, 700, 800, 900],
      },
      "Roboto+Condensed": {
        wght: [100, 300, 700, 800, 900],
      },
    },
  },

  devtools: {
    enabled: true,
  },
});
