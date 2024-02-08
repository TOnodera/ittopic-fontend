<script lang="ts" setup>
import SiteHero from '@/components/SiteHero.vue';
import BasicCard from '@/components/BasicCard.vue';
import BasicCardWrapper from '@/components/BasicCardWrapper.vue';
import type { Article } from '@/shared/type';
import { http } from '@/utils';
import { ref, toRefs, watchEffect } from 'vue';
import type { AxiosResponse } from 'axios';
import { useScroll } from '@vueuse/core';

// 一覧に表示するニュースデータ
const topics = ref<Article[]>();
// ページネーション
const page = ref<number>(1);
// ページネーションごとのデータ取得数
const limit = 12;

/**
 *  最下部までスクロールしたかどうかを検出するための処理
 */
const el = ref<HTMLElement | null>(null);
const { arrivedState } = useScroll(el);
const { bottom } = toRefs(arrivedState);
// スクロール時の処理
const onScrollHandler = (isBottom: boolean) => {
  // 最下部まできたらページ+1
  if (isBottom) {
    page.value += 1;
  }
};

/**
 * データ取得
 */
watchEffect(async () => {
  const skip = (page.value - 1) * limit;
  const take = limit;
  // データフェッチ
  const { data } = await http.get<any, AxiosResponse<Article[]>>(
    `/topics?skip=${skip}&take=${take}`
  );
  // 取得データがあればリアクティブオブジェクトを更新して再レンダリングさせる
  if (0 < data.length) {
    topics.value = topics.value ? [...topics.value, ...data] : data;
  }
});

const openInTab = (url: string) => {
  window.open(url);
};
</script>
<template>
  <div class="top" @scroll="onScrollHandler(bottom)" ref="el">
    <SiteHero title="新着" subtitle="最新のトピック" />
    <BasicCardWrapper>
      <BasicCard
        v-for="topic in topics"
        :title="topic.ogpTitle ? topic.ogpTitle : topic.title"
        :body="topic.ogpDescription ? topic.ogpDescription : topic.content"
        :img="
          topic.ogpImage
            ? topic.ogpImage
            : 'https://bulma.io/images/placeholders/1280x960.png'
        "
        :key="topic.id"
        @click="openInTab(topic.url)"
      />
    </BasicCardWrapper>
  </div>
</template>

<style scoped>
.top {
  overflow-y: scroll;
  height: 90vh;
}
</style>
