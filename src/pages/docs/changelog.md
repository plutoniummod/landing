# Changelog

This is a list of Plutonium updates, and the changes they introduced. New updates install automatically when available when you start Plutonium.exe

## r2234-r23XX

* IW5:
  * [New Maps](/docs/client/iw5/custom-maps): Nuketown, Skidrow, and Favela.
  * Performance fixes, so you should get higher FPS.
  * Slowmotion should now work on dedicated servers.
  * Various improvements and fixes to GSC scripting.
  * Improved server stability

* T6:
  * Player Cards now save!
  * Improved server stability

## r2190-r2234

* IW5:
  * Update to Highrise to fix shadows and explosive barrels.
  * Fixed a crash when attempting to join a server that is running a mod.
  * Fixed an issue where the server will respectate clients who are freelooking.

* T6:
  * New [Theater Mode](/docs/client/t6/theater-mode) menu which allows you to play demos with ease. Note that demos recorded on any version prior to this will not have any information to go along with the demo, but will still be playable.
  * Remove color codes from windows console output (mainly for Dedicated Servers).
  * Added the ability to change the team names with `g_customTeamNames` (Example: `set g_customTeamNames "allies,plutonium.pw|axis,forum.plutonium.pw"`).
  * Added the ability to bind custom commands to keys. (`bind k ufo`)
  * Added level "say" notify for when a player says something in chat. (`level waittill( "say", message, player );`)
  * Hide chat message if it starts with a slash (useful for hiding commands with third-party administration tools).

## r2158-r2190

* IW5:
  * [Aim Assist](aim-assist) added. Click this link to learn how to make sure it's enabled for you in game. Server owners can disable this for their servers if they want to. It is on by default.
  * Made improvements to Highrise, note that the map is still in beta. Red explosive barrels do not work and shadows look pixelated, turn off shadows in game options if this bothers you.
  This map was previously restricted to certain server hosts as killstreaks would crash the map, this is now lifted and anyone can host the map.
  This map will auto download as part of the update when you start Plutonium.exe - it is also playable in private match.
  * `sv_allowThirdPersonSpectator` added, which allows clients to spectate players in thirdperson.
  * Controller deadzone configuration via dvar (`gpad_stick_deadzone_min`, `gpad_stick_deadzone_max`) - use this to help with stick drift.
  * Fixes controlling killstreaks like predator missile with a mouse while a controller is plugged in. This would stop the player controlling killstreaks with a controller in the past.
  * Errors now print to log file.

* T6:
  * When in CODCaster free look (not spectating a specific player) the overhead names use team colors rather than everyone showing up as an enemy.
  * Controller deadzone configuration via dvar (`gpad_stick_deadzone_min`, `gpad_stick_deadzone_max`) - use this to help with stick drift.
  * Typing dvars in console and hitting enter will now output their value like other cods.

## r2155-r2158

* T6:
  * Fixed an issue on ZM that caused door prices and easter egg steps to not be correct for solo games

## r2109-r2155

* T6:
  * Servers/Private Matches ZM
    - Fixed UI incompatible error.
    - Added dvar `demo_currentDemo` to display the current demo.
    - Fixed more than 4 players to show their points.
    - Having more than 2 player teams with players on them will no longer result in a LUI error(scoreboard issue).
    - Scoreboard now supports displaying a score if the server sets a scorelimit like MP.
    - Scoreboard now supports displaying round limit if the server sets a roundlimit like MP.
    - Turned will no longer attempt to set the team count lower than the `gts "teamCount"`.
    - Change Team option is available like MP. Requires `gts teamCount` to be greater than 1 and `gts allowInGameTeamChange 1`.
  - Private Matches ZM
    - Start match button always works regardless of gamemode or number of players in the lobby.
    - Cutscenes restored but only play in private matches and if dvar `zombies_minplayers` is 1.
  - Private Matches MP/ZM Only
    - Party privacy popup now sets dvars `sv_maxclients`, `com_maxclients`, `party_maxplayers`, and `party_maxplayers_privatematch` to properly limit the max clients allowed.
  - Servers/Private Matches MP
    - Codcaster is now available in all FFA gametypes.
  - Menus ZM
    - Renamed "custom games" button to "Play".
    - Removed "Solo Play" button.
    - Renamed Public Match to "Server Browser", which opens the server browser.
    - Added dvar selector "Min Players" to set the minimum expected players.
    - Added dvar selector "Enable Cheats" that turns on "sv_cheats" dvar.
    - Added descriptions for actionslot buttons that better represent what they do in ZM.
  - Menus MP/ZM
    - Removed unused buttons from the menus.
    - Added 200 fps option to max fps setting.
    - FOV can be set up to 120 with the slider.
    - Removed voice chat tab in its entirety, as a result of this, your microphone won't change it's volume when playing Plutonium anymore.
    - Removed Singleplayer/Multiplayer/Zombies swap buttons from mainmenu.
    - Added dvar selector for `cg_fov_scale`. Values can be anywhere from 0.5 to 2.0, increments in 0.05 intervals, and default is 1.0.
    - Normal FOV slider dynamically updates the fov when used in game.
  - Menus MP
    - Added unlockall button. Has confirmation prompt.
    - Added resetstats button. Has confirmation prompt.
    - Renamed "Public Match" button to "Ranked".
    - Added Server Browser button accessible from the main and party lobbies.
    - Removed CODtv and livestream buttons.

