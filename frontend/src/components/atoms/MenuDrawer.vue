<script lang="ts" setup>
import { useIsNavigationOpenStore } from '@/stores/isNavigationOpen';
defineProps<{ items: { name: string; url: string; icon: string }[] }>();
const store = useIsNavigationOpenStore();
</script>
<template>
  <v-navigation-drawer
    v-model="store.isNavigationOpen"
    location="left"
    color="surface-bright"
    temporary
  >
    <v-list-item title="Menu" />
    <v-divider />
    <v-list nav>
      <v-list-item
        v-for="item in items"
        :key="item.url"
        :title="item.name"
        :value="item.name"
        :to="item.url"
        :prepend-icon="item.icon"
      />
    </v-list>
  </v-navigation-drawer>
</template>
