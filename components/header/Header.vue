<template>
  <nav class="nav">
    <NuxtLink to="/">
      <img
        src="../../assets/logo-makemake.svg"
        alt="makemake logo"
      />
    </NuxtLink>
    <p>Editors</p>
    <div class="nav-side">
      <span>
        <img
          src="../../assets/logo-rps.svg"
          alt="rps"
        />
      </span>
      <span>
        <img
          src="../../assets/icon-menu.svg"
          alt="side menu"
        />
      </span>
    </div>
  </nav>
</template>

<style>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-side {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