## r2107-r2109

* IW5:
  * Fixed IW5 crashing for servers
  * Updated bots
  * Fixed hosting with Wine

* T6:
  * Force 'aim_lockon_enabled' to 1

## r2016 - r2107 - Aim Assist is here

* IW5:
  * General improvements to stability.
  * Fixed a bug that caused GSC scripts to leak memory on map rotation.
  * Allowed players to move through each other rather than being able to block one another.
  * Fixed Theater mode, this should be working normally again now.
  * The server will kick you to the main menu rather than crash your game if the GSC VM causes a crash.
  * Fixed a bug with spectator, when the player you a spectating dies and respawns, you will still be spectating them.
  * Added custom script specific folder loading. This means you can place a script in a gamemode folder and it will only load on that gamemode, for example.
  * Added `g_antilag` dvar - this can be set on or off to enable / disable lag compensation.
  * Fixed the exploit using of a shotgun and extended mag with pellets.
  * Scripts can now notify when you change to spectator.

* T6:
  * [Aim Assist](aim-assist) added for Zombies and Multiplayer.
  * General improvements to stability.
  * The Zombies HUD will now work correctly for 4+ players.
  * Various low risk exploit's we spotted have been patched.
  * GSC Script execution order has been changed to match the same as IW5. This should mean making mods for both games follows a similiar process of execution.
  * The t6r from the start of our client is now removed, everything will now use %localappdata%/storage/t6/
  * `cg_fovScale` will no longer keep resetting after closing Plutonium.

## r1953-r2016

* IW5:
  * Added `g_playerCollision` Dvar, this enables/disables Collision between players
  * Added `g_playerEjection` Dvar, this enables/disables "bouncing back" when colliding with other players
  * Added `replaceFunc` GSC Function, this allows "hooking" GSC Functions without recompiling the entire file
  * Added chat `say` and `tell` commands to dedicated servers

## r1824-r1953

* T4:
  * Fix bots switchToWeapon() GSC not working
  * Fix Quick Revive not working as intended while playing solo

* IW5:
  * General GSC improvements
  * Shipping updated _class.gsc with fixes to prevent exploits with custom classes
  * Fix for GSC unloading on soft restarts (e.g. new round)
  * Fix wrong mapname / gametype bug on loadscreen
  * Fix IW5 crashing on first ever boot (When steam_api.dll is in game folder)
  * Fix S&D freezing

* T6:
  * Fix demos crash and custom script assets
  * Fix client crash when gsc files had uppercase letters in their file name
  * Fix overwriting specific game scripts on T6ZM

## r1790 - r1824 - MW3 & BO2 GSC Modding update

