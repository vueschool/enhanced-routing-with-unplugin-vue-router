<script setup lang="ts">
import { definePage } from "unplugin-vue-router/runtime";

definePage({
  alias: ["/me"],
  meta: {
    requiresAuth: true,
  },
});
</script>
<template>
  <div class="about-me">
    <h1>This is an about me page</h1>
  </div>
</template>
