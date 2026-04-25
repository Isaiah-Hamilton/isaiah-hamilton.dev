export type RGB = [number, number, number];

export interface SkyGradient {
  time: number;
  spread: number;
  colors: ColorStop[];
}

export interface ColorStop {
  rgb: RGB;
  position: number;
}

export interface Star {
  position: {
    x: number;
    y: number;
  };
  size: number;
  opacity: number;
}
