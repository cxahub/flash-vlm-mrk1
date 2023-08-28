<template>
  <header class="fixed top-0 left-0 right-0 z-20 bg-fs-brown">
    <nav
      class="container mx-auto xl:flex xl:justify-between xl:items-center py-5"
    >
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="hover:text-fs-yellow">
          <img
            src="/images/icon/flash-icon.png"
            class="block float-left w-6 xl:w-10 mt-1 mr-3"
            aria-label="flash icon"
            alt="Flash Icon"
          />
          <div
            class="block float-left font-roboto text-2xl xl:text-5xl text-white uppercase font-bold"
          >
            FLASH&trade;
          </div>
          <div
            class="hidden xl:block float-left text-2xl xl:font-roboto-condensed font-medium text-fs-light-brown capitalize pt-2 mx-8"
          >
            {{ dateNowFormat(year) }} Enterprise Maturity Assessment
          </div>
        </NuxtLink>
        <!-- Mobile menu button -->
        <div @click="showMenu = !showMenu" class="flex xl:hidden">
          <button
            type="button"
            class="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex min-h-screen' : 'hidden'"
        class="flex-col mt-8 space-y-4 xl:flex xl:space-y-0 xl:flex-row xl:items-center xl:space-x-10 xl:mt-0"
      >
        <li
          class="font-roboto-condensed text-base font-light text-white hover:text-fs-yellow"
        >
          <NuxtLink to="/" activeClass="text-fs-yellow">Home</NuxtLink>
        </li>
        <li
          class="font-roboto-condensed text-base font-light text-white hover:text-fs-yellow"
        >
          <NuxtLink to="/dashboard" activeClass="text-fs-yellow"
            >Dashboard</NuxtLink
          >
        </li>
        <li
          class="font-roboto-condensed text-base font-light text-white hover:text-fs-yellow"
        >
          <NuxtLink to="/profile" activeClass="text-fs-yellow"
            >Sign In</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      showMenu: false,
      year: new Date(),
    };
  },
  methods: {
    dateNowFormat(value) {
      return moment(value).format("yyyy");
    },
  },
};
</script>
