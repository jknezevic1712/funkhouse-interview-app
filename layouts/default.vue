<template>
  <div class="layout">
    <Header />
    <slot />
  </div>
</template>

<style>
html {
  font-family: 'RM Neue';
}

.layout {
  background-color: #000;
  /* min-height: 100dvh; */
  /* height: 100%; */
  /* width: 100%; */
  padding: 2rem;

  .text {
    font-size: 24px;
  }

  .nav-title {
    font-size: 18px;
  }
}

h1,
h2,
h3,
p,
span {
  color: #fdc760;
}
</style>
