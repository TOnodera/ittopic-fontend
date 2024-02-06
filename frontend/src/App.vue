<script setup lang="ts">
import img from '@/assets/img/pc.png';
import SiteHeader from '@/components/SiteHeader.vue';
import TopPage from '@/views/TopPage.vue';
</script>

<template>
  <div class="main-container container">
    <SiteHeader title="ITニュースウォッチャ" :img="img" />
    <main>
      <TopPage />
    </main>
    <footer>footer</footer>
  </div>
</template>

<style scoped>
.main-container {
  display: grid;
  grid-template-rows: 50px 1fr 30px;
  min-height: 100vh;
  footer {
    background-color: var(--color-background);
    text-align: center;
    color: var(--color-text-secondary);
  }
}
</style>
