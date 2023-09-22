<template>
  <nav class="nav">
    <NuxtLink to="/">
      <img
        src="../../../assets/logo-makemake.svg"
        alt="makemake logo"
        class="nav-image"
      />
    </NuxtLink>
    <p class="nav-title">Editors</p>
    <div class="nav-side">
      <span>
        <img
          src="../../../assets/logo-rps.svg"
          alt="rps"
          class="nav-image"
        />
      </span>
      <span>
        <img
          src="../../../assets/icon-menu.svg"
          alt="side menu"
          class="nav-menu"
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

.nav-title {
  font-size: 18px;
}

.nav-side {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.nav-image {
  height: 50px;
  width: 80px;
}

.nav-menu {
  cursor: pointer;
  height: 20px;
  width: 25px;
}

@media (min-width: 768px) {
  .nav-image {
    height: 75px;
    width: 125px;
  }

  .nav-menu {
    height: 30px;
    width: 30px;
  }
}

@media (min-width: 1920px) {
  .nav-image {
    height: 90px;
    width: 150px;
  }

  .nav-menu {
    height: 35px;
    width: 35px;
  }
}
</style>
