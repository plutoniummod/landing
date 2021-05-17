# Loading Mods into Plutonium

## Table of Contents

[[toc]]

## T6

### Requirements

[GSC Toolkit](https://drive.google.com/file/d/1j_ocjFCQsFaWqF2-PfdoJt2nF_EpNL_G/view?usp=sharing) (Required to compile your script)

---

__Example Scripts__
- [9 Perks for Zombies](https://forum.plutonium.pw/topic/29/all-perk-slots-unlock-script-zombies)
- [Jugg for joining players](https://forum.plutonium.pw/topic/112/jugger-for-new-players-joining-at-or-after-round-8-zombies)
- ["A cat has 9 lives"](https://forum.plutonium.pw/topic/449/mob-of-the-dead-mod-a-cat-has-9-lives)

---

### Getting Started
1\. You can write/download any GSC of your choice. If you are writing it from scratch/have the source code, note that you will need to compile it, which we will talk about in this post.

::: warning
If you are writing your own GSC, you must have an `init()` or `main()` function somewhere. This function is called the 'entry point', and it's a function the game engine is familiar with and will call.
:::

2\. For this tutorial, we are going to be writing and using this GSC as a reference.

```c
init() // entry point
{
    level thread onplayerconnect();
}

onplayerconnect()
{
    for(;;)
    {
        level waittill("connected", player);
        player thread onplayerspawned();
    }
}

onplayerspawned()
{
    self endon("disconnect");
    for(;;)
    {
        self waittill("spawned_player");
        self iprintlnbold("^2GSC from %LocalAppdata%\\Plutonium\\storage\\t6\\scripts\\mp\\test.gsc ^1(Compiled)");
    }
}
```

3\. Using the GSC Compiler (from GSC Toolkit), simply drag and drop your raw GSC script ontop of `Compiler.exe` and it should spit out a compiled version.

![compiling process](https://i.imgur.com/OWtguHd.gif)

3a\. If you get an error, make sure your script isn't already precompiled (open it, and if it looks like gibberish, it is already compiled)  

![Error from Compiler](https://i.imgur.com/JgwqeCy.png)

3b\. Take your compiled script and put it in `%localappdata%\Plutonium\storage\t6\scripts\mp` or `%localappdata%\Plutonium\storage\t6\scripts\zm` depending on which mode it is for.

**(YOU MOST LIKELY WILL NOT HAVE THIS FOLDER, PLEASE CREATE THEM IF THAT IS THE CASE)**  

4\. When launching your server or a custom game, you will know if all has gone well or not if the console prints `Custom script 'scripts/mp/yourScriptName' loaded`.

![Success](https://i.imgur.com/oVlCBnI.png)

5\. Enjoy your new GSC script!

![In Game](https://i.imgur.com/bun6iFx.png)

## IW5

### Getting Started⠀

1\. Navigate to the IW5 Plutonium Folder by pressing `Win+R` and pasting `%localappdata%\Plutonium\storage\iw5` into it, and hitting `Ok`.

2\. Create a new folder here called `scripts`.

![img](https://i.imgur.com/4KOfafh.png)

3\. Put any amount of GSC file(s) in here, I will be using the following code as an example.

::: warning
If you are writing your own GSC, you must have an `init()` or `main()` function somewhere. This function is called the 'entry point', and it's a function the game engine is familiar with and will call.
:::

```c
init() // entry point
{
    level thread onplayerconnect();
}

onplayerconnect()
{
    for(;;)
    {
        level waittill("connected", player);
        player thread onplayerspawned();
    }
}

onplayerspawned()
{
    self endon("disconnect");
    for(;;)
    {
        self waittill("spawned_player");
        self iprintlnbold("^2GSC from %localappdata%\Plutonium\storage\iw5\scripts\example.gsc");
    }
}
```

4\. Verify your GSC looks like mine, and is in the correct location.

![img](https://i.imgur.com/LSrZkI0.png)

5\. Open MW3, and start a new Private Match, your GSC script should load.

![success](https://i.imgur.com/X2qZtj5.png)

## T4

### Loading Mods / Custom Zombies Maps

We support both the vanilla game folder and the Plutonium folder for mod loading.

::: danger
Currently, the `CoDWaW\mods` folder is buggy, please move your mods to the `%localappdata%\Plutonium\storage\t4\mods` folder to avoid things like menu corruption, or GSC errors.
:::

You can place your mod in either of these places:
* `%localappdata%\Activision\CoDWaW\mods`    **[BUGGY ATM, MOVE YOUR MODS/MAPS FROM HERE TO THE DIRECTORY BELOW.]**
* `%localappdata%\Plutonium\storage\t4\mods`   **(Recommended)**

**We suggest using the Plutonium folder where possible though, if you crash due to a mod, try moving it to the Plutonium Mods folder instead.**

If you are installing a custom zombies map that comes in an `.exe`, just running it and installing that way should be enough, as they place those in the first folder, although again, you might need to move it if you encounter issues.

**Note:** Mods for multiplayer must have `mp_` at the front of their folder.

![Mods showing up](https://i.imgur.com/Vn95lq9.png)

---

### Loading Custom Maps (MP)

We support both the vanilla game folder and the Plutonium folder for loading client-side custom multiplayer maps.

You can place your mod in either of these places:
* `%localappdata%\Activision\CoDWaW\usermaps`
* `%localappdata%\Plutonium\storage\t4\usermaps`   **(Recommended)**

Once the map is installed, you must load a mod first. You can do something simple like `/fs_game mods/mp_custommaps; vid_restart` followed by `/map mp_yourmapname` and it should load right up.
