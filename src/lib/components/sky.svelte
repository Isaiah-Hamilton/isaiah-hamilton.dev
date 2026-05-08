<script lang="ts">
    import { onMount } from "svelte";
    import { GenerateSkyGradient, GenerateStars, StarsOpacity } from "$lib/sky";
    import type { ColorStop, Star } from "$lib/sky/types";
    import { sleep } from "$lib";

    let { theme, innerWidth, innerHeight, children } = $props();

    let isMounted = $state(false);

    let skyGradient = $derived(GenerateSkyGradient(theme));

    let gradient = $derived.by(() => {
        const stops = skyGradient
            .map((s: ColorStop) => `rgb(${s.rgb.join(", ")}) ${s.position}%`)
            .join(", ");

        return `linear-gradient(to bottom, ${stops})`;
    });

    let stars = $state<Star[]>([]);

    onMount(async () => {
        await sleep(1); // wait for the component to mount
        isMounted = true;
    });

    $effect(() => {
        stars = theme ? GenerateStars() : [];
    });
</script>

<div class="relative h-screen overflow-hidden">
    <div
        class="pointer-events-none absolute inset-0 transition-opacity duration-700 ease-out"
        style="background: {gradient}; opacity: {isMounted ? 1 : 0};"
    ></div>

    {#each stars as star}
        <div
            class="pointer-events-none absolute rounded-full bg-white transition-opacity duration-700 ease-out"
            style="left: {star.position.x * innerWidth}px; top: {star.position
                .y *
                innerHeight}px; width: {star.size}px; height: {star.size}px; opacity: {(isMounted
                ? 1
                : 0) *
                star.opacity *
                StarsOpacity(star.position.y)};"
        ></div>
    {/each}

    <div class="relative z-10 h-full">
        {@render children()}
    </div>
</div>
