<script setup lang="ts">
// types
import { Page } from '~/types/data';
// components
import Image from '~/components/molecules/image/Image.vue';

const props = defineProps<{
  page: Page;
}>();

const { page: pageData } = props;

let showImage = ref(false);

function handleShowingImage() {
  if (showImage.value) {
    showImage.value = false;
    return;
  }

  showImage.value = true;
  return;
}
</script>

<template>
  <div class="card">
    <p
      @mouseenter="handleShowingImage()"
      @mouseleave="handleShowingImage()"
    >
      {{ pageData.title }}
    </p>
    <div
      v-if="showImage"
      class="card-image-wrapper"
    >
      <div class="card-image-inner">
        <Image
          image-type="card"
          :image-data="{
            src: pageData.featuredImage.src,
            alt: pageData.featuredImage.altText,
            caption: pageData.featuredImage.caption,
          }"
        />
      </div>
    </div>
  </div>
</template>

<style>
.card {
  width: 100%;
  height: 75px;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.card > p {
  font-size: 24px;
}

.card-image-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100dvh;
  min-width: 100dvw;
  overflow: hidden;
  display: flex;
  z-index: -1;
}

.card-image-inner {
  margin: auto;
}
</style>
