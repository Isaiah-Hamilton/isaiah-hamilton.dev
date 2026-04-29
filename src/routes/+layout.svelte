<script lang="ts">
    import "./layout.css";
    import Footer from "$lib/components/footer.svelte";
    import Navbar from "$lib/components/navbar.svelte";

    let { children } = $props();
</script>

<div class="relative">
    <Navbar />
    <main class="overflow-x-hidden">
        {@render children()}
    </main>
    <Footer />
</div>
