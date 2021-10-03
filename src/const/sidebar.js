import { frontMatter as intro } from '../pages/docs/intro.md';
import { frontMatter as systemRequirements } from '../pages/docs/system-requirements.md';
import { frontMatter as engineExplanations } from '../pages/docs/engine-explanations.md';
import { frontMatter as install } from '../pages/docs/install.md';
import { frontMatter as update } from '../pages/docs/update.md';
import { frontMatter as uninstall } from '../pages/docs/uninstall.md';
import { frontMatter as howCanIContribute } from '../pages/docs/how-can-i-contribute.md';
import { frontMatter as socials } from '../pages/docs/socials.md';
import { frontMatter as gettingInvolved } from '../pages/docs/getting-involved.md';
import { frontMatter as changelog } from '../pages/docs/changelog.md';
import { frontMatter as customGames } from '../pages/docs/custom-games.md';
import { frontMatter as controllers } from '../pages/docs/controllers.md';
import { frontMatter as openingConsole } from '../pages/docs/opening-console.md';
import { frontMatter as repair } from '../pages/docs/repair.md';
import { frontMatter as gameFiles } from '../pages/docs/game-files.md';
import { frontMatter as lowFps } from '../pages/docs/low-fps.md';
import { frontMatter as support } from '../pages/docs/support.md';
import { frontMatter as qolChanges } from '../pages/docs/qol-changes.md';
import { frontMatter as anticheat } from '../pages/docs/anticheat.md';
import { frontMatter as antivirus } from '../pages/docs/antivirus.md';
import { frontMatter as discordRpc } from '../pages/docs/discord-rpc.md';
import { frontMatter as dedicatedServers } from '../pages/docs/dedicated-servers.md';
import { frontMatter as recordingPlutoOBS } from '../pages/docs/recording-plutonium-obs.md';
import { frontMatter as modSupport } from '../pages/docs/mod-support.md';
import { frontMatter as modDownloading } from '../pages/docs/mod-downloading.md';
import { frontMatter as improvedSecurity } from '../pages/docs/improved-security.md';
import { frontMatter as discordDonatorPerks } from '../pages/docs/discord-donator-perks.md';
import { frontMatter as howToJoinDonatorProgram } from '../pages/docs/how-to-join-donator-program.md';
import { frontMatter as donatorTiersExplained } from '../pages/docs/donator-tiers-explained.md';
import { frontMatter as unlockallMaxRank } from '../pages/docs/unlockall-max-rank.md';
import { frontMatter as aimAssistExplanation } from '../pages/docs/aim-assist.md';
import { frontMatter as changeYourName } from '../pages/docs/change-name.md';

import { frontMatter as moddingIndex } from '../pages/docs/modding/index.md';
import { frontMatter as moddingLoadingMods } from '../pages/docs/modding/loading-mods.md';
import { frontMatter as moddingLoadingTextures } from '../pages/docs/modding/loading-textures.md';
import { frontMatter as moddingCreatingTextures } from '../pages/docs/modding/creating-textures.md';
import { frontMatter as moddingMovingDrive } from '../pages/docs/modding/moving-to-another-drive.md';
import { frontMatter as moddingGscIndex } from '../pages/docs/modding/gsc/index.md';
import { frontMatter as moddingGscHowToGsc } from '../pages/docs/modding/gsc/how-to-gsc.md';
import { frontMatter as moddingGscCompilerLimitations } from '../pages/docs/modding/gsc/compiler-limitations.md';
import { frontMatter as moddingT4DisablingPerksGsc } from '../pages/docs/modding/t4/disabling-perks-gsc.md';
import { frontMatter as moddingIW5Customizing } from '../pages/docs/modding/iw5/customizing-game.md';
import { frontMatter as serverIndex } from '../pages/docs/server/index.md';
import { frontMatter as serverPlatformWhatIsPlatform } from '../pages/docs/server/platform/what-is-platform.md';
import { frontMatter as serverPlatformNavigatingAround } from '../pages/docs/server/platform/navigating-around.md';
import { frontMatter as serverPlatformCustomEmblem } from '../pages/docs/server/platform/custom-emblem.md';
import { frontMatter as serverPlatformSubscription } from '../pages/docs/server/platform/subscription.md';
import { frontMatter as serverPlatformServerKeys } from '../pages/docs/server/platform/server-keys.md';
import { frontMatter as serverPlatformHowManyServersCanIHost } from '../pages/docs/server/platform/how-many-servers-can-i-host.md';
import { frontMatter as serverT6SettingUpAServer } from '../pages/docs/server/t6/setting-up-a-server.md';
import { frontMatter as serverT6LoadingMods } from '../pages/docs/server/t6/loading-mods.md';
import { frontMatter as serverPlutoDvars } from '../pages/docs/server/dvars.md';
import { frontMatter as serverT6CleaningDemos } from '../pages/docs/server/t6/cleaning-demos.md';
import { frontMatter as serverIw5SettingUpAServer } from '../pages/docs/server/iw5/setting-up-a-server.md';
import { frontMatter as serverIw5LoadingMods } from '../pages/docs/server/iw5/loading-mods.md';
import { frontMatter as serverIw5Fastdl } from '../pages/docs/server/iw5/fastdl.md';
import { frontMatter as serverT4SettingUpAServer } from '../pages/docs/server/t4/setting-up-a-server.md';
import { frontMatter as serverT4LoadingMods } from '../pages/docs/server/t4/loading-mods.md';
import { frontMatter as serverT4Fastdl } from '../pages/docs/server/t4/fastdl.md';
import { frontMatter as clientIndex } from '../pages/docs/client/index.md';
import { frontMatter as clientSettings } from '../pages/docs/client/settings.md';
import { frontMatter as clientGameFolders } from '../pages/docs/client/game-folders.md';
import { frontMatter as clientFindingAGame } from '../pages/docs/client/finding-a-game.md';
import { frontMatter as clientServerlist } from '../pages/docs/client/serverlist.md';
import { frontMatter as clientT6LoadingAndCompilingGsc } from '../pages/docs/client/t6/loading-and-compiling-gsc.md';
import { frontMatter as clientT6TheaterMode } from '../pages/docs/client/t6/theater-mode.md';
import { frontMatter as clientIw5LoadingGsc } from '../pages/docs/client/iw5/loading-gsc.md';
import { frontMatter as clientIw5CustomWeapons } from '../pages/docs/client/iw5/custom-weapons.md';
import { frontMatter as clientIw5CustomMaps } from '../pages/docs/client/iw5/custom-maps.md';
import { frontMatter as clientIw5Stats } from '../pages/docs/client/iw5/stats.md';
import { frontMatter as clientIw5InfectedCooldown } from '../pages/docs/client/iw5/infected-cooldown.md';
import { frontMatter as clientT4LoadingMods } from '../pages/docs/client/t4/loading-mods.md';
import { frontMatter as clientT4MigratingSteamT4Stats } from '../pages/docs/client/t4/migrating-steam-t4-stats.md';
import { frontMatter as clientT4RebindingController } from '../pages/docs/client/t4/rebinding-controller.md';
import { frontMatter as clientT4PerfectBorderlessWindow } from '../pages/docs/client/t4/perfect-borderless-window.md';


