import { createRouter, createWebHistory } from "vue-router/auto";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
});

router.beforeEach((to, from) => {
  const loggedIn = false;
  if (to.meta.requiresAuth && !loggedIn) {
    router.replace({ name: "/" });
  }
});

export default router;
