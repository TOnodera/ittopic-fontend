<script setup lang="ts">
import img from '@/assets/img/pc.png';
import SiteHeader from '@/components/atoms/SiteHeader.vue';
import TopPage from '@/views/TopPage.vue';
import SiteFooter from './components/atoms/SiteFooter.vue';
</script>

<template>
  <v-app>
    <v-icon icon="mdi-home" />
    <v-container>
      <v-app-bar :elevation="3">
        <template v-slot:prepend>
          <v-app-bar-nav-icon class="text-secondary"></v-app-bar-nav-icon>
        </template>
        <v-app-bar-title class="text-secondary"
          >Application Bar</v-app-bar-title
        >
      </v-app-bar>
    </v-container>
  </v-app>
</template>

<style scoped lang="scss"></style>
