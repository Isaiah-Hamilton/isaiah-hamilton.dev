<script lang="ts">
    import { theme } from "$lib/theme/store.svelte";
    import { gradients } from "./gradients";
    import { GenerateStars, StarsOpacity } from "./stars";
    import type { Star } from "./types";

    let { innerWidth, innerHeight, children } = $props();

    let gradient = $state();
    let stars: Star[] = $state([]);

    $effect(() => {
        gradient = theme.get() === "dark" ? gradients.dark : gradients.light;
        stars = theme.get() === "dark" ? GenerateStars() : [];
    });
</script>

<div class="relative h-screen overflow-hidden">
    <div
        class="pointer-events-none absolute inset-0 transition-opacity duration-700 ease-out"
        style="background: {gradient};"
    ></div>

    {#each stars as star}
        <div
            class="pointer-events-none absolute rounded-full bg-white transition-opacity duration-700 ease-out"
            style="left: {star.position.x * innerWidth}px; top: {star.position
                .y *
                innerHeight}px; width: {star.size}px; height: {star.size}px; opacity: {star.opacity *
                StarsOpacity(star.position.y)};"
        ></div>
    {/each}

    <div class="relative z-10 h-full">
        {@render children()}
    </div>
</div>
