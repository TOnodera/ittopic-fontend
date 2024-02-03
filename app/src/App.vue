<script setup lang="ts">
import SiteHero from '@/components/SiteHero.vue';
import BasicCard from '@/components/BasicCard.vue';
import BasicCardWrapper from '@/components/BasicCardWrapper.vue';
import img from '@/assets/img/pc.png';
import SiteHeader from './components/SiteHeader.vue';
</script>

<template>
  <div class="main-container container">
    <SiteHeader title="ITニュースウォッチャ" :img="img" />
    <main>
      <SiteHero title="新着" subtitle="最新のトピック" />
      <BasicCardWrapper>
        <BasicCard
          title="title"
          body="body"
          img="https://bulma.io/images/placeholders/1280x960.png"
        />
      </BasicCardWrapper>
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
