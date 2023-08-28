<template>
  <div>
    <form accept-charset="UTF-8" v-on:submit.prevent="onSubmit()" method="POST">
      <div>
        <label class="block text-white font-bold py-2">Email</label>
        <input
          type="email"
          v-model="email"
          class="block rounded w-2/3"
          placeholder="Email"
        />
      </div>
      <div class="success" v-if="isSuccess">
        We received your submission, thank you!
      </div>
      <UiButton role="button" text="Sign In" type="submit" />
    </form>
    <div class="text-white block float-left pr-4">
      <NuxtLink to="/profile/new-account" class="underline cursor-pointer"
        >New Account?</NuxtLink
      >
    </div>
    <div class="text-white">
      <NuxtLink to="/profile" class="underline cursor-pointer"
        >Sign In?</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>
