export type RGB = [number, number, number];

export type Gradient = Record<"dark" | "light", string>;

export interface Star {
  position: {
    x: number;
    y: number;
  };
  size: number;
  opacity: number;
}
