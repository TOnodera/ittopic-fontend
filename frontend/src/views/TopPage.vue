<script lang="ts" setup>
import type { Article } from '@/shared/type';
import { http, sleep } from '@/utils';
import { ref, watchEffect } from 'vue';
import type { AxiosResponse } from 'axios';
import PendingComponent from '@/components/molecules/PendingComponent.vue';
import TopicCard from '@/components/atoms/TopicCard.vue';
import { onMounted } from 'vue';
import { onUnmounted } from 'vue';

// 一覧に表示するニュースデータ
const topics = ref<Article[]>();
// ページネーション
const page = ref<number>(1);
// ページネーションごとのデータ取得数
const limit = 12;
// データの読み込み完了判定
const isPending = ref<boolean>(true);
// リンククリック時の挙動
const openInTab = (url: string) => {
  window.open(url);
};
// 最下部までスクロールした時の処理
const onScrollListener = () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.scrollHeight;
  if (Math.ceil(scrollTop + windowHeight) >= fullHeight) {
    page.value += 1;
  }
};

/**
 * データ取得
 */
watchEffect(async () => {
  const skip = (page.value - 1) * limit;
  const take = limit;
  isPending.value = true;
  // データフェッチ
  const { data } = await http.get<any, AxiosResponse<Article[]>>(
    `/topics?skip=${skip}&take=${take}`
  );
  // 取得データがあればリアクティブオブジェクトを更新して再レンダリングさせる
  if (0 < data.length) {
    topics.value = topics.value ? [...topics.value, ...data] : data;
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
  <div ref="contentsElement">
    <PendingComponent :isPending="isPending" />
    <v-container class="mt-12">
      <v-row>
        <v-col v-for="topic in topics" :key="topic.id" cols="12" sm="4">
          <TopicCard
            :title="topic.ogpTitle ? topic.ogpTitle : topic.title"
            :body="topic.ogpDescription ? topic.ogpDescription : topic.content"
            :src="topic.ogpImage"
            @click="openInTab(topic.url)"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
