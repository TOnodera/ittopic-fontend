<script lang="ts" setup>
import SiteHero from '@/components/SiteHero.vue';
import BasicCard from '@/components/BasicCard.vue';
import BasicCardWrapper from '@/components/BasicCardWrapper.vue';
import type { Article } from '@/shared/type';
import { http, sleep } from '@/utils';
import { ref, watchEffect } from 'vue';
import type { AxiosResponse } from 'axios';
import PendingComponent from '@/components/PendingComponent.vue';

// 一覧に表示するニュースデータ
const topics = ref<Article[]>();
// ページネーション
const page = ref<number>(1);
// ページネーションごとのデータ取得数
const limit = 12;
// データの読み込み完了判定
const isPending = ref<boolean>(true);
// div.topのref
const el = ref<HTMLElement | null>(null);

// 最下部までスクロールした時の処理
const onScrollHandler = (target: HTMLElement) => {
  const { scrollTop, offsetHeight, scrollHeight } = target;
  const offsetTop = el.value?.offsetTop ? el.value?.offsetTop : 0;
  if (Math.ceil(scrollTop + offsetHeight + offsetTop) >= scrollHeight) {
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

const openInTab = (url: string) => {
  window.open(url);
};
</script>
<template>
  <div
    class="top"
    @scroll="(e) => onScrollHandler(e.target as HTMLElement)"
    ref="el"
  >
    <PendingComponent :is-pending="isPending" />
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
