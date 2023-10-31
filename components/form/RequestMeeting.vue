<template>
  <h1 class="text-3xl xl:text-5xl text-fs-yellow uppercase font-bold">
    Request Meeting
  </h1>
  <div
    v-if="showRequestMessage"
    class="text-xs xl:text-base font-bold text-fs-yellow py-16"
  >
    {{ requestMessage }}
  </div>
  <div v-else>
    <div class="text-xs xl:text-base font-normal text-gray-400 leading-5">
      {{ instructions }}
    </div>
    <form accept-charset="UTF-8" v-on:submit.prevent="onSubmit()" method="POST">
      <h2 class="text-lg xl:text-2xl text-fs-yellow uppercase font-bold py-6">
        {{ emailSubject }}
      </h2>

      <div class="text-fs-yellow pb-4">
        <label class="block text-white font-bold py-2">Request</label>
        I would like to request a meeting to review my FLASH results with you
        and dive deeper into best practices.
        <br /><br />
        <span class="text-white text-sm">
          PLEASE NOTE: A copy of your report will be sent for review and any
          follow-up conversation(s).
        </span>
      </div>
      <div>
        <label class="block text-white font-bold py-2">Comments</label>
        <textarea
          v-model="comments"
          class="rounded w-full"
          placeholder="Enter any additonal comments here..."
        >
        </textarea>
      </div>
      <div>
        <UiButton role="button" text="Submit" type="submit" />
      </div>
    </form>
  </div>
</template>

<script setup>
//Get runtime config.
const config = useRuntimeConfig();

const instructions =
  'Please enter any comments and click "Submit" to request a meeting.';
let showRequestMessage = ref(false);
const requestMessage =
  "Thank you for your request. Please allow for up to 2 business days for a response. You will now be redirected.";
const surveyID = ref(useCookie("surveyID").value);
const firstName = ref(useCookie("firstName").value);
const lastName = ref(useCookie("lastName").value);
const email = ref(useCookie("email").value);
const companyName = ref(useCookie("companyName").value);
const comments = ref("");

const emailSubject = ref("FLASH Meeting Request");
const emailBody = ref(
  `I would like to request a meeting to review my FLASH results with you and dive deeper into best practices.`
);

const emailSignature = ref(
  `Thank you,<br/><br/><strong>${firstName.value} ${lastName.value}</strong><br/>${companyName.value}<br/><a href="mailto:${email.value}?subject=FLASH Meeting Request Follow-up">${email.value}</a>`
);

let results = ref("");

const onSubmit = () => {
  formRequest()
    .then((result) => {
      results.value = result;
      if (results.value.success) {
        showRequestMessage.value = true;
        setTimeout(function () {
          navigateTo("/report");
        }, 5000);
      }
    })
    .catch((error) => {
      console.error("Request form could not be sent", error);
    });
};

async function formRequest() {
  //Now call the API.
  return await $fetch(
    config.public.VUE_APP_API_URL +
      "/" +
      config.public.VUE_APP_API_VLM_REQUEST_MEETING_ROUTE,
    {
      method: "POST",
      body: {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        companyName: companyName.value,
        emailSubject: emailSubject.value,
        emailBody: emailBody.value,
        comments: comments.value,
        emailSignature: emailSignature.value,
        surveyID: surveyID.value,
      },
    }
  );
}
</script>
