<script setup lang="ts">
import img from '@/assets/img/pc.png';
import SiteHeader from '@/components/SiteHeader.vue';
import TopPage from '@/views/TopPage.vue';
</script>

<template>
  <div class="main-container">
    <SiteHeader title="ITニュースウォッチャ" :img="img" />
    <main>
      <TopPage />
    </main>
    <footer>copyright t-dera 2024</footer>
  </div>
</template>

<style scoped>
.main-container {
  display: grid;
  grid-template-rows: 50px 1fr 30px;
  main {
    height: 90vh;
  }
  footer {
    background-color: var(--color-background);
    text-align: center;
    color: var(--color-text-secondary);
    max-height: 10vh;
  }
}
</style>
