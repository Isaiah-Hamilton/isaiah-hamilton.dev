import { SkyPresets, Time } from "./preset";
import type { RGB, ColorStop, Star } from "./types";

function clamp(value: number, min = 0, max = 1): number {
  return Math.max(min, Math.min(max, value));
}

/**
 * Cubic Hermite smoothstep — returns a smoothed 0–1 value.
 */
function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

/**
 * Linearly interpolates two RGB colors based on a blend factor.
 */
function lerpColor(start: RGB, end: RGB, blend: number): RGB {
  return [
    start[0] + (end[0] - start[0]) * blend,
    start[1] + (end[1] - start[1]) * blend,
    start[2] + (end[2] - start[2]) * blend,
  ];
}

/**
 * Gaussian bell curve — returns 0–1 weight.
 * sigma controls how wide the transition window is (in hours).
 */
function gaussian(delta: number, sigma: number): number {
  return Math.exp(-(delta * delta) / (2 * sigma * sigma));
}

/**
 * Samples a gradient at a given position by interpolating the two nearest color stops.
 */
function sampleGradient(stops: ColorStop[], pos: number): RGB {
  if (pos <= stops[0].position) return stops[0].rgb;
  if (pos >= stops[stops.length - 1].position)
    return stops[stops.length - 1].rgb;

  for (let i = 0; i < stops.length - 1; i++) {
    const current = stops[i];
    const next = stops[i + 1];
    if (pos >= current.position && pos <= next.position) {
      const t = (pos - current.position) / (next.position - current.position);
      return lerpColor(current.rgb, next.rgb, t);
    }
  }
  return stops[stops.length - 1].rgb;
}

/**
 * Circular distance between two times on a 24h clock (in hours).
 */
function circularDelta(a: number, b: number): number {
  const diff = Math.abs(a - b) % 24;
  return diff > 12 ? 24 - diff : diff;
}

/**
 * Returns an array of interpolated ColorStops for the current hour.
 *
 * @param hour     - current decimal hour (e.g. 6.5 = 6:30 AM)
 * @param steps    - number of output color stops (default 8)
 */
export function GenerateSkyGradient(hour: number, steps = 8): ColorStop[] {
  // Compute raw gaussian weight for each preset
  const weights = SkyPresets.map((p) => ({
    preset: p,
    weight: gaussian(circularDelta(hour, p.time), p.spread),
  }));

  const totalWeight = weights.reduce((s, w) => s + w.weight, 0);

  // Build output stops at evenly distributed positions 0–100
  return Array.from({ length: steps }, (_, i) => {
    const position = (i / (steps - 1)) * 100;

    // For each position, sample every preset's gradient then blend by weight
    let r = 0,
      g = 0,
      b = 0;
    for (const { preset, weight } of weights) {
      const sampled = sampleGradient(preset.colors, position);
      const t = weight / totalWeight;
      r += sampled[0] * t;
      g += sampled[1] * t;
      b += sampled[2] * t;
    }

    return { rgb: [r, g, b], position };
  });
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
