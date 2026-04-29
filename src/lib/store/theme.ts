import { browser } from "$app/environment";
import { writable, type Subscriber, type Unsubscriber } from "svelte/store";

export class ThemeStore {
  private store = writable(false);

  init() {
    if (!browser) return;
    const theme = localStorage.getItem("theme") === "true";
    document.documentElement.classList.toggle("dark", theme);
    this.store.set(theme);
  }

  subscribe(run: Subscriber<boolean>): Unsubscriber {
    return this.store.subscribe(run);
  }

  set(theme: boolean) {
    if (!browser) return;
    localStorage.setItem("theme", String(theme));
    document.documentElement.classList.toggle("dark", theme);
    this.store.set(theme);
  }

  toggle() {
    this.store.update((current) => {
      const next = !current;
      if (browser) {
        localStorage.setItem("theme", String(next));
        document.documentElement.classList.toggle("dark", next);
      }
      return next;
    });
  }
}

export const themeStore = new ThemeStore();
