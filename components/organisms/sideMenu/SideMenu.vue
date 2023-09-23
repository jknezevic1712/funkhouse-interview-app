<script setup lang="ts">
import MenuIcon from '~/components/atoms/menuIcon/MenuIcon.vue';
import Image from '~/components/atoms/image/Image.vue';
</script>

<template>
  <div class="nav-side">
    <span class="image-container">
      <Image :image-data="{ src: '/logo-rps.svg', alt: 'rps' }" />
    </span>
    <MenuIcon />
  </div>
</template>

<style scoped>
.image-container {
  height: 50px;
  width: 80px;
}

@media (min-width: 768px) {
  .image-container {
    height: 50px;
    width: 130px;
  }
}
</style>
