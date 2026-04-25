<script lang="ts">
    import { GenerateSkyGradient, GenerateStars, StarsOpacity } from "$lib/sky";
    import { Time } from "$lib/sky/preset";
    import type { ColorStop, Star } from "$lib/sky/types";

    let { time, innerWidth, innerHeight, children } = $props();

    let isNight = $derived<boolean>(
        time <= Time.sunrise || time >= Time.sunset,
    );

    let skyGradient = $derived(GenerateSkyGradient(time));

    let gradient = $derived.by(() => {
        const stops = skyGradient
            .map((s: ColorStop) => `rgb(${s.rgb.join(", ")}) ${s.position}%`)
            .join(", ");
        return `linear-gradient(to bottom, ${stops})`;
    });

    let stars = $state<Star[]>([]);

    $effect(() => {
        stars = isNight ? GenerateStars() : [];
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
