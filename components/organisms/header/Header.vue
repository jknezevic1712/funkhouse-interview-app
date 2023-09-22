<script setup lang="ts">
import SideMenu from '../sideMenu/SideMenu.vue';
import Image from '~/components/molecules/image/Image.vue';
</script>

<template>
  <nav class="nav">
    <Image
      image-type="link"
      :image-data="{
        src: '/logo-makemake.svg',
        alt: 'makemake logo',
        to: '/',
      }"
    />
    <p class="nav-title">Editors</p>
    <SideMenu />
  </nav>
</template>

<style>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
</style>