* IW5:
  * Full GSC support is included! You can now load both custom scripts and replace any game script. Chaiscript is now REMOVED! Old Chaiscript scripts will no longer work, we suggest porting the script over to GSC. Check out the modding section of the documentation for a [guide on how to load GSC Mods in IW5](./modding/loading-mods.html#iw5).
    If you technical assistance with your mods post in the [MW3 Modding Support & Discussion section](https://forum.plutonium.pw/category/28/mw3-modding-support-discussion) on our forums.

* T6:
  * You can now load completely custom scripts without having to replace _clientids.gsc but you still need to compile it.

## r1715 - r1790

* T4:
  * Structural fixes - Our developers have been working to reverse engineer the data structures that the game uses, we use this to reduce the chances of bugs or crashes.
  * Fixed bots being stuck in `CS_ZOMBIE` state when kicked from a server. They should no longer stick around when you run the status command.
  * Bots can now use GSC `setspawnweapon` and `switchToWeapon` properly.

* T6:
  * Killfeed fix - a change we introduced caused the killfeed to appear broken, this has been patched to return it back to normal.
  * `iprintln()` fix - same as above, this now fixed.
  * GSC errors no longer kill the entire game and instead return you to the main menu, this should make things easier for the mod developers to debug their mods.
  * `sv_sayName` dvar introduced, server owners can use this in their config files to change the Console: name to a name of their choice. IE `Console: IW4MADMIN is now running!` could be changed to `CLANNAME: IW4MADMIN is now running!`

## r1715 - r1728 - Hotfix

* IW5:
  * Fixed a bug that caused mp_rust and mp_highrise to crash.

* T4:
  * Fixed a bug that caused sound to stop and guns / doors / scripts to break when the final player slot was filled and then left. This should increase T4SP (Zombies / CO-OP) stability on the base game maps.
  * UPnP now supported on both T4SP and T4MP.
  * Fixed a typo in our default server configs for Zombies, Shi No Numa would not load as the map name was incorrect. It should be nazi_zombie_sumpf NOT nazi_zombie_swamp. Please correct this yourself or grab a fresh copy of the configs from [GitHub](https://github.com/xerxes-at/T4ServerConfigs/archive/refs/heads/main.zip).

<Alert variant="tip">

If you want to host a session, ensure that UPnP is marked as Enabled in the Network tab. If the UPnP status is disabled, you will need to manually forward your ports in order for other people to be able to join. Common issues with UPnP:

Your network is set to Public: Change your network to Private in your Windows settings.
UPnP is disabled on your router: Enable UPnP on your router to make this feature work.
Your router does not support UPnP: Either port forward the game port manually or buy a better router.

</Alert>

## r1205 - r1715 - Plutonium T4 Release

* IW5:
  * Intervention sounds fixed.
  * Added more attachments for the Intervention.
  * Base-game weapon fixes.
  * Added rocket jump support.
  * Added experimental GSC support! Watch this space for future development! Smart bots might be possible with enough time!
  * Updated ultrawide patch, aspectratio is automatically adjusted based on screen resolution

* T4:
  * **First release of T4! - Submit your gameplay clips using the #PlutoniumT4 hashtag on Twitter!**
  * Dedicated servers for Multiplayer and Zombies / CO-OP. Use F10 and HOME keys to make the menu appear and disappear. There may be a shortage of servers on release, this should fix itself as more people begin hosting them.
  * `sp_minplayers` dvar implemented for SP dedis, allows a server owner to configure the minimum amount of players before a zombies/co-op mission starts. If this is set to 2, the game won't start until 2 players join and if a 3rd player joins they will fall in a void until the map restarts.
    Just use the map_restart command to restart the level. For Zombies, you will sit on the loadscreen until the minimuim amount of players has been reached.
  * Implemented `modStats` dvar. This lets server owners decide if their mod should use normal stats or it's own custom stats.
  * Unlocked `cg_fov` dvar. No more max FOV of 80.
  * Added `g_patchRocketJumps` to enable/disable rocket jumps.
  * Allow `connect` command to be used while already connected to a server.
  * Fixed base-game exploits.
  * Added discord rich presence. (Games invites, joining etc via Discord)
  * Punkbuster removed, Plutonium's Anticheat added.
  * Zombies / Co-Op map / mod downloading - no more making sure you have the map downloaded, just click to join a server and the game will download the required files, just like in Multiplayer.
  * `cg_fovscale` and `cg_fovmin` has been unlocked and you can now enter these console commands at any time.
  * Removed profile system which causes new players on Steam to be unable to play online due a glitch. Plutonium doesn't need this, we use our own.
  * We've incorporated many features from the T4M mod which many players liked to use, let us know if anything is missing and we can see if we can add it.
  * Game controller binds automatically execute when the game starts, saving you having to manually enter the console command.
  * `unlockall` command can be used to skip the grind and be max rank and max prestige with everything unlocked.
  * The game will now check `AppData\Local\Plutonium\storage\t4\mods` for any game mods, it will also check the normal location too for backwards compatability with auto installing mods.
  * Added menu option to allow 16x AA, the default max is 4x.
  * Added zombies workaround - players who connect later than other players will not spawn until the start of the next round, this avoids them spawning into a wall or other objects.
  * Implemented ultrawide patch, aspectratio is automatically adjusted based on screen resolution

* T6:
  * Fix for user command overflow some users were getting.
  * Implemented [sv_cheats feature bounty](https://forum.plutonium.pw/topic/7860/feature-t6zm-t6mp-reimplementation-of-sv_cheats-dvars-and-commands).
  * Implemented dedicated server demos. Theatre mode is on it's way to being fully functional.
  * Implement "old" config file system, config files are no longer encrypted.
  * Added `setClientDvar` function for GSC scripts.
  * Implemented ultrawide patch, aspectratio is automatically adjusted based on screen resolution.
  * `cg_fovMin` / `cg_fovScale` unprotected.

## r1177 - r1205 - g_randomSeed

* IW5 & T6:
  * `g_randomSeed` is now a server dvar. Servers can set this to 1 or 0. It is set to 1 (On) by default. It can be set in your server config file along with other dvars.

<Alert variant="tip">

`g_randomSeed` causes the server to set a random seed when calculating bullet spread randomness.
When this is enabled, nobody is able to fully accurately calculate bullet spread, which is what Silent Aim hackers use.

Basically: When on, if a hacker is using silent aim, it renders their aimbot either useless or highly ineffective at longer distances.
It has no effect when Aiming Down Sight but any hacker using that when ADS'ing will be very noticeable for server admins to ban.
Although the effect is less harmful to hackers at closer ranges, doing this increases the chances of somebody spotting the hacker far quicker and server admins can ban them from their servers.

The main focus for this is to help Trickshotters, whilst we are working on more improvements, this should atleast stop those boat bangers who suddenly got so good. Or atleast make it painfully obvious if somebody is trying to use an aimbot. Hackers are especially harmful to the trickshotting community.
Hacking makes it too easy to fake clips. Who suddenly got very good?? If the server has g_randomSeed set to 1 and the boat bang was without ADS, you can rest assured, it was probably legit.
Server owners can ofcourse set this to 0 and the randomization for the bulletspread will be predictable as is normal in the base game. However silent aim hacks will be fully accurate.

We did testing with this to ensure it wasn't noticeable and it's certainly not and the gains far outweigh the losses.
To clarify - if you are not using any hacks, this update will not no affect on you - the bullet randomization always happens and is always there, this change will only make it so the randomization isn't predictable. Which humans couldn't do anyway. Hence it has no effect on you if you do not hack.

We hope this shows we are listening and we obviously cannot discuss much in terms of combating hackers but we hope it's a step in the right direction. It won't fix the problem, you can never stop them all, but it is another tool to make it harder for them.

</Alert>

## r1166 - r1177

* IW5:
  * Fix slow motion in killcams - they should now be smooth. Trickshotters everywhere will be so happy. This was a [bug bounty set by a community member](https://forum.plutonium.pw/topic/7377/iw5-slowmode-killcam-fix).

* T6:
  * Fixed sv_mapRotation for zombies - servers will now follow a map rotation correctly without kicking out players out at the end of the game. This was a feature bounty - [more details can be found here](https://forum.plutonium.pw/topic/7226/bug-t6zm-working-zm-server-map-rotation/).
  * Fixed multiple bugs that caused instability on zombie servers.
  * Fixed various client crashes.

## r1163 - r1166

* IW5:
  * Kick commands now run on the game thread, fixing possible issues when running custom scripts.

* T6:
  * Fixed a bug that caused the game to crash when searching for servers in the server browser.

## r1137 - r1163

* IW5:
  * Fix demos not saving correctly - when you check Theater mode now, each match should be recorded correctly.
  * Fix various server memory related issues that caused instability.
  * Patched truck collision on Rust to avoid people glitching themselves into the truck.
  * Fix some party related crash when playing a private match.
  * Fixed call vote button. (sometimes appeared behind the friends button on the escape menu)
  * Fixed DSR parsing, DSRs are now always parsed when connecting to a dedi and also reset properly when connecting to a new match. This means private match custom settings no longer linger after leaving the match.
  * Fixed proficiencies for the Intervention - this was accidentally set to SMG instead of Sniper. You shouldn't be able to add Range proficiency to a god damn sniper rifle.

* T6:
  * Fixed `fast_restart` command for Zombies - server owners can now send the `fast_restart` command via console to quickly restart the map.

## r1065 - r1137 - Christmas Update

* IW5:
  * Added the Intervention. You can now select the Intervention from the Create a Class menu. This includes full camo support as well as weapon attachments and proficiency. Due to how IW5 handles lighting, gold will not look very good on most maps, we suggest using a custom camo.
    Check the bottom of this thread for some screenshots and a video of some example custom camos.
  * Added preview version of Highrise. This is a compromise between waiting and playing, due to the buggy state of the map we have decided to only allow Contributors to host Highrise on dedicated servers. If you are not a contributor and still want to host the map, you would need to make a custom game.
    Everybody can play the map on any server that can host it. The map currently has broken shadows and missing objects / objects randomly disappearing. (The crane can scare the hell out of you now)
    As we fix the map we will push further updates so you will be able to see the progress as we make it. Once the map is finished we will let everybody host it.
  * Fixed performance and input issues on Windows 10. Windows 10 users may have noticed that MW3 has a cap to FPS that can't seem to be moved, this is caused by some inefficient methods being used by the game to support Windows 7. Due to not supporting Windows 7 anyway, we have optimized this for Windows 10 which has improved game performance for most of our testers
    and some have also reported feeling like the game is more responsive to mouse input.
    You may see more GPU or CPU usage when playing Plutonium IW5 now as these are not bottlenecked by the game anymore.
  * Main menu FPS unlocked. The main menu and other menu's will no longer cap FPS allowing them to feel smoother than ever.

* T6:
  * Added `sv_allowDof` to allow servers to prevent people using Depth of Field exploits. This will be useful for competitive server hosters who want to ensure DoF exploits cannot be used. Options are 1 to allow DoF and 0 to force DoF off when playing on your server.
  * Fixed a crash with T6 zombies that caused some players game to quit to desktop.

* General:
  * General bugfixes across all games, launcher, backend and forum.
  * Fixed steam presence. Steam now tracks your game hours again & Plutonium is visible to your friends on Steam again. A Steam update broke this.
  * Fixed RCON issues with IW5/T6 that caused server crashing or instability.

## r920 - r1065

* IW5:
  * UPnP support has been released, you should now be able to join your friends without any hassle! (Disclaimer: UPnP is not enabled on every router.).
  * Controller fixes. (Including a bug fix that makes picking up weapons require y the player to hold the use button).

* T6:
  * Updated the friendslist, joining now works properly (double click your friend from the F10 menu to join).
  * UPnP support has been released, you should now be able to join your friends without any hassle! (Disclaimer: UPnP is not enabled on every router.).
  * General stability improvements.
  * Various tournament fixes.

<Alert variant="tip">

If you want to host a session, ensure that UPnP is marked as Enabled in the Network tab. If the UPnP status is disabled, you will need to manually forward your ports in order for other people to be able to join. Common issues with UPnP:

Your network is set to Public: Change your network to Private in your Windows settings.
UPnP is disabled on your router: Enable UPnP on your router to make this feature work.
Your router does not support UPnP: Either port forward the game port manually or buy a better router.

</Alert>

## r877 - r920

* T6:
  * Added `zombies_minplayers`, this dvar allows server hosters to set a minimum amount of players before the game starts.
  * Friendslist. You can now join your friends from the F10 menu.
  * Setting the max amount of players for dedicated servers now works again.
  * General stability fixes.

## r827 - r877

* T6:
  * Fixed ranked mode on dedicated servers, this now allows players actual ranks to display in-game. This also means that you get XP for scorestreaks, assists etc instead of just kills.
  * Fixed tickrate on dedicated servers, it used to be set to 10Hz due to a bug, it is now set to 20Hz like on Steam.
  * Plutonium Branding added to the top right of the screen, this might be changed in the future.
  * Fixed custom games start button.

* Launcher:
  * The updater tool the launcher uses now features an UI.

## r803 - r827

* IW5:
  * General stability improvements.
  * UltraWide screen improvements.

<Alert variant="tip">

If using native ultrawide monitors , change `r_customAspectRatio` to `2.3333` (21/9 or `3.55556` if 32:9).
Otherwise use [this Calculator](https://calculateaspectratio.com/) and calculate a 21:9 or 32:9 resolution that fits into your monitors resolution.

* set `r_aspectRatio` to `custom (4)`.
* set `r_customAspectRatio` accordingly (`2.3333`).
* set `r_customMode` to the res you calculated (eg. `1386x594`).
* Ensure you're using windowed mode.

</Alert>

* T6:
  * The serverlist has been updated to allow more functionality.
  * The serverlist also now scales with your resolution.
  * You can now sort by players, apply filters, see what round a zombie server is on etc.
  * You can also search for specific servers.

<Alert variant="tip">

Why not swap to the old serverlist?
The old serverlist used alot of resources on older CPU models which reduced frame rates.
Since we have remade the entire BO2 Client, the old menu system will not work as it refuses to load and rather than spend another 4 months delaying the update because of this, we decided to use ImGUI which should allow us to keep the CPU usage lower and still provide a serverlist.

</Alert>

## r791 - r803

* IW5:
  * Servers use less CPU resources now, this was due to a bug that wasn't spotted related to server heartbeats.
  * Steam integration works again.

* T6:
  * IWI images can now be loaded from `%localappdata%\Plutonium\storage\t6\images` (for custom camos). Check out [the guide in the modding section](./modding/loading-textures) on how to do it.
  * Stability improvements.
  * Added steam integration & steam overlay.
  * Fixed an issue where the game would not work on other languages than English.
  * Fixed a crash related to the in-game console.

## r742 - r791

* General:
  * Piry.exe is no longer used, The Plutonium Launcher (Plutonium.exe) is used instead.
  * Plutonium.exe will be used to authenticate your forum user account and launch the game.
  * AntiCheat has been enabled. (This is the same anticheat as IW5, as always it won't catch everything but should help.)
  * Various crashes and exploits have been fixed.
  * Unlock All is now done by opening the console and typing `unlockall`. You do not need to restart.
  * Discord Rich Presence has been added.
  * You now start the game with the Plutonium Launcher (plutonium.exe) which auto checks for updates when it starts, getting you up to date. Do not use `t6rmp.exe` or `t6rzm.exe`!

* T6:
  * ServerList is now opened by pressing F10 or Home.

## r687 - r742 - Native Controller Support

* IW5:
  * Plutonium IW5 has been updated to include Native Controller Support, meaning Xbox 360 and Xbox One controllers should be plug and play, this includes menus for configuratioa and the correct button icons for both Xbox and Playstation.

<Alert variant="warning">

Please note the controller will not work for menu navigation or killstreaks and has no aim assist.
PlayStation controllers will need to use DS4Windows, however input delay should still be reduced!

</Alert>

<Alert variant="warning">

**Known Issues:**

* Picking up a weapon is done when X or Square is pressed, this is because the PC version of the game doesn't support the controller button hold function. The same is true for scoreboard.
* Killstreaks cannot be used, this is because ActionSlot 4 is the only killstreak slot which is the same between PC and Console.

We will attempt to get workarounds for these in future updates but cannot say that we will ever 100% fix them.

</Alert>

## r619 - r687

* IW5:
  * Splashes fixed (Multi kill, Triplekill, captured objective text on the side).
  * Issue with user avatars fixed.
  * Hardcore mode can now change killcam & spectator options in DSR.
  * Change team / change class is now blocked on game modes where it is not allowed (same applies for DSR settings).
  * rcon output buffer relocated to allow bigger responses (fixes status command being truncated).

## r600 - r619 - The Aiming Update

* General:
  * Backend Improvements - Improvements made to our backend to improve reliability of the serverlist and other backend elements.

* IW5:
  * Aim Down Sight Sensitivity - We've reworked how cg_fov and cg_fovScale behave. Steam MW3 works by slowing down your sensitivity when aiming down sights, pretty standard for 2012 but in 2020 it's hard to adjust back too when playing modern games. Plutonium IW5 now bases this on your FOVScale.
  * Mouse input reworked - That annoying mouse acceleration feeling some players report should be sorted now. This was caused by how the base game handles mouse inputs, again, the effects of an aging game.
  * Forum Avatar Card Icons Fix - Players were reporting seeing their own forum avatar instead of other people's, this has been corrected.
  * Server Plugin Improvements - These now show a windows error code if they fail to load and VirtualProtect must now be called if you wish to edit the memory of the dedicated server.
  * Dedicated Servers - More fixes to aid in stability of dedicated servers and avoid them crashing.
  * Bounces - Bounces are now off by default to avoid out of map abuse caused by unaware server owners.
  * Menu Blur - A blur has been added to the menu background when opening certain menus, such as Create a Class. This should make it easier to see what options you have selected. Players reported that they struggled to see certain options.

<Alert variant="tip">

Examples:

* `cg_fov 90` and `cg_fovScale 1` = 90 FOV total.  This will result in only your hipfire FOV changing. Sensitivity is different when zooming in because of lower FOV.
* `cg_fov 40` and `cg_fovScale 2.25` = 90 FOV total. Your Aim Down Sights FOV (allowing you more situational awareness at the cost of less detail down sight) looks the same as hipfire FOV. Sensitivity is now the same when hipfiring and when Aiming Down Sights because the FOV is the same.
* `cg_fov 70` and `cg_fovScale 1.3` = 90 FOV total. Aiming Down Sights is slightly zoomed in compared to hipfire. Sensitivity is faster than in regular MW3 because of your total FOV.

To workout the FOV when using `FOVScale`, you need to take your `cg_fov` and multiply it by your `FOVScale`. For example if you'd like a standard FOV of 80 (like I use) it would be `cg_fov 65` and `cg_fovScale 1.32`.

We've tested this system with our testers and a few known trickshotters and streamers and they all agree it feels better, hence we are pushing this in this update. If you don't want to use this system, simply keep your cg_fovScale at 1. You may find you need to experiment with values to find some that you find comfortable.

</Alert>

## r554 - r600

* General:
  * Forum upvotes - Posts can now be upvoted by clicking the thumbs up icon in the bottom right, this can be used to show appreciation for a post.

* IW5:
  * Streamer Mode - `cl_enableStreamerMode 1` in the console to activate it. This hides the server name and IP address on the scoreboard, disables Discord rich presence and disables forum avatar cardicons.
  * Forum Avatar CardIcons - Contributors can set their cardicon to FNG and it will show their forum avatar in game. Avatars must follow forum rules or action will be taken, including game bans. [Have a look at our forum rules](https://forum.plutonium.pw/topic/15/forum-rules) if you're unsure, there is a "use forum avatar" button on the callsign menu in-game which will set your cardicon to FNG.
    We plan to let everyone use this feature from the 01/06/2020 (dd/mm/yyyy) and use this month to ensure it cannot be abused. Transparency is supported.
  * Discord Rich Presence - now supports joining a game directly through Discord and inviting via discord.
  * AK74-u menu fixes - users reported some menu bugs which we have fixed.
  * Dedicated Server Crash fix - More stability patches for dedicated servers.
  * `cg_fov` limits extended - The minimum is now 40 and the maximum is 200. This used to be 65 - 180. This is intended to be used with `cg_fovScale`. Good luck using 40 or 200 FOV without using `cg_fovScale` too.
  * mp_test - Basically a port of iw4_credits from MW2, used by the developers to test map porting. Only mentioned here to avoid people wondering what it is. Technically servers can include it in their map rotation too, but why would you want to do that?

* Launcher:
  * Launcher Protocol handler - The Plutonium launcher now supports the `plutonium://` protocol. `plutonium://play/iw5mp` for example.

## r499 - r554

* IW5:
  * Out of memory fixes for servers. Increasing their stability.
  * Rust has been ported from MW2. It is almost a near perfect port. Gone are the bugs from our 2017 release. All game modes are working except Drop Zone which requires some GSC editing which isn't worth our time. A mod could bring this back however.
  * AK-74u has been ported and ready to use. This features fully working camos and attachment support + proficiency and leveling. If you want to make your AK-74u max weapon rank right away then enter these 2 commands in your console.
    * `setPlayerData weaponRank iw5_ak74u 30`
    * `setPlayerData weaponXP iw5_ak74u 179600`
  * Clantags are now displayed in chat with colour removed. Clan tag colours remain on the scoreboard.
  * Create a Class now locks guns if you are not the correct level, previously everything was unlocked from level 4.
  * In-game console reworked with autocomplete support.
  * `cg_drawFPS` does not reset every time you launch the game anymore.
  * We've added an ingame friends list - this can be accessed from the main menu or when in a match. You can see what server your friends are playing and double click to join them. More features to this are expected in future updates. [To add friends check this guide](https://forum.plutonium.pw/topic/559/how-to-add-friends-on-plutonium).
  * Discord Rich Presence. Discord will now show what game you are playing, which server you are in and some info about that server.
  * `waypointIconWidth` / `waypointIconHeight` now saves to config. These are used to determine how big the objective markers are. Some people like them way smaller.
  * Scoreboard now shows the correct hostname, this is now taken from the hostname that is set when registering a server key.

* Launcher:
  * Some slight Launcher UI changes.

## r363 - r496

* General:
  * The backend will now force a 2nd instance of the game to error if it tries to join a game whilst you are already in a game.

* IW5:
  * `sl_noTrickshot` has been added, open the console and type sl_noTrickshot 1 to remove any servers from the serverlist that have trickshot in their name. This should help players with a normal playstyle find the games they want quicker. Type `sl_noTrickshot 0` to swap this back to default and see all servers.
  * `com_maxfps` now sets your max FPS correctly without making you teleport.
  * Start button for private match has been fixed.
  * Bot command has been added, this can be used in private match by typing `bot` into the console to spawn a bot. Entering the command again will spawn another bot. These bots simply walk in circles and shoot.
  * `cg_fovScale` has been unlocked.
  * Server name now appears on the scoreboard so you can quickly check what server you are in.
  * UltraWide support has been added, so all you boys with curved monitors can enjoy the game! set `r_aspectRatio` to 4 (custom) and then change `r_customAspectRatio` to the value corresponding to your screen. This value should be set to `2.33` for 21:9 screens (21 / 9 = 2.33). Run `vid_restart` afterwards to apply these changes.
  * Theater should be fixed now and correctly recording games.
  * Main menu fixes have been put in place to make it more stable and easier to access certain buttons.
  * Game rules now reset before joining another match. No more infection game rules overflowing into normal matches.
  * Custom cardtitle background's have been fixed, you're not forced to use FNG background if you use a custom cardtitle anymore.
  * Steam now shows you as playing Plutonium IW5.
  * New exploit found and patched by Snake, this exploit is in the original MW3 base game and would allow you to crash another players game.
  * Names now show as green or red, and not multicoloured. This was causing confusion and led to deaths due to thinking somebody was friendly.
  * If you attempt to join a server with a DLC map you don't have, rather than a hard crash you will now be booted to the main menu and given an error message.
  * Hovering your mouse over a map name will show a preview of the map.

* Launcher:
  * Launcher now lets you change game directory again..

## r496 - r499

* IW5:
  * Extra patching of the exploit mentioned in the last update.
  * Bans reversed that triggered overnight due to exploit abuse.

<Alert variant="tip">

If you get the "checking for saved credentials" bug then please browse to `%localappdata%/plutonium` and delete `config.json`.

</Alert>

## r356 - r363

* IW5:
  * `cg_fovScale` is now unlocked & saved to config. We had a good few requests for this.
  * The bootstrapper can only run the game once now, this was found to be triggering anticheat bans when people opened the game twice. (Quite how or why they did that we will never know).
  * Process no longer runs in high priority. if you want it to run in high priority, you can add -high-priority to the command line. This caused mouse problems for some players so this has been swapped, this was a MW3 base game problem. If you still have problems, ensure your polling rate is under 125Hz.
  * The game no longer touches input devices (microphones). this might fix the issue where people with microphone-related software on their machine cannot launch the game. Some people reported static noises, this is caused by the MW3 base game, it would max their input volume when launched and some people had the option "listen to this device" enabled.
  * Rcon bug found that caused server instability, this has been patched and confirmed as working by various server owners.
