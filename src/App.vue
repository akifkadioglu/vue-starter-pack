<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <component :is="$route.meta.layout">
        <transition name="fade" mode="out-in">
          <div :key="route.name">
            <component :is="Component" />
          </div>
        </transition>
      </component>
    </transition>
  </router-view>
  <div>
    <Toast />
  </div>

</template>

<script setup>
import Toast from "./components/Toast.vue";

import { RouterLink, RouterView } from 'vue-router'
</script>./components/Toast.vue
