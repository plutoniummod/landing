module.exports = {
    title: "Plutonium Documentation",
    description: "Official Plutonium Documentation",
    theme: 'default-prefers-color-scheme',
    head: [
        ["meta", { name: "theme-color", content: "#3eaf7c" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }]
    ],
    themeConfig: {
        repo: "plutoniumpw/docs",
        docsBranch: 'develop',
        editLinks: true,
        docsDir: "docs",
        lastUpdated: false,
        prefersTheme: 'dark',
        nav: [{
                text: "General",
                link: "/"
            },
            {
                text: "Client",
                link: "/client/"
            },
            {
                text: "Server",
                link: "/server/"
            },
            {
                text: "Modding",
                link: "/modding/"
            }
        ],
        sidebar: {
            "/client/": [{
                    title: "Plutonium Menu / Overlay (Game-UI)",
                    collapsable: false,
                    children: [
                        '/client/',
                        '/client/settings',
                        '/client/game-folders',
                        '/client/finding-a-game',
                        '/client/serverlist'
                    ],
                },
                {
                    title: "Plutonium T6 Client",
                    collapsable: false,
                    children: [
                        '/client/t6/loading-and-compiling-gsc',
                        '/client/t6/theater-mode'
                    ],
                },
                {
                    title: "Plutonium IW5 Client",
                    collapsable: false,
                    children: [
                        '/client/iw5/how-to-gsc',
                        '/client/iw5/loading-gsc',
                        '/client/iw5/custom-weapons',
                        '/client/iw5/custom-maps',
                        '/client/iw5/infected-cooldown'
                    ],
                },
                {
                    title: "Plutonium T4 Client",
                    collapsable: false,
                    children: [
                        '/client/t4/finding-a-zombies-server',
                        '/client/t4/sp-mod-downloading',
                        '/client/t4/loading-mods',
                        '/client/t4/migrating-steam-t4-stats',
                        '/client/t4/rebinding-controller'
                    ],
                },
            ],
            "/server/": [{
                    title: "Server",
                    collapsable: false,
                    children: [
                        '/server/'
                    ],
                },
                {
                    title: "Platform.Plutonium.pw",
                    collapsable: false,
                    children: [
                        '/server/platform/what-is-platform',
                        '/server/platform/navigating-around',
                        '/server/platform/custom-emblem',
                        '/server/platform/subscription',
                        '/server/platform/server-keys',
                        '/server/platform/how-many-servers-can-i-host'
                    ],
                },
                {
                    title: "Plutonium T6 Server",
                    collapsable: false,
                    children: [
                        '/server/t6/setting-up-a-server',
                        '/server/t6/loading-mods'
                    ],
                },
                {
                    title: "Plutonium IW5 Server",
                    collapsable: false,
                    children: [
                        '/server/iw5/setting-up-a-server',
                        '/server/iw5/loading-mods'
                    ],
                },
                {
                    title: "Plutonium T4 Server",
                    collapsable: false,
                    children: [
                        '/server/t4/setting-up-a-server',
                        '/server/t4/loading-mods',
                        '/server/t4/fastdl'
                    ],
                },
            ],
            "/modding/": [{
                    title: "Modding",
                    collapsable: false,
                    children: [
                        '/modding/',
                        '/modding/loading-mods',
                        '/modding/loading-textures',
                        '/modding/creating-textures'
                    ],
                },
                {
                    title: "T4 Modding",
                    collapsable: false,
                    children: [
                        '/modding/t4/disabling-perks-gsc'
                    ],
                },
                {
                    title: "T6 Modding",
                    collapsable: false,
                    children: [
                        '/modding/t6/',
                        '/modding/t6/gsc-syntax-features',
                        '/modding/t6/compiler-limitations'
                    ],
                },
            ],
            "/": [{
                    title: "General",
                    collapsable: false,
                    children: [
                        '/',
                        '/system-requirements',
                        '/engine-explanations',
                        '/install',
                        '/uninstall',
                        '/how-can-i-contribute',
                        '/socials',
                        '/getting-involved'
                    ],
                },
                {
                    title: "Plutonium Support",
                    collapsable: false,
                    children: [
                        '/opening-console',
                        '/repair',
                        '/game-files',
                        '/support'
                    ],
                },
                {
                    title: "Plutonium Features",
                    collapsable: false,
                    children: [
                        '/qol-changes',
                        '/anticheat',
                        '/discord-rpc',
                        '/dedicated-servers',
                        '/mod-support',
                        '/improved-security'
                    ],
                },
                {
                    title: "Plutonium Donator Program",
                    collapsable: false,
                    children: [
                        '/discord-donator-perks',
                        '/how-to-join-donator-program',
                        '/donator-tiers-explained'
                    ],
                },
            ]
        }
    },
    plugins: [
        "@vuepress/plugin-back-to-top",
        "@vuepress/plugin-medium-zoom",
    ]
}