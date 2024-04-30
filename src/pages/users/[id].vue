<script setup lang="ts">
import { useRoute } from "vue-router/auto";
const route = useRoute("/users/[id]");
</script>

<template>
  <p>User Id: {{ route.params.id }}</p>
</template>
