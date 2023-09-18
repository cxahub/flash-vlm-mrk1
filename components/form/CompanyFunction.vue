<template>
  <div
    class="w-full p-8 bg-fs-brown bg-cover rounded-3xl border-2 border-gray-500 z-5 drop-shadow-lg"
  >
    <div
      class="text-base text-center xl:text-left xl:text-xl text-white xl:font-bold pb-4"
    >
      Enter your company name and complete a 15-question survey to receive a
      free personalized report benchmarking your business capabilities.
    </div>
    <div
      v-if="results != '' && !results.success"
      class="text-fs-yellow font-bold p-6 border-2 border-fs-yellow rounded-md"
    >
      {{ results.err }}
    </div>
    <div class="">
      <form @submit.prevent="onSubmit()">
        <div>
          <label class="block text-white font-bold py-2"
            ><span class="text-fs-red">*</span> Company Name</label
          >
          <input
            type="text"
            v-model="companyName"
            class="rounded w-full"
            required="required"
            placeholder="Company Name"
          />
        </div>

        <div class="text-sm xl:text-base text-white py-4">
          By clicking "Submit", you accept our
          <NuxtLink
            to=""
            activeClass="text-fs-yellow"
            class="underline cursor-pointer"
            @click="
              showTerms = !showTerms;
              showPrivacy = false;
              showCookiePolicy = false;
              $scrollTop();
            "
            >Terms & Conditions</NuxtLink
          >
          and
          <NuxtLink
            to=""
            activeClass="text-fs-yellow"
            class="underline cursor-pointer"
            @click="
              showPrivacy = !showPrivacy;
              showTerms = false;
              showCookiePolicy = false;
              $scrollTop();
            "
            >Privacy Policy</NuxtLink
          >
          and
          <NuxtLink
            to=""
            activeClass="text-fs-yellow"
            class="underline cursor-pointer"
            @click="
              showCookiePolicy = !showCookiePolicy;
              showTerms = false;
              showPrivacy = false;
              $scrollTop();
            "
            >Cookie Policy</NuxtLink
          >. Your inputs and scores are visible to you but anonymous in the
          shared dataset.
        </div>
        <div class="flex flex-row items-center xl:items-baseline">
          <div class="basis-1/4">
            <UiButton
              role="button"
              text="Submit"
              path=""
              class="block"
              type="submit"
              @click="$scrollTop()"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
  <div class="text-xs xl:text-sm pt-10 px-10">
    <img src="/images/logo/sap-logo.png" class="block float-left mr-4" />
    The FLASH™ Retail Maturity Assessment is provided by SAP — a global leader
    in enterprise cloud technology.
  </div>
  <div
    @click="showTerms = !showTerms"
    class="absolute right-4 left-4 -top-24 xl:top-60 xl:left-[60%] xl:w-[20%] h-[50%] overflow-x-hidden rounded-3xl border-2 p-8 bg-white border-gray-500"
    :class="showTerms ? 'show-panel-bottom' : `hide-panel-bottom`"
  >
    <LegalTerms />
  </div>
  <div
    @click="showPrivacy = !showPrivacy"
    class="absolute right-4 left-4 -top-24 xl:top-60 xl:left-[60%] xl:w-[20%] h-[50%] overflow-x-hidden rounded-3xl border-2 p-8 bg-white border-gray-500"
    :class="showPrivacy ? 'show-panel-bottom' : `hide-panel-bottom`"
  >
    <LegalPrivacy />
  </div>
  <div
    @click="showCookiePolicy = !showCookiePolicy"
    class="absolute right-4 left-4 -top-24 xl:top-60 xl:left-[60%] xl:w-[20%] h-[50%] overflow-x-hidden rounded-3xl border-2 p-8 bg-white border-gray-500"
    :class="showCookiePolicy ? 'show-panel-bottom' : `hide-panel-bottom`"
  >
    <LegalCookiePolicy />
  </div>
</template>

<script setup>
//Get runtime config.
const config = useRuntimeConfig();

const showTerms = ref(false);
const showPrivacy = ref(false);
const showCookiePolicy = ref(false);

//Form vars.
let companyName = ref("");

let result = ref("");
let results = ref("");

const onSubmit = () => {
  formRequest(companyName.value)
    .then((result) => {
      results.value = result;
      if (results.value.success) {
        navigateTo("/dashboard");
      }
    })
    .catch((error) => {
      console.error("Company form could not be sent", error);
    });
};

async function formRequest(cnv) {
  //Create a cookie for company name.
  const company = useCookie("company", { maxAge: 1704085200 });
  company.value = cnv;
  const authenticated = useCookie("authenticated", { maxAge: 1704085200 });
  authenticated.value = true;
  result.success = true;
  return result;
}
</script>

<style scoped>
.show-panel-topic {
  transition-timing-function: ease-in;
  opacity: 1;
  transition: 1s;
  transform: translateY(55%);
  z-index: 0;
  visibility: visible;
}

.hide-panel-topic {
  transition-timing-function: ease-out;
  transition: 1s;
  transform: translateY(200%);
  opacity: 0;
  z-index: 0;
  visibility: hidden;
}

.show-panel-bottom {
  transition-timing-function: ease-in;
  opacity: 1;
  transition: 1s;
  transform: translateY(45%);
  z-index: 5;
  visibility: visible;
}

.hide-panel-bottom {
  transition-timing-function: ease-out;
  transition: 1s;
  opacity: 0;
  transform: translateY(100%);
  z-index: 5;
  visibility: hidden;
}

@media (min-width: 992px) {
  .show-panel-topic {
    transition: 1s;
    transform: translateX(10%);
    visibility: visible;
  }

  .hide-panel-topic {
    transition: 1s;
    transform: translateX(-150%);
    visibility: hidden;
  }

  .show-panel-bottom {
    transition: 1s;
    transform: translateY(0%);
    visibility: visible;
  }

  .hide-panel-bottom {
    transition: 1s;
    opacity: 0;
    transform: translateY(100%);
    visibility: hidden;
  }
}
</style>
