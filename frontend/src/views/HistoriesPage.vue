<script lang="ts" setup>
import type { AppHistories } from '@/shared/type';
import { http } from '@/utils';
import type { AxiosResponse } from 'axios';
import { ref } from 'vue';
import { watchEffect } from 'vue';
import { toDate, toTime } from '@/utils';

// テーブルヘッダー
const headers = [
  {
    title: 'Name',
    value: 'name_ja'
  },
  {
    title: 'Success',
    value: 'requestsFinished'
  },
  {
    title: 'Failed',
    value: 'requestsFailed'
  },
  {
    title: 'Total Request Time (ms)',
    value: 'crawlerRuntimeMillis'
  },
  {
    title: 'Crawler Runtime (ms)',
    value: 'crawlerRuntimeMillis'
  }
];

// 履歴データ
const histories = ref<AppHistories[]>([]);

watchEffect(async () => {
  const { data } = await http.get<any, AxiosResponse<AppHistories[], any>>(
    '/histories'
  );
  histories.value = data;
});
</script>

<template>
  <v-container class="mt-12">
    <v-row>
      <v-col>
        <h2 class="mb-2">クローリング履歴</h2>
        <v-divider />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-timeline side="end">
          <v-timeline-item
            v-for="history in histories"
            :key="history.id"
            dot-color="surface"
            size="small"
          >
            <template v-slot:opposite>
              <p class="text-caption font-weight-bold">
                {{ toDate(history.startAt) }}
              </p>
              <p class="text-caption font-weight-bold">
                {{ toTime(history.startAt) }}
              </p>
            </template>
            <v-card color="surface-bright" elevation="4">
              <v-card-item>
                <v-data-table
                  style="background-color: rgb(var(--v-theme-surface-bright))"
                  :headers="headers"
                  :items="
                    history.CrawlerStats.map((val) => {
                      console.log({ ...val, name_ja: val.Site.name_ja });
                      return { ...val, name_ja: val.Site.name_ja };
                    })
                  "
                >
                  <template #bottom></template>
                </v-data-table>
                <v-divider />
                <v-container>
                  <v-row justify="end">
                    <v-col cols=""
                      ><span class="text-caption font-weight-bold"
                        >開始時刻 {{ toTime(history.startAt) }}</span
                      ><span class="text-caption ml-2 font-weight-bold"
                        >終了時刻 {{ toTime(history.endAt) }}</span
                      ></v-col
                    >
                  </v-row>
                </v-container>
              </v-card-item>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col></v-row
    ></v-container
  >
</template>
