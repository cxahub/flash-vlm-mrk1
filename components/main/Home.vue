<template>
  <div class="grid grid-cols-1 xl:grid-cols-3">
    <div class="col-span-1">
      <h1
        class="text-4xl xl:text-5xl text-fs-yellow font-bold text-center xl:text-left"
      >
        Discover the Secrets to Retail Success
      </h1>
      <div class="xl:text-xl font-bold py-8 text-center xl:text-left">
        The world's top retailers rely on FLASH™ performance benchmarks to
        clarify priorities, develop strategies, compare trends, and increase
        their organization's overall performance.
      </div>
      <div class="ml-8">
        <ul class="xl:text-xl list-outside list-image-checkmark">
          <li class="mb-4">
            See how your business maturity ranks overall in your industry
          </li>
          <li class="mb-4">
            Get expert suggestions on how to improve your retail business
          </li>
          <li class="mb-4">
            <NuxtLink
              to="/report/flash-report-example.pdf"
              target="_blank"
              class="underline font-bold"
              >Review a sample report</NuxtLink
            >
            before you begin to see the type of insights you'll receive
          </li>
          <li class="mb-4">
            Start the survey and return to it at any time with a free personal
            account
          </li>
          <li class="xl:mb-4">
            You have the option to have a knowledge expert walk you through your
            results
          </li>
        </ul>
      </div>
      <div class="invisible h-0 xl:h-auto xl:visible xl:text-sm xl:pt-56">
        <img src="/images/logo/sap-logo.png" class="block float-left mr-4" />
        The FLASH™ Retail Maturity Assessment is provided by SAP — a global
        leader in enterprise cloud technology.
      </div>
    </div>
    <div class="xl:col-span-2 pt-4 xl:pt-0 xl:px-16">
      <FormUserFunction />
      <div class="visible xl:invisible text-xs mt-6">
        <img src="/images/logo/sap-logo.png" class="block float-left mr-4" />
        The FLASH™ Retail Maturity Assessment is provided by SAP — a global
        leader in enterprise cloud technology.
      </div>
    </div>
  </div>
</template>

<script setup>
import nuxtStorage from "nuxt-storage";

//Token
const token = nuxtStorage.localStorage.getData("token");
//Check auth.
if (token != null) {
  navigateTo("/dashboard");
}
</script>
