import { defineStore } from "pinia";

export const useToastStore = defineStore("store", {
  state: () => ({
    toasts: [],
  }),
  getters: {},
  actions: {
    addToast(title, description) {
      const newToast = new Toast(Date.now(), title, description);
      this.toasts.push(newToast);
      const timer = setTimeout(() => {
        this.closeToast(newToast.id);
      }, 5000);
      newToast.timer = timer;
    },
    removeToast(id) {
      const index = this.toasts.findIndex((toast) => toast.id === id);
      if (index !== -1) {
        this.toasts.splice(index, 1);
      }
    },
    closeToast(id) {
      const index = this.toasts.findIndex((toast) => toast.id === id);
      if (index !== -1) {
        clearTimeout(this.toasts[index].timer);
        this.toasts.splice(index, 1);
      }
    },
  },
});
