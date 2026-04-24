<script lang="ts">
    import "./layout.css";
    import favicon from "$lib/assets/favicon.svg";

    let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="relative">
    <nav
        class="fixed top-4 left-1/2 transform -translate-x-1/2 z-20 w-fit mx-auto border border-[#262626] rounded-full px-4 py-2 backdrop-blur-md bg-[#121212b3]"
    >
        <ul
            class="flex items-center justify-center gap-4 text-[#86868b] text-sm"
        >
            <li
                class="transition-colors duration-500 ease-out hover:text-[#ffffff]"
            >
                <a href="/">Services</a>
            </li>
            <li
                class="transition-colors duration-500 ease-out hover:text-[#ffffff]"
            >
                <a href="/about">Works</a>
            </li>
            <li
                class="transition-colors duration-500 ease-out hover:text-[#ffffff]"
            >
                <a href="/contact">Contact me</a>
            </li>
        </ul>
    </nav>
    <main class="container mx-auto">
        {@render children()}
    </main>
</div>
