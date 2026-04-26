<script lang="ts">
    import "./layout.css";
    import favicon from "$lib/assets/favicon.svg";

    let { children } = $props();

    let isDark = $state(false);

    $effect(() => {
        if (typeof window === "undefined") return;

        const saved = localStorage.getItem("theme");
        isDark = saved === "dark";

        document.documentElement.classList.toggle("dark", isDark);
    });

    function toggleTheme() {
        isDark = !isDark;
        document.documentElement.classList.toggle("dark", isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
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
        class="fixed top-4 left-1/2 transform -translate-x-1/2 z-20 w-fit mx-auto border border-neutral-300 dark:border-neutral-900 rounded-full px-4 py-2 backdrop-blur-md bg-neutral-100 dark:bg-neutral-950/80"
    >
        <ul
            class="flex items-center justify-center gap-4 text-neutral-500 text-sm"
        >
            <li
                class="transition-colors duration-500 ease-out hover:text-neutral-900 dark:hover:text-neutral-100"
            >
                <a href="/">Services</a>
            </li>
            <li
                class="transition-colors duration-500 ease-out hover:text-neutral-900 dark:hover:text-neutral-100"
            >
                <a href="/about">Works</a>
            </li>
            <li
                class="transition-colors duration-500 ease-out hover:text-neutral-900 dark:hover:text-neutral-100"
            >
                <a href="/contact">Contact me</a>
            </li>
            <li
                class="transition-colors duration-500 ease-out hover:text-neutral-900 dark:hover:text-neutral-100"
            >
                <button onclick={() => toggleTheme()} class="">
                    {#if isDark === true}
                        <i class="ph-bold ph-sun"></i>
                    {:else}
                        <i class="ph-bold ph-moon"></i>
                    {/if}
                </button>
            </li>
        </ul>
    </nav>
    <main class="overflow-x-hidden">
        {@render children()}
    </main>
    <footer
        class="container mx-auto border-t border-neutral-100 dark:border-neutral-900 mt-10 px-4"
    >
        <div class="py-4">
            <p class="text-sm text-neutral-500">
                {year} © Isaiah Hamilton
            </p>
        </div>
    </footer>
</div>
