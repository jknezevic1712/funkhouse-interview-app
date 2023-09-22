<template>
  <NuxtLayout>
    <Header />
    <HomeTemplate :data="dataValue" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import HomeTemplate from './components/templates/HomeTemplate.vue';
import Header from './components/molecules/header/Header.vue';

// types
import Data from './types/data';

const { data, pending, error } = await useFetch(
  () =>
    'https://raw.githubusercontent.com/funkhaus/technical-assessment/master/db.json'
);

const dataValue: Data = JSON.parse(data.value as string);

// console.log('data ', data.value);
// console.log('pending ', pending.value);
// console.log('error ', error.value);
</script>
