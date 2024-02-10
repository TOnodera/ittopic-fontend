import { defineStore } from 'pinia';

export const useCounterStore = defineStore('isNavigationOpen', {
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
