import type { SkyGradient } from "./types";

export const Time = {
  midnight: 0,
  dawn: 4,
  sunrise: 6,
  noon: 12,
  sunset: 18,
  dusk: 20,
} as const;

export const SkyPresets: SkyGradient[] = [
  {
    time: Time.midnight,
    spread: 3,
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
    time: Time.sunrise,
    spread: 0.75,
    colors: [
      {
        rgb: [27, 58, 106],
        position: 0,
      },
      {
        rgb: [37, 98, 181],
        position: 25,
      },
      {
        rgb: [78, 150, 206],
        position: 50,
      },
      {
        rgb: [154, 176, 196],
        position: 62,
      },
      {
        rgb: [248, 192, 64],
        position: 78,
      },
      {
        rgb: [239, 160, 64],
        position: 88,
      },
      {
        rgb: [212, 104, 58],
        position: 100,
      },
    ],
  },
  {
    time: Time.noon,
    spread: 3,
    colors: [
      {
        rgb: [47, 111, 232],
        position: 0,
      },
      {
        rgb: [76, 142, 245],
        position: 35,
      },
      {
        rgb: [118, 175, 255],
        position: 68,
      },
      {
        rgb: [169, 204, 255],
        position: 100,
      },
    ],
  },
  {
    time: Time.sunset,
    spread: 0.75,
    colors: [
      {
        rgb: [27, 58, 106],
        position: 0,
      },
      {
        rgb: [37, 98, 181],
        position: 25,
      },
      {
        rgb: [78, 150, 206],
        position: 50,
      },
      {
        rgb: [154, 176, 196],
        position: 62,
      },
      {
        rgb: [248, 192, 64],
        position: 78,
      },
      {
        rgb: [239, 160, 64],
        position: 88,
      },
      {
        rgb: [212, 104, 58],
        position: 100,
      },
    ],
  },
];
