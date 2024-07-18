import { createRouter, createWebHistory } from "vue-router";

import defaultLayout from "@/layouts/default.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        layout: defaultLayout,
      },
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      meta: {
        layout: defaultLayout,
      },
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
