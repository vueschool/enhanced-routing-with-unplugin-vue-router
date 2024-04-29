<script setup lang="ts">
import { RouterLink } from "vue-router/auto";
</script>
<template>
  <div class="users">
    <RouterLink to="/users/create">Create New User</RouterLink>
    <ul>
      <li>List of all my users</li>
      <li>User 1</li>
      <li>User 2</li>
      <li>User 3</li>
    </ul>
  </div>
</template>
