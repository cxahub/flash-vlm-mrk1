<template>
  <div class="mb-10 xl:mb-14">
    <h3
      class="block float-left text-2xl xl:text-3xl text-fs-yellow font-bold px-2"
    >
      Survey Topics
    </h3>
    <div class="block float-right">
      <i class="fa fa-times-circle text-black" aria-hidden="true"></i>
    </div>
  </div>
  <div class="block overflow-x-hidden h-[85%] scrollbar-hide w-full">
    <DashboardQuestions :showLink="false" />
  </div>
</template>
