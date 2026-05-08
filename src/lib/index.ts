// place files you want to import through the `$lib` alias in this folder.

export enum Theme {
  Dark = "dark",
  Light = "light",
  System = "system",
  RealTime = "realtime",
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
