<script lang="ts">
    import Bluesky from "$lib/components/ui/icons/bluesky.svelte";
    import Linkedin from "$lib/components/ui/icons/linkedin.svelte";
    import Tangled from "$lib/components/ui/icons/tangled.svelte";
    import Sky from "$lib/components/sky.svelte";
    import Github from "$lib/components/ui/icons/github.svelte";
    import { getContext } from "svelte";

    type Theme = "light" | "dark";
    const themeState = getContext<{ value: Theme }>("theme");

    let innerWidth = $state(0);
    let innerHeight = $state(0);

    const services = [
        {
            icon: "paint brush",
            title: "Branding & Identity",
            description:
                "Creating logos, visual styles, and entire brand identities that help your business stand out.",
        },
        {
            icon: "paint brush",
            title: "Branding & Identity",
            description:
                "Creating logos, visual styles, and entire brand identities that help your business stand out.",
        },
        {
            icon: "paint brush",
            title: "Branding & Identity",
            description:
                "Creating logos, visual styles, and entire brand identities that help your business stand out.",
        },
        {
            icon: "paint brush",
            title: "Branding & Identity",
            description:
                "Creating logos, visual styles, and entire brand identities that help your business stand out.",
        },
    ];

    const works = [
        {
            title: "Violet",
            description: "Framer Template",
            image: "https://framerusercontent.com/images/7VybckhbrXvFd1uHTiacrudPcXM.png?width=1000&height=750",
        },
        {
            title: "Violet",
            description: "Framer Template",
            image: "https://framerusercontent.com/images/7VybckhbrXvFd1uHTiacrudPcXM.png?width=1000&height=750",
        },
        {
            title: "Violet",
            description: "Framer Template",
            image: "https://framerusercontent.com/images/7VybckhbrXvFd1uHTiacrudPcXM.png?width=1000&height=750",
        },
        {
            title: "Violet",
            description: "Framer Template",
            image: "https://framerusercontent.com/images/7VybckhbrXvFd1uHTiacrudPcXM.png?width=1000&height=750",
        },
        {
            title: "Violet",
            description: "Framer Template",
            image: "https://framerusercontent.com/images/7VybckhbrXvFd1uHTiacrudPcXM.png?width=1000&height=750",
        },
        {
            title: "Violet",
            description: "Framer Template",
            image: "https://framerusercontent.com/images/7VybckhbrXvFd1uHTiacrudPcXM.png?width=1000&height=750",
        },
    ];

    const faqs = [
        {
            question: "What type of projects do you work on?",
            answer: "I mainly create clean, modern, high-converting portfolio websites for designers, photographers, creators, agencies, and personal brands. If your work deserves a polished online presence, I can build it.",
        },
    ];

    let openFAQuestion = $state("");

    function toggleFAQ(key: string) {
        openFAQuestion = openFAQuestion === key ? "" : key;
    }
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<Sky theme={themeState.value} {innerWidth} {innerHeight}>
    <div
        class="h-full flex flex-col items-center justify-center max-w-xl mx-auto text-center"
    >
        <div class="w-fit mx-auto">
            <img
                class="rounded-full w-24 h-24 mx-auto border-2 border-neutral-200 dark:border-neutral-900"
                src="https://selfhosted.social/xrpc/com.atproto.sync.getBlob?did=did:plc:kal7cndv3fyeyo3qw3ejixmd&cid=bafkreifwlccr5hlzq6v4az7tlibhr4aqq3xckuifejmkgwxejjysnudpue"
                alt="Isaiah Hamilton"
            />
            <div
                class="-translate-y-4 flex items-center gap-2 px-2 py-1 w-fit mx-auto rounded-full bg-neutral-100 dark:bg-neutral-950"
            >
                <div class="relative h-2 w-2">
                    <div
                        class="absolute animate-ping bg-green-500 h-full w-full rounded-full"
                    ></div>
                    <div
                        class="absolute bg-green-500 h-full w-full rounded-full"
                    ></div>
                </div>
                <p class="text-sm font-medium text-neutral-500">
                    Available for work
                </p>
            </div>
        </div>
        <div class="space-y-4">
            <h1
                class="text-6xl font-semibold leading-tight text-neutral-900/90 dark:text-neutral-100/90"
            >
                I design and build modern experiences
            </h1>
            <p
                class="text-base text-neutral-900/85 dark:text-neutral-500 max-w-sm mx-auto"
            >
                Hey, I'm Isaiah. I design and build modern digital experiences
                for individuals and growing businesses.
            </p>
        </div>
        <div class="flex items-center gap-2 w-fit mx-auto mt-8 z-10">
            <a href="">
                <div
                    class="transition duration-300 flex items-center h-10 w-30 rounded-full bg-neutral-100 dark:bg-neutral-950 shadow-[0px_0px_0px_0px_var(--color-neutral-200)] hover:shadow-[0px_0px_0px_3px_var(--color-neutral-200)] dark:shadow-[0px_0px_0px_0px_var(--color-neutral-900)] dark:hover:shadow-[0px_0px_0px_3px_var(--color-neutral-900)]"
                >
                    <p
                        class="text-sm text-neutral-500 dark:text-neutral-100 font-medium mx-auto"
                    >
                        See my work
                    </p>
                </div>
            </a>
            <a href="">
                <div
                    class="transition duration-300 flex items-center h-10 w-30 rounded-full bg-blue-500 text-neutral-100 shadow-[0px_0px_0px_0px_var(--color-blue-400)] hover:shadow-[0px_0px_0px_3px_var(--color-blue-400)]"
                >
                    <p class="text-sm font-medium mx-auto">Contact me</p>
                </div>
            </a>
        </div>
    </div>
