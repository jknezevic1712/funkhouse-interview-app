<script setup lang="ts">
// types
import { Data } from '~/types/data';
// components
import SlideshowCard from '../molecules/slideshowCard/SlideshowCard.vue';

const props = defineProps<{
  data: Data;
}>();
const { data } = props;

// SEO
useSeoMeta({
  title: { textContent: data.page.title },
  ogTitle: data.page.title,
});
</script>

<template>
  <div class="home-slideshow">
    <SlideshowCard
      v-for="(page, idx) in data.pages"
      :key="idx"
      :page="page"
      :images="data.images"
    />
  </div>
</template>

<style>
.home-slideshow {
  display: grid;
  grid-template-columns: 1fr;
  padding: 2rem;
  gap: 1rem;
}

@media (min-width: 1024px) {
  .home-slideshow {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    gap: 1.5rem 3rem;
  }
}
</style>
