<script lang="ts" setup>
defineProps<{
  title: string;
  body: string;
  img: string;
}>();
</script>

<template>
  <!-- sp -->
  <div>
    <div class="card column is-12 is-hidden-desktop sp">
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
  </div>
  <!-- pc-->
  <div>
    <div class="card column is-3 is-hidden-touch">
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
  </div>
</template>

<style scoped>
.sp {
  width: 100%;
  margin: 0 auto;
}
.color {
  color: var(--color-text-primary);
}
</style>
