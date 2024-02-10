<script setup lang="ts">
import SiteHeader from '@/components/atoms/SiteHeader.vue';
import SiteFooter from './components/atoms/SiteFooter.vue';
import MainContent from './components/molecules/MainContent.vue';
</script>

<template>
  <v-app class="app-container" ref="app">
    <SiteHeader title="ITトピック" />
    <MainContent>
      <router-view></router-view>
    </MainContent>
    <SiteFooter />
  </v-app>
</template>

<style scoped lang="scss">
.app-container {
  min-height: 100vh;
}
</style>
