<script setup lang="ts">
const props = defineProps<{
  imageData: {
    src: string;
    alt: string;
    caption?: string;
    to?: string;
  };
  wrapWithFigure?: boolean;
}>();

const { imageData, wrapWithFigure } = props;
</script>

<template>
  <figure v-if="wrapWithFigure">
    <img
      :src="imageData.src"
      :alt="imageData.alt"
      class="image"
    />
    <figcaption v-if="imageData.caption">{{ imageData.caption }}</figcaption>
  </figure>

  <img
    :src="imageData.src"
    :alt="imageData.alt"
    class="image"
    v-else
  />
</template>

<style>
.image {
  height: inherit;
  width: inherit;
}

.link {
  cursor: pointer;
}

.image-link {
  height: 50px;
  width: 80px;
}

.image-menu {
  cursor: pointer;
  height: 20px;
  width: 25px;
}

.image-card {
  height: 25dvh;
  width: 75dvw;
}

@media (min-width: 768px) {
  .image-link {
    height: 75px;
    width: 125px;
  }

  .image-menu {
    height: 30px;
    width: 30px;
  }

  .image-card {
    height: 40dvh;
    width: 80dvw;
  }
}

@media (min-width: 1440px) {
  .image-card {
    height: 80dvh;
    width: 80dvw;
  }
}

@media (min-width: 1920px) {
  .image-link {
    height: 90px;
    width: 150px;
  }

  .image-menu {
    height: 35px;
    width: 35px;
  }

  .image-card {
    height: 80dvh;
    width: 80dvw;
  }
}
</style>
