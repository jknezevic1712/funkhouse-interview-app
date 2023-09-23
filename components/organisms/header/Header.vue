<script setup lang="ts">
import SideMenu from '../sideMenu/SideMenu.vue';
import Image from '~/components/atoms/image/Image.vue';
</script>

<template>
  <nav class="nav">
    <NuxtLink
      class="image-container"
      to="/"
    >
      <Image
        :image-data="{
          src: '/logo-makemake.svg',
          alt: 'makemake logo',
          to: '/',
        }"
      />
    </NuxtLink>
    <p class="nav-title">Editors</p>
    <SideMenu />
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.image-container {
  cursor: pointer;
  height: 50px;
  width: 80px;
}

.nav-title {
  font-size: 18px;
}

.nav-side {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

@media (min-width: 768px) {
  .image-container {
    height: 50px;
    width: 130px;
  }
}
</style>
