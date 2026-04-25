<script lang="ts">
    import "./layout.css";
    import { Theme } from "$lib";
    import favicon from "$lib/assets/favicon.svg";

    let { children } = $props();

    let theme = $state<Theme>(Theme.Dark);

    function toggleTheme() {
        theme === "dark" ? (theme = Theme.Light) : (theme = Theme.Dark);
        console.log(theme);
    }

    const year = new Date().getFullYear();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <link
        rel="stylesheet"
        type="text/css"
        href="https://esm.sh/@phosphor-icons/web@2.1.2/src/bold/style.css"
    />
</svelte:head>

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
            <li
                class="transition-colors duration-500 ease-out hover:text-[#ffffff]"
            >
                <button onclick={() => toggleTheme()} class="">
                    {#if theme === "dark"}
                        <i class="ph-bold ph-sun"></i>
                    {:else}
                        <i class="ph-bold ph-moon"></i>
                    {/if}
                </button>
            </li>
        </ul>
    </nav>
    <main class="container mx-auto">
        {@render children()}
    </main>
    <footer class="container mx-auto border border-[#0E0E0E] mt-10">
        <div class="py-4">
            <p class="text-sm text-[#86868b]">
                {year} © Isaiah Hamilton
            </p>
        </div>
    </footer>
</div>
