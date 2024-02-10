<script setup lang="ts">
import SiteHeader from '@/components/atoms/SiteHeader.vue';
import SiteFooter from './components/atoms/SiteFooter.vue';
import MainContent from './components/molecules/MainContent.vue';
import MenuDrawer from './components/atoms/MenuDrawer.vue';

const siteMenus = [
  {
    name: 'Top',
    url: '/',
    icon: 'mdi-home'
  },
  {
    name: 'Histories',
    url: '/histories',
    icon: 'mdi-update'
  }
];
</script>

<template>
  <v-app class="app-container" ref="app">
    <MenuDrawer :items="siteMenus" />
    <SiteHeader title="Computer Topic" />
    <MainContent>
      <router-view />
    </MainContent>
    <SiteFooter />
  </v-app>
</template>

<style scoped lang="scss">
.app-container {
  min-height: 100vh;
}
</style>
