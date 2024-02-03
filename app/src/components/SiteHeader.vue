<script lang="ts" setup>
defineProps<{
  img: string;
  title: string;
}>();
</script>
<template>
  <header>
    <!-- sp -->
    <div class="columns is-mobile is-hidden-desktop pl-5 pt-1">
      <div class="column is-1 logo mt-3 p-1 is-size-4">
        <img :src="img" :alt="title" />
      </div>
      <div class="column is-10 title p-0 pt-4 pl-1 is-size-4">{{ title }}</div>
    </div>
    <!-- pc -->
    <div class="columns is-desktop is-hidden-touch pt-1">
      <div class="column is-1 logo pl-5 pr-0">
        <img :src="img" :alt="title" />
      </div>
      <div class="column is-11 title pl-0">{{ title }}</div>
    </div>
  </header>
</template>

<style scoped>
header {
  height: 50px;
  background-color: var(--color-background);
  margin: 0 auto;
  width: 100%;
  .title {
    color: var(--color-text-secondary);
  }
  .logo {
    img {
      max-height: 40px;
    }
  }
}
</style>
