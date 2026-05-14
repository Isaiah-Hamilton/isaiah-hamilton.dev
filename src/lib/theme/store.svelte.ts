import { browser } from "$app/environment";

let current = $state();

export const theme = {
  dom: {
    apply() {
      if (!browser) return;
      document.documentElement.classList.toggle("dark", current === "dark");
    },
  },

  get() {
    return current;
  },

  init() {
    if (!browser) return;
    let saved = localStorage.getItem("theme");
    if (saved) this.set(saved);
    else this.set("light");
  },

  set(value: string) {
    current = value;
    if (!browser) return;
    this.dom.apply();
    this.storage.set(value);
  },

  storage: {
    get() {
      if (!browser) return;
      return localStorage.getItem("theme");
    },

    set(value: string) {
      if (!browser) return;
      localStorage.setItem("theme", value);
    },
  },

  toggle() {
    if (current === "dark") {
      this.set("light");
    } else {
      this.set("dark");
    }
  },
};
