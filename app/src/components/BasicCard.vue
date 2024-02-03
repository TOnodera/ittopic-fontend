<script lang="ts" setup>
defineProps<{
  title: string;
  body: string;
  img: string;
}>();
</script>

<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <img :src="img" :alt="title" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <p class="title is-4 color is-size-5">{{ title }}</p>
      </div>

      <div class="content">{{ body }}</div>
    </div>
  </div>
</template>

<style scoped>
.color {
  color: var(--color-text-primary);
}
</style>
