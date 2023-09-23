<script setup lang="ts">
// types
import { DataImage, Page } from '~/types/data';

const props = defineProps<{
  page: Page;
  images: DataImage[];
}>();

const { page: pageData, images } = props;

const allImages = [pageData.featuredImage, ...images];

let showSlideshow = ref(false);
let currentSlideshowImage = ref(0);
let interval: NodeJS.Timeout;

function startSlideshow() {
  if (interval && showSlideshow.value) {
    return;
  }

  showSlideshow.value = true;

  interval = setInterval(handleSlideshowImages, 3000);
}

function stopSlideshow() {
  if (interval) {
    clearInterval(interval);
  }

  showSlideshow.value = false;
}

function handleSlideshowImages() {
  if (showSlideshow.value) {
    if (currentSlideshowImage.value === allImages.length) {
      return (currentSlideshowImage.value = 0);
    }

    return currentSlideshowImage.value++;
  }

  return;
}
</script>

<template>
  <div class="slideshow_card">
    <p
      class="slideshow_card-author_name"
      @mouseenter="startSlideshow()"
      @mouseleave="stopSlideshow()"
    >
      {{ pageData.title }}
    </p>

    <Transition name="cross-fade">
      <div
        class="slideshow_card-images-inner_container"
        v-if="showSlideshow"
      >
        <div
          class="slideshow_card-image"
          v-bind:style="{
            'background-image':
              'url(' + allImages[currentSlideshowImage].src + ')',
          }"
          v-bind:key="allImages[currentSlideshowImage].id"
        ></div>
      </div>
    </Transition>
  </div>
</template>

<style>
.slideshow_card {
  width: 100%;
  height: 75px;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.slideshow_card-author_name {
  font-size: 24px;
  padding: 0.5rem;
}

.slideshow_card-images-outer_container {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100dvh;
  min-width: 100dvw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
}

.slideshow_card-images-inner_container {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100dvh;
  min-width: 100dvw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
}

.slideshow_card-image {
  height: 25dvh;
  width: 75dvw;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

@media (min-width: 768px) {
  .slideshow_card-image {
    height: 40dvh;
    width: 80dvw;
  }
}

@media (min-width: 1440px) {
  .slideshow_card-image {
    height: 80dvh;
    width: 80dvw;
  }
}

@media (min-width: 1920px) {
  .slideshow_card-image {
    height: 80dvh;
    width: 80dvw;
  }
}

/* transition animation */
.cross-fade-enter-active,
.cross-fade-leave-active {
  transition: opacity 0.25s ease-in-out;
}

.cross-fade-enter-from,
.cross-fade-leave-to {
  opacity: 0;
}
</style>
