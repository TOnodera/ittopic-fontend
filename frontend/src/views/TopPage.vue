<script lang="ts" setup>
import BasicCard from '@/components/atoms/BasicCard.vue';
</script>
<template>
  <v-container class="mt-12">
    <v-row>
      <v-col v-for="n in 10" :key="n" cols="12" sm="4">
        <BasicCard title="test" body="body" />
      </v-col>
    </v-row>
  </v-container>
</template>
