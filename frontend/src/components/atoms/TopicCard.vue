<script lang="ts" setup>
defineProps<{ title: string; body: string; src: string | null }>();
const emit = defineEmits(['click']);
</script>
<template>
  <v-card
    class="cursor-pointer"
    color="surface-bright"
    elevation="3"
    height="40vh"
    @click="emit('click')"
  >
    <v-card-item>
      <div>
        <v-img :src="src ? src : 'noimgurl'"></v-img>
        <div class="text-subtitle-1 mb-2 font-weight-bold">{{ title }}</div>
        <div class="text-caption text-truncate">
          {{ body }}
        </div>
      </div>
    </v-card-item>
  </v-card>
</template>
