<script setup lang="ts">
import MenuIcon from '~/components/atoms/menuIcon/MenuIcon.vue';
import Image from '~/components/molecules/image/Image.vue';
</script>

<template>
  <div class="nav-side">
    <Image
      image-type="other"
      :image-data="{ src: '/logo-rps.svg', alt: 'rps' }"
    />
    <MenuIcon />
  </div>
</template>