export const sections = [
    {
        title: 'Plutonium',
        children: [
            {
                title: 'General',
                children: [
                    intro,
                    systemRequirements,
                    engineExplanations,
                    install,
                    update,
                    uninstall,
                    antivirus,
                    howCanIContribute,
                    socials,
                    gettingInvolved,
                    changelog,
                ],
            },
            {
                title: 'Support',
                children: [support, customGames, controllers, openingConsole, unlockallMaxRank, repair, gameFiles, lowFps, recordingPlutoOBS, changeYourName],
            },
            {
                title: 'Features',
                children: [
                    qolChanges,
                    anticheat,
                    aimAssistExplanation,
                    discordRpc,
                    dedicatedServers,
                    modSupport,
                    modDownloading,
                    improvedSecurity,
                ],
            },
            {
                title: 'Donator Program',
                children: [discordDonatorPerks, howToJoinDonatorProgram],
                //children: [discordDonatorPerks, howToJoinDonatorProgram, donatorTiersExplained],
            },
        ],
    },
    {
        title: 'Modding',
        children: [
            {
                title: 'General',
                children: [moddingIndex, moddingLoadingMods, moddingLoadingTextures, moddingCreatingTextures, moddingMovingDrive],
            },
            {
                title: 'GSC modding',
                children: [moddingGscIndex, moddingGscHowToGsc, moddingGscCompilerLimitations],
            },
            {
                title: 'T4 modding',
                children: [moddingT4DisablingPerksGsc],
            },
            {
                title: 'IW5 modding',
                children: [moddingIW5Customizing],
            },
        ],
    },
    {
        title: 'Server',
        children: [
            {
                title: 'Intro',
                children: [serverIndex, serverPlutoDvars],
            },
            {
                title: 'platform.plutonium.pw',
                children: [
                    /*serverPlatformWhatIsPlatform,
                    serverPlatformNavigatingAround,
                    serverPlatformCustomEmblem,
                    serverPlatformSubscription,*/
                    serverPlatformServerKeys,
                    serverPlatformHowManyServersCanIHost,
                ],
            },
            {
                title: 'Plutonium T6 server',
                children: [serverT6SettingUpAServer, serverT6LoadingMods, serverT6CleaningDemos],
            },
            {
                title: 'Plutonium IW5 server',
                children: [serverIw5SettingUpAServer, serverIw5LoadingMods, serverIw5Fastdl],
            },
            {
                title: 'Plutonium T4 server',
                children: [serverT4SettingUpAServer, serverT4LoadingMods, serverT4Fastdl],
            },
        ],
    },
    {
        title: 'Client',
        children: [
            /*{
                title: 'Plutonium Menu / Overlay (Game-UI)',
                children: [clientIndex, clientSettings, clientGameFolders, clientFindingAGame, clientServerlist],
            },*/
            {
                title: 'Plutonium T6 Client',
                children: [clientT6LoadingAndCompilingGsc, clientT6TheaterMode],
            },
            {
                title: 'Plutonium IW5 Client',
                children: [clientIw5LoadingGsc, clientIw5CustomWeapons, clientIw5CustomMaps, clientIw5Stats],
                //children: [clientIw5LoadingGsc, clientIw5CustomWeapons, clientIw5CustomMaps, clientIw5InfectedCooldown],
            },
            {
                title: 'Plutonium T4 Client',
                children: [clientT4LoadingMods, clientT4MigratingSteamT4Stats, clientT4RebindingController, clientT4PerfectBorderlessWindow],
            },
        ],
    },
];
