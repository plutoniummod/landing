# How to repair your game files

## The repair Process for T4 and T6

<Alert 
  variant="info" // ... or info, danger.
>
If you torrented the game, follow these steps. If you used Steam, follow [the Steam repair guide](#the-repair-process-for-t4-and-t6-steam)
</Alert>

### Requirements

* [qBittorrent](https://www.fosshub.com/qBittorrent.html) (or any other torrent client)
* The .torrent file of the game you want to repair:
  * [For T4](http://dss0.cc/alterwarez/download/pluto_t4_full_game.torrent)
  * [For T6](http://dss0.cc/alterwarez/download/pluto_t6_full_game.torrent)

1\. Open the .torrent file for the game you wish to repair in QBittorrent, if QBittorrent is the only torrent client you have installed simply double clicking the torrent file should open it right away.

2\. You will be prompted with an overview of the files the torrent contains, select your **game folder** (depending on which game you want to repair) as the download location.

3\. Next comes the most important step: **Select "don't create subfolder" from the "content layout" dropdown menu (in older versions of QBitorrent this will be a checkbox called "create subfolder" or "keep top-level folder" which you have to untick)**.

![qbittorrentoverview](/images/docs/repair/cad1CXU.png)

4\. Hit OK to start the verification/download process, QBittorrent will now check the files in your game folder against the ones in the torrent and download missing or mismatching ones.

5\. As soon as the download reached 100% and the status "seeding" it is complete and can be removed from QBittorrent (right click -> delete).

Congratulations, your game files should now be repaired.

## The repair Process for T4 and T6 (Steam)

[Official Steam guide to repair your game](https://help.steampowered.com/en/faqs/view/0C48-FCBD-DA71-93EB)

1. Go in your Steam library

2. Right click on your game then click on Properties

3. In the properties menu go in the **Local files tab** and click on **Verify integrity of game files**

## The repair Process for IW5

<Alert variant="warning">

The officially supported way of installing IW5 is to download the free MW3 Dedicated Server via Steam. The repair guide will cover repairing your game files via Steam, this also works if you own the game on Steam.
Any 3rd party repacks of MW3 are not supported by us.

</Alert>

1\. Open Steam and navigate to your Steam Library.

2\. Locate the MW3 Dedicated Server or MW3 Multiplayer (if you own it) in your Steam library.

3\. Right click the entry in your Steam library and click `Properties`.

![steamlibrary](/images/docs/repair/7PASWFp.png)

4\. Click `Local Files` and hit `Verify integrity of tool files...` (this will be called `Verify integrity of game files...` if you own the game on Steam).

![steamproperties](/images/docs/repair/qyfKXnz.png)

5\. Steam will now check your local files and download any missing or outdated ones, as soon as it's done your game files should be repaired.

<Alert variant="warning">

If you don't own the game on Steam and use the MW3 Dedicated Server files to play make sure the language (below `local files` in the properties dialogue) is set to `English`.
Steam provides incomplete files if any language other than `English` is set.

</Alert>

<Alert variant="warning">

If you don't own the DLCs on Steam or use the MW3 Dedicated Server files, Steam won't check and repair the DLC files and they have to be redownloaded manually.

</Alert>
