<script lang="ts" setup>
import SiteHero from '@/components/SiteHero.vue';
import BasicCard from '@/components/BasicCard.vue';
import BasicCardWrapper from '@/components/BasicCardWrapper.vue';
import type { Article } from '@/shared/type';
import { http } from '@/utils';
import { ref, watchEffect } from 'vue';
import type { AxiosResponse } from 'axios';

const topics = ref<Article[]>();
watchEffect(async () => {
  const { data } = await http.get<any, AxiosResponse<Article[]>>('/topics');
  topics.value = data;
});
const openInTab = (url: string) => {
  window.open(url);
};
</script>
<template>
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
      v-on:click="openInTab(topic.url)"
    />
  </BasicCardWrapper>
</template>
