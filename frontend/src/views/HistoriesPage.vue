<script lang="ts" setup>
import type { AppHistories } from '@/shared/type';
import { http, sleep } from '@/utils';
import type { AxiosResponse } from 'axios';
import { ref } from 'vue';
import { watchEffect } from 'vue';
import { toDate, toTime } from '@/utils';
import { onMounted } from 'vue';
import { onUnmounted } from 'vue';
import PendingComponent from '@/components/molecules/PendingComponent.vue';

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
    title: 'Total Duration (ms)',
    value: 'requestTotalDurationMillis'
  },
  {
    title: 'Crawler Runtime (ms)',
    value: 'crawlerRuntimeMillis'
  }
];
// ページネーション
const page = ref<number>(1);
// ページネーションごとのデータ取得数
const limit = 10;
// データの読み込み完了判定
const isPending = ref<boolean>(true);
// サーバー側にさらに取得できるデータがあるかチェック
let isMoreData = true;
// 最下部までスクロールした時の処理
const onScrollListener = () => {
  if (!isMoreData) {
    return;
  }

  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.scrollHeight;
  if (Math.ceil(scrollTop + windowHeight) >= fullHeight) {
    page.value += 1;
  }
};

// 履歴データ
const histories = ref<AppHistories[]>([]);

watchEffect(async () => {
  const skip = (page.value - 1) * limit;
  const take = limit;
  isPending.value = true;
  const { data } = await http.get<any, AxiosResponse<AppHistories[], any>>(
    `/histories?skip=${skip}&take=${take}`
  );
  isMoreData = 0 < data.length;
  if (isMoreData) {
    histories.value = [...histories.value, ...data];
  }
  await sleep(1000);
  isPending.value = false;
});

onMounted(() => {
  window.addEventListener('scroll', onScrollListener);
});
onUnmounted(() => {
  window.removeEventListener('scroll', onScrollListener);
});
</script>

<template>
  <PendingComponent :is-pending="isPending" />
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
                      return { ...val, name_ja: val.Site.name_ja };
                    })
                  "
                >
                  <template #bottom></template>
                </v-data-table>
                <v-divider />
                <v-container>
                  <v-row justify="end">
                    <v-col cols="12"
                      ><span
                        class="text-caption mr-2 font-weight-bold text-no-wrap"
                        >開始時刻 {{ toTime(history.startAt) }}</span
                      ><span class="text-caption font-weight-bold text-no-wrap"
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
