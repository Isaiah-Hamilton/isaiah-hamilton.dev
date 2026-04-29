<script lang="ts">
    import "./layout.css";
    import { themeStore } from "$lib/store/theme";
    import Footer from "$lib/components/footer.svelte";
    import Navbar from "$lib/components/navbar.svelte";
    import { onMount } from "svelte";

    let { children } = $props();

    onMount(() => {
        themeStore.init();
    });
</script>

<div class="relative">
    <Navbar />
    <main class="overflow-x-hidden">
        {@render children()}
    </main>
    <Footer />
</div>
