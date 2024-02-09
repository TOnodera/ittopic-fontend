<script lang="ts" setup>
defineProps<{ title: string; body: string }>();
</script>
<template>
  <v-card variant="tonal">
    <v-card-item>
      <div>
        <div class="text-overline mb-3"></div>
        <div class="text-h6 mb-1">{{ title }}</div>
        <div class="text-caption">
          {{ body }}
        </div>
      </div>
    </v-card-item>
  </v-card>
</template>
