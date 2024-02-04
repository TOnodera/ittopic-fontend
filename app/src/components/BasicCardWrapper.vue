<template>
  <!-- pc -->
  <div
    class="is-desktop pl-1 pt-4 is-hidden-touch is-multiline columns wrapper is-centered"
  >
    <slot></slot>
  </div>
  <!-- sp -->
  <div
    class="is-mobile pt-0 is-hidden-desktop is-multiline columns wrapper is-centered sp"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.sp {
  margin: 0 auto;
}
.wrapper {
  width: 90%;
  margin-top: 1rem;
}
</style>
