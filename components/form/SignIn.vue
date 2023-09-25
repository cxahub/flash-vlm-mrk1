<template>
  <div v-if="route.query.registration" class="text-fs-yellow font-bold py-4">
    {{ registrationMessage }}
  </div>
  <div v-if="route.query.timeout" class="text-fs-yellow font-bold py-4">
    {{ timeoutMessage }}
  </div>
  <div v-if="!results.success" class="text-fs-yellow font-bold">
    {{ results.err }}
  </div>
  <div v-if="showSignIn">
    <UiLoader icon="flash-icon.png" type="signin" />
  </div>
  <div>
    <form accept-charset="UTF-8" v-on:submit.prevent="onSubmit()" method="POST">
      <div>
        <label class="block text-white font-bold py-2"
          ><span class="text-fs-red">*</span> Email</label
        >
        <input
          type="email"
          v-model="email"
          class="w-full rounded xl:w-1/2"
          placeholder="Email"
        />
      </div>
      <div>
        <label class="block text-white font-bold py-2"
          ><span class="text-fs-red">*</span> Password</label
        >
        <input
          type="password"
          v-model="password"
          class="w-full rounded xl:w-1/2"
          required="required"
          placeholder="Password"
        />
      </div>
      <UiButton role="button" text="Sign In" type="submit" />
    </form>
    <div class="text-white block float-left pr-4">
      <NuxtLink to="/" class="underline cursor-pointer">Register Now</NuxtLink>
    </div>
    <div class="text-white">
      <NuxtLink to="/profile/forgot-password" class="underline cursor-pointer"
        >Forgot Password?</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
import nuxtStorage from "nuxt-storage";

const route = useRoute();

//Get runtime config.
const config = useRuntimeConfig();

//Cookie
const rememberUser = useCookie("rememberUser", {
  maxAge: config.public.VUE_APP_COOKIE_EXPIRES,
});
rememberUser.value = rememberUser.value || "";

//Token
const token = nuxtStorage.localStorage.getData("token");

//Form vars.
let email = ref(rememberUser.value);
let password = ref("");

let results = ref("");
let resultsEnroll = ref("");
const surveyID = useCookie("surveyID", {
  maxAge: config.public.VUE_APP_COOKIE_EXPIRES,
});
surveyID.value = surveyID.value || "";
let registrationMessage = ref(
  "You have successfully registered. Please Sign In once you have activated your account."
);
let timeoutMessage = ref("Your session has timed out. Please Sign In again.");

const showSignIn = ref(false);

const onSubmit = () => {
  showSignIn.value = true;
  formRequest()
    .then((result) => {
      results.value = result;
      if (!results.success) {
        showSignIn.value = false;
      }
      if (results.value.success) {
        setCookies(results.value.results[0]);

        //Enroll survey and auth if it doesn't exist.
        if (surveyID.value === "") {
          surveyEnrollRequest()
            .then((resultEnroll) => {
              resultsEnroll.value = resultEnroll;
              if (resultsEnroll.value.status) {
                setSurveyID(
                  resultsEnroll.value.results.id,
                  resultsEnroll.value.results
                );
              }
            })
            .catch((error) => {
              console.error("Enroll form could not be executed", error);
            });
        }
        setTimeout(function () {
          showSignIn.value = false;
          navigateTo("/dashboard");
        }, 2000);
      }
    })
    .catch((error) => {
      console.error("Sign In form could not be sent", error);
    });
};

async function formRequest() {
  return await $fetch(
    config.public.VUE_APP_API_URL +
      "/" +
      config.public.VUE_APP_API_VLM_LOGIN_ROUTE,
    {
      method: "POST",
      body: {
        uName: email.value,
        pass: password.value,
      },
    }
  );
}

//Create survey based on the registration and company name.
async function surveyEnrollRequest() {
  return await $fetch(
    config.public.VUE_APP_API_URL +
      "/" +
      config.public.VUE_APP_API_VLM_ENROLL_ROUTE,
    {
      method: "POST",
      body: {
        Response: {
          userInfo: {
            firstName: useCookie("firstName"),
            lastName: useCookie("lastName"),
            userType: "Employee", // Can leave it as blank
            userId: useCookie("userId"),
            email: useCookie("email"),
          },
          surveyInfo: {
            surveyTemplateId: 77,
            surveyAreaId: 4,
          },
        },
      },
      query: {
        "x-auth-token": nuxtStorage.localStorage.getData("token"),
      },
    }
  );
}

function setCookies(user) {
  //Update rememberUser cookie
  rememberUser.value = user.email;

  //Set the user token.
  const token = nuxtStorage.localStorage.setData("token", user.token, 60);
  token.value = token;

  //Create user cookies for use throughout the site.
  const userId = useCookie("userId", {
    maxAge: config.public.VUE_APP_COOKIE_EXPIRES,
  });
  const firstName = useCookie("firstName", {
    maxAge: config.public.VUE_APP_COOKIE_EXPIRES,
  });
  const lastName = useCookie("lastName", {
    maxAge: config.public.VUE_APP_COOKIE_EXPIRES,
  });
  const companyName = useCookie("companyName", {
    maxAge: config.public.VUE_APP_COOKIE_EXPIRES,
  });
  const email = useCookie("email", {
    maxAge: config.public.VUE_APP_COOKIE_EXPIRES,
  });
  userId.value = user.userId;
  firstName.value = user.firstName;
  lastName.value = user.lastName;
  companyName.value = user.companyName;
  email.value = user.email;
}

function setSurveyID(id, survey) {
  //Create surveyID cookie.
  const surveyID = useCookie("surveyID", {
    maxAge: config.public.VUE_APP_COOKIE_EXPIRES,
  });
  surveyID.value = id;
  //Answer registration questions to instantiate the survey.
  const companyAnswerID = survey.preSurveyAssets.org_info.org_level.unique_id;
  const bfAnswerID = survey.areas[0].groups[0].questions[0].answers[0].id;
  const jrAnswerID = survey.areas[0].groups[1].questions[0].answers[0].id;
  setRegistrationData(companyAnswerID, useCookie("companyName").value);
  setRegistrationData(bfAnswerID, useCookie("businessfunction").value);
  setRegistrationData(jrAnswerID, useCookie("jobrole").value);
}

async function setRegistrationData(id, answer) {
  return await $fetch(
    config.public.VUE_APP_API_URL +
      "/" +
      config.public.VUE_APP_API_VLM_SURVEY_SAVE_RESPONSE_ROUTE,
    {
      method: "POST",
      body: {
        Response: [
          {
            response_value: answer.toString(),
            unique_id: parseInt(id),
            assignee_id: null,
            assignee_email: null,
            emailpayload: null,
          },
        ],
      },
      query: {
        "x-auth-token": nuxtStorage.localStorage.getData("token"),
        userId: useCookie("userId").value,
      },
    }
  );
}
</script>
