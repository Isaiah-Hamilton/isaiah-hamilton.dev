<script lang="ts" module>
    import packageJson from "../../../package.json";
    import Github from "./ui/icons/github.svelte";
    import Tangled from "./ui/icons/tangled.svelte";

    const year = new Date().getFullYear();
</script>

<footer
    class="container mx-auto border-t border-neutral-100 dark:border-neutral-900 mt-10"
>
    <div class="flex items-center justify-between px-4 py-4">
        <div class="flex items-center text-sm text-neutral-500 space-x-1">
            <span>{year}</span><i class="ph-bold ph-copyright"></i><span
                >Isaiah Hamilton</span
            >
        </div>
        <div class="flex items-center space-x-4">
            <div class="text-sm text-neutral-500">v{packageJson.version}</div>
            <a
                href="https://github.com/isaiah-hamilton/isaiah-hamilton.dev"
                target="_blank"
            >
                <Github
                    size={20}
                    fill="fill-neutral-500 dark:fill-neutral-500"
                />
            </a>
            <a
                href="https://tangled.sh/isaiah-hamilton.dev/isaiah-hamilton.dev"
                target="_blank"
            >
                <Tangled
                    size={20}
                    fill="fill-neutral-500 dark:fill-neutral-500"
                />
            </a>
        </div>
    </div>
</footer>
