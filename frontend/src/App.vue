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

<style scoped lang="scss">
.main-container {
  display: grid;
  grid-template-rows: 10vh 1fr 5vh;
  max-width: 100vw;
  main {
    height: 85vh;
  }
  footer {
    background-color: $primary-color;
    text-align: center;
    color: $text-secondary;
    height: 10vh;
  }
}
</style>
