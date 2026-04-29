import { get, writable } from "svelte/store";

export const themeStore = writable<boolean>(false);

export let theme = get(themeStore);
