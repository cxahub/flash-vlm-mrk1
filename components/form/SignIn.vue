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
      <div>
        <label class="block text-white font-bold py-2">Password</label>
        <input
          type="password"
          v-model="password"
          class="block rounded w-2/3"
          required="required"
          placeholder="Password"
        />
      </div>
      <UiButton role="button" text="Sign In" type="submit" />
    </form>
    <div class="text-white block float-left pr-4">
      <NuxtLink to="/profile/new-account" class="underline cursor-pointer"
        >New Account?</NuxtLink
      >
    </div>
    <div class="text-white">
      <NuxtLink to="/profile/forgot-password" class="underline cursor-pointer"
        >Forgot Password?</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>
