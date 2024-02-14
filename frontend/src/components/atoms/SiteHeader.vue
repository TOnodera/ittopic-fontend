<script lang="ts" setup>
import { useIsNavigationOpenStore } from '@/stores/isNavigationOpen';
defineProps<{ title: string }>();
const store = useIsNavigationOpenStore();
</script>
<template>
  <v-app-bar :flat="true">
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        class="text-secondary"
        @click="() => store.toggle()"
      ></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title
      class="text-secondary font-weight-bold text-h5 cursor-pointer"
    >
      <router-link to="/" class="text-decoration-none text-secondary" exact
        ><span>{{ title }}</span></router-link
      >
    </v-app-bar-title>
  </v-app-bar>
</template>
