<script lang="ts">
    import "./layout.css";
    import Footer from "$lib/components/footer.svelte";
    import Navbar from "$lib/components/navbar.svelte";
    import ThemeProvider from "$lib/theme/provider.svelte";

    let { children } = $props();
</script>

<ThemeProvider>
    <div class="relative">
        <Navbar />
        <main class="overflow-x-hidden">
            {@render children()}
        </main>
        <Footer />
    </div>
</ThemeProvider>
