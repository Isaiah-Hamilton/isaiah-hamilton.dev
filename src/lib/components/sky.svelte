<script lang="ts">
    import { GenerateSkyGradient, GenerateStars, StarsOpacity } from "$lib/sky";
    import type { ColorStop, Star } from "$lib/sky/types";

    let { theme, innerWidth, innerHeight, children } = $props();

    let skyGradient = $derived(GenerateSkyGradient(theme));

    let gradient = $derived.by(() => {
        const stops = skyGradient
            .map((s: ColorStop) => `rgb(${s.rgb.join(", ")}) ${s.position}%`)
            .join(", ");
        return `linear-gradient(to bottom, ${stops})`;
    });

    let stars = $state<Star[]>([]);

    $effect(() => {
        stars = theme ? GenerateStars() : [];
    });
</script>

<div class="relative h-screen" style="background: {gradient}">
    {#each stars as star}
        <div
            class="absolute rounded-full bg-white"
            style="left: {star.position.x * innerWidth}px; top: {star.position
                .y *
                innerHeight}px; width: {star.size}px; height: {star.size}px; opacity: {star.opacity *
                StarsOpacity(star.position.y)};"
        ></div>
    {/each}
    {@render children()}
</div>
