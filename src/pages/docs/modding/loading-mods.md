# Loading Mods into Plutonium

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

1\. You can write/download any GSC of your choice. If you are writing it from scratch/have the source code, note that you will need to compile it, which we will talk about later.

<Alert variant="warning">

If you are writing your own GSC, you must have an `init()` or `main()` function somewhere. This function is called the 'entry point', and it's a function the game engine is familiar with and will call.

</Alert>

2\. For this tutorial, we are going to be writing and using this GSC as a reference.

```cs
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

![compiling process](/images/docs/modding/loading-mods/OWtguHd.gif)

3a\. If you get an error, make sure your script isn't already precompiled (open it, and if it looks like gibberish, it is already compiled)  

![Error from Compiler](/images/docs/modding/loading-mods/JgwqeCy.png)

4\. Navigate to the T6 Plutonium Folder by pressing `Win+R` and pasting `%localappdata%\Plutonium\storage\t6` into it, and hitting Ok.

5\. Create a folder called `scripts`, then inside that folder, create two new folders called `mp`, and `zm`.

![img](/images/docs/modding/loading-mods/RWrHJt5.png)

6\. Take your compiled script and put it in `%localappdata%\Plutonium\storage\t6\scripts\mp` or `%localappdata%\Plutonium\storage\t6\scripts\zm` depending on which mode it is for.
If your script should always be loaded no matter the game mode copy it to `%localappdata%\Plutonium\storage\t6\scripts`

7\. When launching your server or a custom game, you will know if all has gone well or not if the console prints `Custom script 'scripts/mp/yourScriptName' loaded`.

![Success](/images/docs/modding/loading-mods/oVlCBnI.png)

8\. Enjoy your new GSC script!

![In Game](/images/docs/modding/loading-mods/bun6iFx.png)

## IW5

### Getting Started⠀

1\. Navigate to the IW5 Plutonium Folder by pressing `Win+R` and pasting `%localappdata%\Plutonium\storage\iw5` into it, and hitting Ok.

2\. Create a new folder here called `scripts`.

![img](/images/docs/modding/loading-mods/d3AnJ4R.png)

3\. Put any amount of GSC files in here, I will be using the following code as an example.

<Alert variant="warning">

If you are writing your own GSC, you must have an `init()` or `main()` function somewhere. This function is called the 'entry point', and it's a function the game engine is familiar with and will call.

</Alert>

```cs
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

![img](/images/docs/modding/loading-mods/LSrZkI0.png)

5\. Open MW3, and start a new Private Match or Dedicated Server, your GSC script should load.

![success](/images/docs/modding/loading-mods/X2qZtj5.png)

## T4

### Loading Mods / Custom Zombies Maps

{/*
We support both the vanilla game folder and the Plutonium folder for mod loading.
*/}

<Alert variant="danger">

Currently, loading mods from the `%localappdata%\Activision\CoDWaW\mods` folder is buggy, please move your mods to the `%localappdata%\Plutonium\storage\t4\mods` folder to avoid things like menu corruption, or GSC errors.

</Alert>

1. Navigate to the T4 Plutonium Folder by pressing `Win+R` and pasting `%localappdata%\Plutonium\storage\t4` into it, and hitting Ok.

2. Create a folder called `mods`

![img](/images/docs/modding/loading-mods/Zzpf3O5.png)

3. Place any mods in that folder.

{/*

You can place your mod in either of these places:

- `%localappdata%\Plutonium\storage\t4\mods`   __(Recommended)__
- `%localappdata%\Activision\CoDWaW\mods`    __[BUGGY ATM, MOVE YOUR MODS/MAPS FROM HERE TO THE DIRECTORY ABOVE.]__

__We suggest using the Plutonium folder where possible though, if you crash due to a mod, try moving it to the Plutonium Mods folder instead.__

*/}

If you are installing a custom mod that comes in an `.exe`, run the exe, then move the mod folder from `%localappdata%\Activision\CoDWaW\mods` to `%localappdata%\Plutonium\storage\t4\mods`.

__Note:__ Mods for multiplayer must have `mp_` at the front of their folder.

![Mods showing up](/images/docs/modding/loading-mods/6qchlaS.png)

---

### Loading Custom Maps (MP)

{/*
We support both the vanilla game folder and the Plutonium folder for loading client-side custom multiplayer maps.

You can place your mod in either of these places:

- `%localappdata%\Activision\CoDWaW\usermaps`
- `%localappdata%\Plutonium\storage\t4\usermaps`   __(Recommended)__

*/}

1. Navigate to the T4 Plutonium Folder by pressing `Win+R` and pasting `%localappdata%\Plutonium\storage\t4` into it, and hitting Ok.

2. Create a folder called `mods`

![img](/images/docs/modding/loading-mods/Zzpf3O5.png)

3. Place any custom maps in that folder.

Once the map is installed, you must load a mod first. If you do not have a mod to go along with your custom map, you can load a dummy mod by [opening the console](/docs/opening-console) and typing `/fs_game mods/mp_custommaps; vid_restart` followed by `/map mp_yourmapname` and it should load right up.

## T5

### Loading Mods / Custom Zombies Maps for BO1

1. Navigate to the T5 Plutonium Folder by pressing `Win+R` and pasting `%localappdata%\Plutonium\storage\t5` into it, and hitting Ok.

2. Create a folder called `mods`

![img](/images/docs/modding/loading-mods/bo1-mods.png)

3. Place any mods in that folder.
