export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export enum Theme {
  Dark = "dark",
  Light = "light",
  System = "system",
  RealTime = "realtime",
}
