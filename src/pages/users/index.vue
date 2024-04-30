<script setup lang="ts">
import { RouterLink } from "vue-router/auto";
</script>
<template>
  <div class="users">
    <RouterLink to="/users/create">Create New User</RouterLink>
    <ul>
      <li>List of all my users</li>
      <li>
        <RouterLink
          :to="{
            name: '/users/[id]',
            params: {
              id: '1',
            },
          }"
          >User 1</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/users/2">User 2</RouterLink>
      </li>
      <li>
        <RouterLink to="/users/3">User 3</RouterLink>
      </li>
    </ul>
  </div>
</template>
