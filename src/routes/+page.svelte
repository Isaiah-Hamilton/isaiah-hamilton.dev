<script lang="ts">
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
    ];
</script>

<div
    class="h-screen flex flex-col items-center justify-center max-w-xl mx-auto text-center"
>
    <div class="w-fit mx-auto">
        <img
            class="rounded-full w-24 h-24 mx-auto border-2 border-[#262626]"
            src="https://selfhosted.social/xrpc/com.atproto.sync.getBlob?did=did:plc:kal7cndv3fyeyo3qw3ejixmd&cid=bafkreifwlccr5hlzq6v4az7tlibhr4aqq3xckuifejmkgwxejjysnudpue"
            alt="Isaiah Hamilton"
        />
        <div
            class="-translate-y-4 flex items-center gap-2 px-2 py-1 w-fit mx-auto rounded-full bg-[#0E0E0E]"
        >
            <div class="relative h-2 w-2">
                <div
                    class="absolute animate-ping bg-green-500 h-full w-full rounded-full"
                ></div>
                <div
                    class="absolute bg-green-500 h-full w-full rounded-full"
                ></div>
            </div>
            <p class="text-sm font-medium">Available for work</p>
        </div>
    </div>
    <div class="space-y-4">
        <h1 class="text-6xl font-semibold leading-tight">
            I design and build modern experiences
        </h1>
        <p class="text-base text-[#86868b] max-w-sm mx-auto">
            Hey, I'm Isaiah. I design and build modern digital experiences for
            individuals and growing businesses.
        </p>
    </div>
    <div class="flex items-center gap-2 w-fit mx-auto mt-8">
        <a href="">
            <div
                class="transition duration-300 flex items-center h-10 w-30 rounded-full bg-[#0E0E0E] shadow-[0px_0px_0px_0px_#262626] hover:shadow-[0px_0px_0px_3px_#262626]"
            >
                <p class="text-sm font-medium mx-auto">See my work</p>
            </div>
        </a>
        <a href="">
            <div
                class="transition duration-300 flex items-center h-10 w-30 rounded-full bg-white text-black hover:bg-blue-500 hover:text-white"
            >
                <p class="text-sm font-medium mx-auto">Contact me</p>
            </div>
        </a>
    </div>
</div>

<div class="mt-40 space-y-14">
    <div class="text-center">
        <p class="text-sm font-semibold text-[#86868b]">Services</p>
        <h2 class="text-5xl font-semibold leading-tight mt-6 max-w-110 mx-auto">
            Here's what I bring to the table for you
        </h2>
        <p class="text-[#86868b] mt-4 max-w-xs mx-auto">
            An overview of the core services I provide, no matter the project
            size or type.
        </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-200 mx-auto">
        {#each services as service}
            <div
                class="space-y-6 bg-[#0e0e0e] border-2 border-[#262626] rounded-2xl px-8 py-6"
            >
                <div>{service.icon}</div>
                <div class="space-y-2">
                    <h3 class="text-2xl font-semibold">{service.title}</h3>
                    <p class="text-base font-medium text-[#86868b]">
                        {service.description}
                    </p>
                </div>
            </div>
        {/each}
    </div>
</div>

<div class="mt-40 space-y-14">
    <div class="text-center">
        <p class="text-sm font-semibold text-[#86868b]">Works</p>
        <h2 class="text-5xl font-semibold leading-tight mt-6 max-w-110 mx-auto">
            Take a closer look at some of my works
        </h2>
        <p class="text-[#86868b] mt-4 max-w-xs mx-auto">
            A selection of projects that showcase my approach, style, and
            attention to detail.
        </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-200 mx-auto">
        {#each works as work}
            <div
                class="space-y-2 bg-[#0e0e0e] border-2 border-[#262626] rounded-2xl px-2 py-2"
            >
                <img src={work.image} alt={work.title} class="rounded-xl" />
                <div class="space-y-2">
                    <h3 class="text-base font-medium">{work.title}</h3>
                    <p class="text-sm font-semibold text-[#86868b]">
                        {work.description}
                    </p>
                </div>
            </div>
        {/each}
    </div>
</div>
