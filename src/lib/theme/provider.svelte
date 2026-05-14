<script lang="ts">
    import { onMount } from "svelte";
    import { theme } from "./store.svelte";

    let { children } = $props();

    onMount(() => {
        theme.init();
    });
</script>

{@render children?.(theme)}
