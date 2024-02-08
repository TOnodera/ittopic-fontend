<script lang="ts" setup>
defineProps<{
  img: string;
  title: string;
}>();
</script>
<template>
  <header>
    <!-- sp -->
    <div
      class="contents is-mobile is-hidden-desktop columns content mt-1 is-centered is-align-item-center"
    >
      <div class="column is-12">
        <div class="columns is-mobile is-centered is-align-items-center">
          <div class="column is-12 has-text-centered">
            <img :src="img" :alt="title" class="logo" />
            <span class="title pl-2 is-size-5">{{ title }} </span>
          </div>
        </div>
      </div>
    </div>
    <!-- pc -->
    <div
      class="contents columns is-desktop is-hidden-touch pt-1 is-centered is-align-item-center"
    >
      <div class="column is-12">
        <div class="columns is-centered is-align-items-center">
          <div class="column is-12 has-text-centered">
            <img :src="img" :alt="title" class="logo" />
            <span class="title pl-2">{{ title }}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.contents {
  min-height: 4rem;
  max-height: 10vh;
  background-color: $primary-color;
  margin: 0 auto;
  width: 100%;
  .logo {
    max-height: 40px;
    vertical-align: middle;
  }
  .title {
    color: $text-secondary;
    word-break: keep-all;
    vertical-align: middle;
  }
}
</style>
