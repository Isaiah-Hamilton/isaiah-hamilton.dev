<script lang="ts">
    import "./layout.css";
    import { themeStore } from "$lib/theme";
    import Footer from "$lib/components/footer.svelte";
    import Navbar from "$lib/components/navbar.svelte";
    import { onMount } from "svelte";

    let { children } = $props();

    onMount(() => {
        let theme = false;
        if (typeof window !== "undefined") return;
        if (localStorage.getItem("theme") === "true") {
            themeStore.update((_: boolean) => true);
            theme = true;
        } else {
            theme = false;
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
