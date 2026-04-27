import type { SkyGradient } from "./types";

export const SkyPresets: SkyGradient[] = [
  {
    theme: "dark",
    colors: [
      {
        rgb: [2, 6, 12],
        position: 0,
      },
      {
        rgb: [2, 5, 10],
        position: 28,
      },
      {
        rgb: [1, 3, 7],
        position: 62,
      },
      {
        rgb: [0, 0, 0],
        position: 100,
      },
    ],
  },
  {
    theme: "light",
    colors: [
      {
        rgb: [47, 111, 232],
        position: 0,
      },
      {
        rgb: [82, 150, 246],
        position: 30,
      },
      {
        rgb: [145, 194, 255],
        position: 62,
      },
      {
        rgb: [214, 232, 255],
        position: 84,
      },
      {
        rgb: [255, 255, 255],
        position: 100,
      },
    ],
  },
];
