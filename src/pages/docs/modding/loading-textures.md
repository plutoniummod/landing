# Loading Camos/Textures into Plutonium

## Requirements

Textures in .iwi format, you can find community made camos and other textures in the modding release sections on our forums:

- [For T4](https://forum.plutonium.pw/category/40/waw-modding-releases-resources)
- [For IW5](https://forum.plutonium.pw/category/27/mw3-modding-releases-resources)
- [For T6](https://forum.plutonium.pw/category/23/bo2-modding-releases-resources)

## Getting Started

1\. Navigate to Plutonium's `storage` folder, this folder is used to load textures aswell as scripts and other rawfiles into the game(s). Do so by pressing `Win+R` or searching for "Run" in the start menu and pasting `%localappdata%\Plutonium\storage` into the "Run" Dialogue.

2\. Depending on which game you want to load a custom texture/camo into navigate to the following folder:

- For T4:  `\t4\images`
- For T5: `\t5\images`
- For IW5: `\iw5\images`
- For T6: `\t6\images`

<Alert variant="tip">

If the `images` folder does not exist in one or more of the directories mentioned above simply create it.

</Alert>

3\. Put the desired .iwi file into the `images` folder. This is an example image of what an iw5 images folder with a bunch of custom camos/textures looks like:

![ImagesFolder](/images/docs/modding/loading-textures/mc8ekrR.png)

## Important Notes on Camos/Textures

- Camos and other textures only work on the game they were created for, the .iwi version is different between games.
- Camos and other textures have to replace an existing texture that is already in the game, therefore the filename has to be the same as the one of the texture that is being replaced.
- Camos and other textures are only visible to you, other players still see the original texture.

<Alert variant="danger">

Replacing textures of player models and other map elements that can give you an advantage over other players (e.g. "painting" a playermodel in a bright color) can get you banned. This is also known as "texture hacking".

</Alert>
