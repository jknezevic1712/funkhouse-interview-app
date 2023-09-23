import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    openMenu: false,
  }),
  actions: {
    setOpenMenu() {
      this.openMenu = !this.openMenu;
    },
  },
});
