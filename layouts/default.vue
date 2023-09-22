<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style>
html {
  font-family: 'RM Neue';
  overflow: hidden;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.layout {
  background-color: #000;
  min-height: 100dvh;
  padding: 1rem 2rem;
  position: relative;
  z-index: 0;
}

h1,
h2,
h3,
p,
span {
  color: #fdc760;
}
</style>
