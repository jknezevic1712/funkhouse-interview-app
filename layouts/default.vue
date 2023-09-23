<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style>
.layout {
  background-color: #000;
  min-height: 100dvh;
  padding: 1rem 2rem;
  position: relative;
  z-index: 0;
}
</style>
