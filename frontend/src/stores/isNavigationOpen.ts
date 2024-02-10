import { defineStore } from 'pinia';

export const useIsNavigationOpenStore = defineStore('isNavigationOpen', {
  state: () => {
    return { isNavigationOpen: false };
  },
  actions: {
    setIsOpen() {
      this.isNavigationOpen = true;
    },
    setIsClose() {
      this.isNavigationOpen = false;
    },
    toggle() {
      this.isNavigationOpen = !this.isNavigationOpen;
    }
  }
});
