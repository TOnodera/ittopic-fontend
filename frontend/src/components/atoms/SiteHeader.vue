<script lang="ts" setup>
import img from '@/assets/img/pc.png';
defineProps<{ title: string }>();
</script>
<template>
  <v-app-bar :flat="true">
    <template v-slot:prepend>
      <v-app-bar-nav-icon class="text-secondary"></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title class="text-secondary">{{ title }}</v-app-bar-title>
  </v-app-bar>
</template>
