<script setup lang="ts">
import Hero from '@/components/Hero.vue';
import BasicCard from '@/components/BasicCard.vue';
import BasicCardWrapper from '@/components/BasicCardWrapper.vue';
</script>

<template>
  <div class="main-container">
    <header>
      <h1 class="title mt-1 ml-5">新着トピック</h1>
    </header>
    <main>
      <Hero title="新着" subtitle="最新のトピック" />
      <BasicCardWrapper>
        <div class="column is-3">
          <BasicCard
            title="title"
            body="body"
            img="https://bulma.io/images/placeholders/1280x960.png"
          />
        </div>
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
  header {
    background-color: var(--color-background);
    .title {
      color: var(--color-text-secondary);
    }
  }
  footer {
    background-color: var(--color-background);
    text-align: center;
    color: var(--color-text-secondary);
  }
}
</style>
