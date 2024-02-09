<script lang="ts" setup>
import PackMan from '@/components/atoms/PackMan.vue';

defineProps<{ isPending: boolean }>();
</script>
<template>
  <div class="text-center">
    <v-overlay :model-value="isPending" class="align-center justify-center">
      <PackMan />
    </v-overlay>
  </div>
</template>

<style scoped lang="scss">
.none {
  display: none;
}
.block {
  display: block;
}
</style>
