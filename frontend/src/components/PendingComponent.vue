<script lang="ts" setup>
import PackMan from './PackMan.vue';

defineProps<{ isPending: boolean }>();
</script>
<template>
  <div class="wrapper" :class="isPending ? 'block' : 'none'">
    <div class="contents">
      <div class="content">
        <PackMan />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  position: absolute;
  top: 0;
  z-index: 9999;
  .contents {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    transition: all 2s;
  }
}
.none {
  display: none;
}
.block {
  display: block;
}
</style>
