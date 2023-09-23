<script setup lang="ts">
import { useAppStore } from '~/store/appStore';
import { storeToRefs } from 'pinia';

const appStore = useAppStore();
const openMenu = storeToRefs(appStore).openMenu;

function handleOpenMenu() {
  appStore.setOpenMenu();
}
</script>

<template>
  <div
    class="hamburger-lines"
    :class="{ 'transform-hamburger-lines': openMenu }"
    @click="handleOpenMenu"
  >
    <span
      class="line line-1"
      :class="{ 'transform-line-1': openMenu }"
    ></span>
    <span
      class="line line-2"
      :class="{ 'transform-line-2': openMenu }"
    ></span>
  </div>
</template>

<style>
.hamburger-lines {
  cursor: pointer;
  display: block;
  height: 26px;
  width: 25px;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: center;
  transition: all 150ms ease-in-out;
}

.hamburger-lines .line {
  display: block;
  height: 3px;
  width: 100%;
  border-radius: 10px;
  background: #fdc760;
}

.hamburger-lines .line-1 {
  transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;
}

.hamburger-lines .line-2 {
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
}

.transform-hamburger-lines {
  gap: 1.2rem;
}

.transform-line-1 {
  transform: rotate(45deg);
}

.transform-line-2 {
  transform: rotate(-45deg);
}

@media (min-width: 768px) {
  .hamburger-lines {
    width: 32px;
  }
}
</style>
