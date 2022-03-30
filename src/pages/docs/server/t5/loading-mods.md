# Loading mods on a dedicated server

## Where do I put the mod?

1. Navigate to the T5 Plutonium Folder by pressing `Win+R` and pasting `%localappdata%\Plutonium\storage\t5` into it, and hitting Ok.

2. Create a folder called `mods`

![img](/images/docs/server/t5/loading-mods/Zzpf3O5.png)

3. Place any mods in that folder.

---

## Editing your start.bat file

Next, open your server's start.bat file and edit the line that says `set mod=""` to add your mod. For example, if your mod is called `mp_mymod` that line should say: `set mod="mods/mp_mymod"`

![Screenie](/images/docs/server/t5/loading-mods/O3nMhCZ.png)

---

## Setting up FastDL

If you want to setup FastDL (recommended) to allow players to download your mod quicker, see [Setting up FastDL](/docs/server/t5/fastdl).
