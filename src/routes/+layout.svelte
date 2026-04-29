<script lang="ts">
    import "./layout.css";
    import { themeStore, theme } from "$lib/theme";
    import Footer from "$lib/components/footer.svelte";
    import Navbar from "$lib/components/navbar.svelte";
    import { onMount } from "svelte";

    let { children } = $props();

    onMount(() => {
        if (typeof window !== "undefined") return;
        if (localStorage.getItem("theme") === "true") {
            themeStore.update((_: boolean) => true);
        }
        document.documentElement.classList.toggle("dark", theme);
    });
</script>

<div class="relative">
    <Navbar />
    <main class="overflow-x-hidden">
        {@render children()}
    </main>
    <Footer />
</div>