</Sky>

<div class="mt-40 space-y-14">
    <div class="text-center">
        <p class="text-sm font-semibold text-neutral-500">Services</p>
        <h2 class="text-5xl font-semibold leading-tight mt-6 max-w-110 mx-auto">
            Here's what I bring to the table for you
        </h2>
        <p class="text-neutral-500 mt-4 max-w-xs mx-auto">
            An overview of the core services I provide, no matter the project
            size or type.
        </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-200 mx-auto">
        {#each services as service}
            <div
                class="space-y-6 bg-neutral-100 dark:bg-neutral-950 border-2 border-neutral-200 dark:border-neutral-900 rounded-2xl px-8 py-6"
            >
                <div>{service.icon}</div>
                <div class="space-y-2">
                    <h3 class="text-2xl font-semibold">{service.title}</h3>
                    <p class="text-base font-medium text-neutral-500">
                        {service.description}
                    </p>
                </div>
            </div>
        {/each}
    </div>
</div>

<div class="mt-40 space-y-14">
    <div class="text-center">
        <p class="text-sm font-semibold text-neutral-500">Works</p>
        <h2 class="text-5xl font-semibold leading-tight mt-6 max-w-110 mx-auto">
            Take a closer look at some of my works
        </h2>
        <p class="text-neutral-500 mt-4 max-w-xs mx-auto">
            A selection of projects that showcase my approach, style, and
            attention to detail.
        </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-200 mx-auto">
        {#each works as work}
            <div
                class="group space-y-2 bg-neutral-100 dark:bg-neutral-950 border-2 border-neutral-200 dark:border-neutral-900 rounded-2xl px-2 py-2"
            >
                <div class="overflow-hidden rounded-xl">
                    <img
                        src={work.image}
                        alt={work.title}
                        class="rounded-xl group-hover:scale-105 transition duration-300"
                    />
                </div>
                <div class="flex items-end justify-between">
                    <div class="space-y-2">
                        <h3 class="text-base font-medium">{work.title}</h3>
                        <p class="text-sm font-semibold text-neutral-500">
                            {work.description}
                        </p>
                    </div>
                    <i
                        class="ph-bold ph-arrow-up-right text-xl group-hover:rotate-45 transition duration-300 pr-1"
                    ></i>
                </div>
            </div>
        {/each}
    </div>
</div>

<div class="mt-40 space-y-14">
    <div class="text-center">
        <p class="text-sm font-semibold text-neutral-500">FAQ</p>
        <h2 class="text-5xl font-semibold leading-tight mt-6 max-w-140 mx-auto">
            Some of my frequently asked questions
        </h2>
        <p class="text-neutral-500 mt-4 max-w-115 mx-auto">
            A quick collection of helpful answers so you can get clarity fast.
            If there’s anything else you’re wondering about, just reach out!
        </p>
    </div>
    <div class="max-w-200 mx-auto">
        {#each faqs as faq}
            <button
                class="space-y-4 bg-neutral-100 dark:bg-neutral-950 px-8 py-6 w-full {openFAQuestion ===
                faq.question
                    ? 'rounded-[40px]'
                    : 'rounded-full'}"
                onclick={() => toggleFAQ(faq.question)}
            >
                <div class="flex items-center justify-between">
                    <h3 class="text-lg font-medium">{faq.question}</h3>
                    <div
                        class="px-2 py-1 bg-neutral-200 dark:bg-neutral-900 rounded-full text-neutral-500 dark:text-neutral-100"
                    >
                        {#if openFAQuestion === faq.question}
                            <i class="ph-bold ph-minus"></i>
                        {:else}
                            <i class="ph-bold ph-plus"></i>
                        {/if}
                    </div>
                </div>
                {#if openFAQuestion === faq.question}
                    <p
                        class="text-left text-[15px] font-semibold text-neutral-500 max-w-xl"
                    >
                        {faq.answer}
                    </p>
                {/if}
            </button>
        {/each}
    </div>
</div>

<div class="mt-40 space-y-14">
    <div class="text-center">
        <p class="text-sm font-semibold text-neutral-500">Get Started</p>
        <h2 class="text-5xl font-semibold leading-tight mt-6 max-w-140 mx-auto">
            Shoot me a DM, let's discuss your next project
        </h2>
        <p class="text-neutral-500 mt-4 max-w-115 mx-auto">
            Whether you want to send an email, drop a quick message, or hop on a
            call — I'm here and excited to hear what you're working on.
        </p>
    </div>
    <div class="grid grid-cols-2 gap-8 max-w-200 mx-auto">
        <!-- TODO: make contact form -->
        <a href="mailto:hello@isaiah-hamilton.dev">
            <div
                class="col-span-1 bg-neutral-100 hover:bg-white dark:bg-neutral-950 dark:hover:bg-black border-2 border-neutral-200 dark:border-neutral-900 rounded-2xl text-center space-y-4 py-8 transition duration-300"
            >
                <p class="text-sm text-neutral-500">Email Me</p>
                <p class="text-2xl">
                    hello<span class="text-green-500">@</span
                    >isaiah-hamilton<span class="text-pink-500">.</span>dev
                </p>
            </div>
        </a>
        <div
            class="col-span-1 bg-neutral-100 dark:bg-neutral-950 border-2 border-neutral-200 dark:border-neutral-900 rounded-2xl text-center py-8 content-center"
        >
            <ul class="flex items-center justify-around">
                <li class="transition duration-300 hover:scale-110">
                    <a
                        href="https://bsky.app/profile/isaiah-hamilton.dev"
                        target="_blank"><Bluesky /></a
                    >
                </li>
                <li class="transition duration-300 hover:scale-110">
                    <a href="https://github.com/isaiah-hamilton" target="_blank"
                        ><Github /></a
                    >
                </li>
                <li class="transition duration-300 hover:scale-110">
                    <a
                        href="https://tangled.sh/isaiah-hamilton.dev"
                        target="_blank"><Tangled /></a
                    >
                </li>
                <li class="transition duration-300 hover:scale-110">
                    <a
                        href="https://linkedin.com/in/isaiah7hamilton"
                        target="_blank"><Linkedin /></a
                    >
                </li>
            </ul>
        </div>
        <a href="##" class="col-span-2">
            <div
                class="group bg-neutral-100 hover:bg-white dark:bg-neutral-950 dark:hover:bg-black border-2 border-neutral-200 dark:border-neutral-900 rounded-2xl space-y-4 py-8 transition duration-300"
            >
                <div class="flex items-center w-fit mx-auto gap-4">
                    <p class="text-2xl">Schedule a Call</p>
                    <div
                        class="flex w-12 h-12 items-center justify-center bg-blue-500 rounded-full"
                    >
                        <i
                            class="ph-bold ph-arrow-up-right text-xl text-white group-hover:rotate-45 transition duration-300"
                        ></i>
                    </div>
                </div>
            </div>
        </a>
    </div>
</div>
