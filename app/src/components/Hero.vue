<script lang="ts" setup>
defineProps<{
  title: string;
  subtitle: string;
}>();
</script>

<template>
  <section class="hero pt-2 pl-5 pb-2 mb-2">
    <div class="hero-body">
      <p class="title color">{{ title }}</p>
      <p class="subtitle color">{{ subtitle }}</p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  border-bottom: 1px dotted var(--color-text-primary);
  .color {
    color: var(--color-text-primary) !important;
  }
  .hero-body {
    padding: 0;
  }
}
</style>
