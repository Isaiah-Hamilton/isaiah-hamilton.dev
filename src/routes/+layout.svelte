<script lang="ts">
    import "./layout.css";
    import Footer from "$lib/components/footer.svelte";
    import Navbar from "$lib/components/navbar.svelte";
    import { theme } from "$lib/theme/store.svelte";
    import { onMount } from "svelte";

    let { children } = $props();
    let mounted = $state(false);

    onMount(() => {
        theme.init();
        mounted = true;
    });
</script>

{#if mounted}
    <div class="relative">
        <Navbar />
        <main class="overflow-x-hidden">
            {@render children()}
        </main>
        <Footer />
    </div>
{/if}
