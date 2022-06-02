import { FormattedMessage } from 'react-intl';

export const sections = [
    {
        title: 'Plutonium',
        children: [
            {
                title: <FormattedMessage defaultMessage="General" />,
                children: [
                    '/docs/intro',
                    '/docs/system-requirements',
                    '/docs/engine-explanations',
                    '/docs/install',
                    '/docs/update',
                    '/docs/uninstall',
                    '/docs/antivirus',
                    '/docs/how-can-i-contribute',
                    '/docs/socials',
                    '/docs/getting-involved',
                    '/docs/changelog',
                ],
            },
            {
                title: <FormattedMessage defaultMessage="Policies" />,
                children: [
                    '/docs/policies/forum-rules',
                    '/docs/policies/discord-rules',
                ],
            },
            {
                title: <FormattedMessage defaultMessage="Support" />,
                children: [
                    '/docs/support',
                    '/docs/custom-games',
                    '/docs/controllers',
                    '/docs/opening-console',
                    '/docs/unlockall-max-rank',
                    '/docs/repair',
                    '/docs/game-files',
                    '/docs/low-fps',
                    '/docs/recording-plutonium-obs',
                    '/docs/change-name',
                    '/docs/fix-game-zoomed-in',
                ],
            },
            {
                title: <FormattedMessage defaultMessage="Features" />,
                children: [
                    '/docs/qol-changes',
                    '/docs/anticheat',
                    '/docs/aim-assist',
                    '/docs/discord-rpc',
                    '/docs/dedicated-servers',
                    '/docs/mod-support',
                    '/docs/mod-downloading',
                    '/docs/improved-security',
                ],
            },
            {
                title: <FormattedMessage defaultMessage="Donator Program" />,
                children: [
                    '/docs/discord-donator-perks',
                    '/docs/how-to-join-donator-program',
                    // '/docs/donator-tiers-explained'
                ],
            },
        ],
    },
    {
        title: <FormattedMessage defaultMessage="Modding" />,
        children: [
            {
                title: 'General',
                children: [
                    '/docs/modding',
                    '/docs/modding/loading-mods',
                    '/docs/modding/loading-textures',
                    '/docs/modding/creating-textures',
                    '/docs/modding/moving-to-another-drive',
                ],
            },
            {
                title: <FormattedMessage defaultMessage="GSC modding" />,
                children: [
                    '/docs/modding/gsc',
                    '/docs/modding/gsc/how-to-gsc',
                    '/docs/modding/gsc/new-scripting-features',
                    '/docs/modding/gsc/compiler-limitations',
                ],
            },
            {
                title: <FormattedMessage defaultMessage="T4 modding" />,
                children: ['/docs/modding/t4/disabling-perks-gsc'],
            },
            {
                title: <FormattedMessage defaultMessage="IW5 modding" />,
                children: ['/docs/modding/iw5/customizing-game'],
            },
        ],
    },
    {
        title: <FormattedMessage defaultMessage="Server" />,
        children: [
            {
                title: <FormattedMessage defaultMessage="Intro" />,
                children: ['/docs/server', '/docs/server/dvars'],
            },
            {
                title: 'platform.plutonium.pw',
                children: [
                    /*
                    '/docs/server/platform/what-is-platform',
                    '/docs/server/platform/navigating-around',
                    '/docs/server/platform/subscription',
                    */
                    '/docs/server/platform/server-keys',
                    '/docs/server/platform/how-many-servers-can-i-host',
                ],
            },
            {
                title: <FormattedMessage defaultMessage="Plutonium T6 server" />,
                children: [
                    '/docs/server/t6/setting-up-a-server',
                    '/docs/server/t6/loading-mods',
                    '/docs/server/t6/cleaning-demos',
                ],
            },
            {
                title: <FormattedMessage defaultMessage="Plutonium IW5 server" />,
                children: [
                    '/docs/server/iw5/setting-up-a-server',
                    '/docs/server/iw5/loading-mods',
                    '/docs/server/iw5/fastdl',
                ],
            },
            {
                title: <FormattedMessage defaultMessage="Plutonium T4 server" />,
                children: [
                    '/docs/server/t4/setting-up-a-server',
                    '/docs/server/t4/loading-mods',
                    '/docs/server/t4/fastdl',
                ],
            },
            {
                title: <FormattedMessage defaultMessage="Plutonium T5 server" />,
                children: [
                    '/docs/server/t5/setting-up-a-server',
                    '/docs/server/t5/loading-mods',
                    '/docs/server/t5/fastdl',
                ],
            },
        ],
    },
    {
        title: <FormattedMessage defaultMessage="Client" />,
        children: [
            {
                title: <FormattedMessage defaultMessage="Plutonium T6 Client" />,
                children: ['/docs/client/t6/loading-and-compiling-gsc', '/docs/client/t6/theater-mode'],
            },
            {
                title: <FormattedMessage defaultMessage="Plutonium IW5 Client" />,
                children: [
                    '/docs/client/iw5/loading-gsc',
                    '/docs/client/iw5/custom-weapons',
                    '/docs/client/iw5/custom-maps',
                    // '/docs/client/iw5/infected-cooldown',
                ],
            },
            {
                title: <FormattedMessage defaultMessage="Plutonium T4 Client" />,
                children: [
                    '/docs/client/t4/loading-mods',
                    '/docs/client/t4/migrating-steam-t4-stats',
                    '/docs/client/t4/rebinding-controller',
                    '/docs/client/t4/perfect-borderless-window',
                ],
            },
            {
                title: <FormattedMessage defaultMessage="Plutonium T5 Client" />,
                children: [
                    '/docs/client/t5/loading-mods',
                ],
            },
        ],
    },
];
