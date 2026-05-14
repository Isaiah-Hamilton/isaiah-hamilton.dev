import type { Star } from "./types";

/**
 * Cubic Hermite smoothstep — returns a smoothed 0–1 value.
 */
function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

/**
 * Returns a 0–1 opacity for a star at the given vertical position.
 * Stars are more visible high in the sky than near the horizon.
 *
 * @param y - normalized vertical position (0–1)
 */
export function StarsOpacity(y: number): number {
  return smoothstep(1, 0.8, y);
}

export function GenerateStars(count = 1000): Star[] {
  return Array.from({ length: count }, () => ({
    position: { x: Math.random(), y: Math.random() },
    size: Math.floor(Math.random() * 2 + 2),
    opacity: Math.random() * 0.4,
  }));
}
