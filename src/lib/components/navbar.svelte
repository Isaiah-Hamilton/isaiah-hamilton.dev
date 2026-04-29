<script lang="ts">
    import { themeStore } from "$lib/theme";

    let theme = $state(false);
    themeStore.subscribe((value: boolean) => {
        theme = value;
    });
</script>

<nav
    class="fixed top-4 left-1/2 transform -translate-x-1/2 z-20 w-fit mx-auto border border-neutral-300 dark:border-neutral-900 rounded-full px-4 py-2 backdrop-blur-md bg-neutral-100 dark:bg-neutral-950/80"
>
    <ul class="flex items-center justify-center gap-4 text-neutral-500 text-sm">
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
            <button
                onclick={() =>
                    themeStore.update((currentTheme) => {
                        localStorage.setItem(
                            "theme",
                            !currentTheme ? "true" : "false",
                        );
                        document.documentElement.classList.toggle(
                            "dark",
                            !currentTheme,
                        );
                        return !currentTheme;
                    })}
                class=""
            >
                {#if theme}
                    <i class="ph-bold ph-sun"></i>
                {:else}
                    <i class="ph-bold ph-moon"></i>
                {/if}
            </button>
        </li>
    </ul>
</nav>
