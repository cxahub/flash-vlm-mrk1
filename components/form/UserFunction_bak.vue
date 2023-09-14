<template>
  <div class="mx-auto">
    <h1 class="text-3xl xl:text-5xl text-fs-yellow uppercase font-bold">
      Setup Your Account: {{ step }} of 3
    </h1>
    <div class="text-lg xl:text-3xl text-white font-bold py-4">
      {{ question }}<br />
      <div class="text-xs xl:text-base font-normal text-gray-400 leading-5">
        {{ instructions }}
      </div>
    </div>
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
      <form @submit.prevent="formSubmit()">
        <div>
          <label class="block text-white font-bold py-2">Full Name</label>
          <input
            type="text"
            v-model="userForm.userFName"
            class="rounded mr-4 mb-2 w-full xl:w-1/2"
            required="required"
            placeholder="First Name"
          />
          <input
            type="text"
            v-model="userForm.userLName"
            class="rounded w-full xl:w-1/2"
            required="required"
            placeholder="Last Name"
          />
        </div>
        <div>
          <label class="block text-white font-bold py-2">Company Name</label>
          <input
            type="text"
            v-model="userForm.userCompany"
            class="rounded w-full xl:w-2/3"
            required="required"
            placeholder="Company Name"
          />
        </div>
        <div>
          <label class="block text-white font-bold py-2">Email</label>
          <input
            type="email"
            v-model="userForm.userEmail"
            class="rounded w-full xl:w-2/3"
            required="required"
            placeholder="Email"
          />
        </div>
        <div>
          <label class="block text-white font-bold py-2">Password</label>
          <input
            type="password"
            v-model="userForm.userPassword"
            class="rounded w-full xl:w-2/3"
            required="required"
            placeholder="Password"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
//Get runtime config.
const config = useRuntimeConfig();

const step = ref(3);
const question = ref("Enter your account information");
const instructions = ref(
  "For a more personalized experience plase enter all relevant information below."
);

//Form vars.
const userForm = ref({
  userFName: "",
  userLName: "",
  userCompany: "",
  userEmail: "",
  userPassword: "",
});

/*

function formSubmit() {
  formRequest()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error("Registration form could not be send", error);
    });
}

function formRequest() {
  let formData = new FormData();

  formData.append("userFName", userForm.userFName.value);
  formData.append("userLName", userForm.userLName.value);
  formData.append("userCompany", userForm.userCompany.value);
  formData.append("userEmail", userForm.userEmail.value);
  formData.append("userPassword", userForm.userPassword.value);

  const { data: responseData } = useFetch(
    config.public.VUE_APP_API_URL +
      "/" +
      config.public.VUE_APP_API_VLM_REGISTER_ROUTE,
    {
      method: "POST",
      body: formData,
    }
  );
}
*/
</script>
