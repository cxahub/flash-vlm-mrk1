<template>
  Error page
  <strong>{{ error.message }}</strong>
</template>

<script setup>
const error = useError();
</script>
