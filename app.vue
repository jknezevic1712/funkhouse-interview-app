<script setup lang="ts">
import HomeTemplate from './components/templates/HomeTemplate.vue';
import Header from './components/organisms/header/Header.vue';

// types
import { Data } from './types/data';

const {
  data: apiData,
  pending,
  error,
} = await useFetch(
  () =>
    'https://raw.githubusercontent.com/funkhaus/technical-assessment/master/db.json'
);

const data: Data = JSON.parse(apiData.value as string);

useSeoMeta({
  title: { textContent: data.siteMeta.title },
  ogTitle: data.siteMeta.title,
  description: data.siteMeta.description,
  ogDescription: data.siteMeta.description,
  ogImageUrl: data.siteMeta.thumbnail,
  twitterImage: data.siteMeta.thumbnail,
});
</script>

<template>
  <NuxtLayout>
    <Header />
    <HomeTemplate :data="data" />
  </NuxtLayout>
</template>
