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
//左右上下のそれぞれ端にいるかどうか、boolean
const { bottom } = toRefs(arrivedState);
// スクロールで最下部まで来た際の処理
const onScrollBottomHandler = (isBottom: boolean) => {
  if (isBottom) {
    page.value += 1;
  }
};

/**
 * データ取得
 */
watchEffect(async () => {
  // データフェッチ
  const { data } = await http.get<any, AxiosResponse<Article[]>>(
    `/topics?page=${page.value}&limit=${limit}`
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
  <div class="top" @scroll="onScrollBottomHandler(bottom)" ref="el">
    <SiteHero title="新着" subtitle="最新のトピック" />
    <BasicCardWrapper @on-scroll-bottom="console.log('arrived at bottom.')">
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
        v-on:click="openInTab(topic.url)"
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
