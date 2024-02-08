<script lang="ts" setup>
defineProps<{
  title: string;
  body: string;
  img: string;
}>();
defineEmits(['click']);
</script>

<template>
  <!-- sp -->
  <div class="card column is-12 is-hidden-desktop sp" @click="$emit('click')">
    <div class="card-image">
      <figure class="image">
        <img :src="img" :alt="title" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <p class="title is-4 color is-size-5">{{ title }}</p>
      </div>

      <div class="omission">{{ body }}</div>
    </div>
  </div>
  <!-- pc-->
  <div class="card column is-3 is-hidden-touch m-4 pc" @click="$emit('click')">
    <div class="card-image">
      <figure class="image">
        <img :src="img" :alt="title" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <p class="title is-4 color is-size-5">{{ title }}</p>
      </div>
      <div class="omission">{{ body }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sp {
  width: 100%;
  margin: 0 auto;
  cursor: pointer;
}
.pc {
  cursor: pointer;
}
.color {
  color: var(--color-text-primary);
}
.omission {
  overflow: hidden;
  max-height: 12rem;
}
</style>
