<script setup lang="ts">
import img from '@/assets/img/pc.png';
import SiteHeader from '@/components/SiteHeader.vue';
import TopPage from '@/views/TopPage.vue';
import SiteFooter from './components/SiteFooter.vue';
</script>

<template>
  <div class="main-container">
    <SiteHeader title="ITトピックウォッチャ" :img="img" />
    <main>
      <TopPage />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped lang="scss">
.main-container {
  display: grid;
  grid-template-rows: 10vh 1fr 5vh;
  max-width: 100vw;
  main {
    height: 85vh;
  }
}
</style>
